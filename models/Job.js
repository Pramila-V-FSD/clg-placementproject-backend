const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  requirements: [String],
  skillsRequired: [String],
  location: String,
  type: { type: String, enum: ['full-time', 'part-time', 'internship'] },
  salary: {
    min: Number,
    max: Number,
    currency: String
  },
  applicationDeadline: Date,
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);