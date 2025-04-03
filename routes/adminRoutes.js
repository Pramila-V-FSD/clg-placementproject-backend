const express = require('express');
const router = express.Router();
const {
  createPlacementDrive,
  getPlacementStats,
  manageCompanies
} = require('../controllers/adminController');
const { authenticate, authorize } = require('../middleware/auth');

router.use(authenticate);
router.use(authorize('admin'));

router.post('/drives', createPlacementDrive);
router.get('/stats', getPlacementStats);
router.get('/companies', manageCompanies);

module.exports = router;