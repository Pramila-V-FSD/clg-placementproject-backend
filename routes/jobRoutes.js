const express = require('express');
const router = express.Router();
const {
  getAllJobs,
  getJobDetails
} = require('../controllers/jobController');
const { authenticate } = require('../middleware/auth');

router.get('/', getAllJobs);
router.get('/:id', authenticate, getJobDetails);

module.exports = router;