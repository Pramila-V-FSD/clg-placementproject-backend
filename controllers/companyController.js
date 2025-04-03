const Job = require('../models/Job');
const Application = require('../models/Application');

exports.postJob = async (req, res) => {
  try {
    const job = new Job({
      ...req.body,
      company: req.user.id
    });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.viewApplicants = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const applicants = await Application.find({ job: jobId })
      .populate('student', 'name email resume');
    res.json(applicants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};