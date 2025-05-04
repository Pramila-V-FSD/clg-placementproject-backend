const PlacementDrive = require('../models/PlacementDrive');

exports.createDrive = async (req, res) => {
  try {
    const drive = new PlacementDrive(req.body);
    await drive.save();
    res.status(201).json(drive);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDrives = async (req, res) => {
  try {
    const drives = await PlacementDrive.find()
      .populate('participatingCompanies', 'name logo');
    res.json(drives);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};