const mongoose = require('mongoose');
const User = require('./User');

const CompanySchema = new mongoose.Schema({
  // Company-specific fields
  companyName: { type: String, required: true },
  industry: String,
  website: String,
  description: String,
  isVerified: { type: Boolean, default: false },
  contactPerson: {
    name: String,
    position: String,
    phone: String
  }
});

module.exports = User.discriminator('Company', CompanySchema);