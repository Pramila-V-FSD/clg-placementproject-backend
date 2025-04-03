const mongoose = require('mongoose');
const User = require('./User');

const StudentSchema = new mongoose.Schema({
  // Student-specific fields
  enrollmentNumber: { type: String, unique: true },
  department: String,
  batch: String,
  cgpa: Number,
  backlogs: Number,
  academicRecords: [{
    semester: Number,
    sgpa: Number,
    backlogs: Number
  }]
});

module.exports = User.discriminator('Student', StudentSchema);