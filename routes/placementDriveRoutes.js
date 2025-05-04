const express = require('express');
const router = express.Router();
const {
  createDrive,
  getDrives
} = require('../controllers/placementDriveController');
const { authenticate } = require('../middleware/auth');

router.use(authenticate);

router.post('/', createDrive);
router.get('/', getDrives);

module.exports = router;