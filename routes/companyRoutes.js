const express = require('express');
const router = express.Router();
const {
  postJob,
  viewApplicants
} = require('../controllers/companyController');
const { authenticate, authorize } = require('../middleware/auth');

router.use(authenticate);
router.use(authorize('company'));

router.post('/jobs', postJob);
router.get('/jobs/:jobId/applicants', viewApplicants);

module.exports = router;