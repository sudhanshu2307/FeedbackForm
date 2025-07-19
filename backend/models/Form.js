const mongoose = require('mongoose');
const formSchema = new mongoose.Schema({
    title: { type: String, required: true },
    questions: [
        {
            questionText: String,
            type: { type: String, enum: ['text', 'multiple-choice'], default: 'text' },
            options: [String], // for MCQs
        }
    ],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });
module.exports = mongoose.model('Form', formSchema);
