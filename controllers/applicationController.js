const Application = require('../models/Application');
const { sendEmail } = require('../services/emailService');

exports.applyForJob = async (req, res) => {
  try {
    const application = new Application({
      job: req.params.jobId,
      student: req.user.id,
      resume: req.file.path,
      coverLetter: req.body.coverLetter
    });
    
    await application.save();
    
    // Notify company
    await sendEmail({
      to: 'company@example.com',
      subject: 'New Application Received',
      text: `New application for job ${req.params.jobId}`
    });
    
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStudentApplications = async (req, res) => {
  try {
    const applications = await Application.find({ student: req.user.id })
      .populate('job', 'title company')
      .populate('job.company', 'name');
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};