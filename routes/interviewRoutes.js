const express = require('express');
const router = express.Router();
const {
  scheduleInterview,
  getInterviews
} = require('../controllers/interviewController');
const { authenticate } = require('../middleware/auth');

router.use(authenticate);

router.post('/', scheduleInterview);
router.get('/', getInterviews);

module.exports = router;