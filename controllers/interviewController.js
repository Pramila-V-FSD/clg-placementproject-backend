const Interview = require('../models/Interview');
const { scheduleZoomMeeting } = require('../services/zoomService');

exports.scheduleInterview = async (req, res) => {
  try {
    let meetingData = {};
    
    if (req.body.type === 'virtual') {
      meetingData = await scheduleZoomMeeting({
        topic: `Interview for ${req.body.applicationId}`,
        start_time: req.body.startTime,
        duration: 30
      });
    }
    
    const interview = new Interview({
      ...req.body,
      meetingLink: meetingData.join_url || null
    });
    
    await interview.save();
    res.status(201).json(interview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find({
      $or: [
        { student: req.user.id },
        { company: req.user.id }
      ]
    }).populate('student company', 'name email');
    
    res.json(interviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};