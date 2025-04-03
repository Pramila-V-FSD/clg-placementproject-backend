const mongoose = require('mongoose');

const PlacementDriveSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  participatingCompanies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  registeredStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed'],
    default: 'upcoming'
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PlacementDrive', PlacementDriveSchema);