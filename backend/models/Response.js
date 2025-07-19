const mongoose = require('mongoose');
const responseSchema = new mongoose.Schema({
    form: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
    answers: [String],
    submittedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Response', responseSchema);
