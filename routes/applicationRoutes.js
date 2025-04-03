const express = require('express');
const router = express.Router();
const {
  applyForJob,
  getStudentApplications
} = require('../controllers/applicationController');
const { authenticate, authorize } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.use(authenticate);

// Student routes
router.post('/:jobId/apply', authorize('student'), upload.single('resume'), applyForJob);
router.get('/my-applications', authorize('student'), getStudentApplications);

module.exports = router;