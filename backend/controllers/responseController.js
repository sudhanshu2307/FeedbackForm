const Response = require('../models/Response');
const Form = require('../models/Form');

exports.submitResponse = async (req, res) => {
    const { formId } = req.params;
    const { answers } = req.body;
    try {
        const form = await Form.findById(formId);
        if (!form) return res.status(404).json({ msg: 'Form not found' });
        if (!answers || answers.length !== form.questions.length)
            return res.status(400).json({ msg: "Incorrect answers length" });

        const response = await Response.create({ form: formId, answers });
        res.json({ msg: "Response submitted!" });
    } catch (err) {
        res.status(500).json({ msg: 'Error: ' + err.message });
    }
};
