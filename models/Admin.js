const mongoose = require('mongoose');
const User = require('./User');

const AdminSchema = new mongoose.Schema({
  // Admin-specific fields
  department: String,
  permissions: [String]
});

module.exports = User.discriminator('Admin', AdminSchema);