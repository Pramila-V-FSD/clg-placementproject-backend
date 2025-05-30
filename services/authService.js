const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '7d'
  });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};