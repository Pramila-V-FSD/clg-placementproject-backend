const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const cors = require('cors');
const { errorHandler } = require('./middleware/errorHandler');

// Load environment variables
require('dotenv').config();

// Connect to database
connectDB();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/jobs', require('./routes/jobRoutes'));
app.use('/api/applications', require('./routes/applicationRoutes'));
app.use('/api/interviews', require('./routes/interviewRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/company', require('./routes/companyRoutes'));
app.use('/api/drives', require('./routes/placementDriveRoutes'));
app.use('/api/reports', require('./routes/reportRoutes'));

// Error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});