const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (await User.findOne({ email })) return res.status(400).json({ msg: 'User exists' });
        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hash });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '3d' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ msg: 'Error: ' + err.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '3d' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ msg: 'Error: ' + err.message });
    }
};
