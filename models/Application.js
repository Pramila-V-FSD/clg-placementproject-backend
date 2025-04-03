const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  resume: { type: String, required: true },
  coverLetter: String,
  status: {
    type: String,
    enum: ['submitted', 'under-review', 'shortlisted', 'rejected', 'hired'],
    default: 'submitted'
  },
  appliedAt: { type: Date, default: Date.now },
  feedback: String
});

module.exports = mongoose.model('Application', ApplicationSchema);