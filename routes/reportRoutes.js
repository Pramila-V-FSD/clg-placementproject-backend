const express = require('express');
const router = express.Router();
const {
  getPlacementReport,
  getCompanyReports
} = require('../controllers/reportController');
const { authenticate, authorize } = require('../middleware/auth');

router.use(authenticate);

router.get('/placement', authorize('admin'), getPlacementReport);
router.get('/company', authorize('company'), getCompanyReports);

module.exports = router;