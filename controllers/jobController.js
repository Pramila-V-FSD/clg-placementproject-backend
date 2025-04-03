const Job = require('../models/Job');

exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find()
      .populate('company', 'name logo')
      .sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getJobDetails = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)
      .populate('company', 'name description website');
    res.json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};