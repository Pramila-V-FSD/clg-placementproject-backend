const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { sendVerificationEmail } = require('../services/emailService');

exports.register = async (req, res) => {
  try {
    const { email, password, role, ...profileData } = req.body;
    
    const user = new User({
      email,
      password,
      role,
      ...profileData
    });
    
    await user.save();
    
    // Send verification email
   // await sendVerificationEmail(user);
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });
    
    res.status(201).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });
    
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};