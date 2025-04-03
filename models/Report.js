const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['placement', 'company', 'student'], required: true },
  data: mongoose.Schema.Types.Mixed,
  generatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  generatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Report', ReportSchema);