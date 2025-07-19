const Form = require('../models/Form');
const Response = require('../models/Response');

exports.createForm = async (req, res) => {
    const { title, questions } = req.body;
    try {
        if (!title || !questions || questions.length < 3) {
            return res.status(400).json({ msg: 'At least 3 questions required' });
        }
        const form = await Form.create({ title, questions, createdBy: req.user.id });
        res.json(form);
    } catch (err) {
        res.status(500).json({ msg: 'Error: ' + err.message });
    }
};

exports.getMyForms = async (req, res) => {
    try {
        const forms = await Form.find({ createdBy: req.user.id });
        res.json(forms);
    } catch (err) {
        res.status(500).json({ msg: 'Error: ' + err.message });
    }
};

exports.getFormById = async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (!form) return res.status(404).json({ msg: 'Form not found' });
        res.json(form);
    } catch (err) {
        res.status(500).json({ msg: 'Error: ' + err.message });
    }
};

// For dashboard: responses + summary
exports.getFormResponses = async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (!form) return res.status(404).json({ msg: 'Form not found' });
        if (form.createdBy.toString() !== req.user.id)
            return res.status(403).json({ msg: "Unauthorized" });

        const responses = await Response.find({ form: req.params.id });
        // Basic summary: count per option for MCQs
        let summary = null;
        if (form.questions.some(q => q.type === "multiple-choice")) {
            summary = form.questions.map((q, idx) => {
                if (q.type === "multiple-choice") {
                    const counts = {};
                    q.options.forEach(opt => counts[opt] = 0);
                    responses.forEach(resp => {
                        const answer = resp.answers[idx];
                        if (counts[answer] !== undefined) counts[answer]++;
                    });
                    return { question: q.questionText, counts };
                } else {
                    return null;
                }
            });
        }
        res.json({ responses, summary });
    } catch (err) {
        res.status(500).json({ msg: 'Error: ' + err.message });
    }
};
