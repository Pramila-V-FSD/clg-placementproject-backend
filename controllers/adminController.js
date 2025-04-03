const PlacementDrive = require('../models/PlacementDrive');
const User = require('../models/User');
const { generatePlacementReport } = require('../services/reportService');

exports.createPlacementDrive = async (req, res) => {
  try {
    const drive = new PlacementDrive({
      ...req.body,
      createdBy: req.user.id
    });
    await drive.save();
    res.status(201).json(drive);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPlacementStats = async (req, res) => {
  try {
    const stats = await generatePlacementReport();
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.manageCompanies = async (req, res) => {
  try {
    const companies = await User.find({ role: 'company' });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};