const axios = require('axios');

exports.scheduleZoomMeeting = async (meetingData) => {
  try {
    const response = await axios.post('https://api.zoom.us/v2/users/me/meetings', meetingData, {
      headers: {
        'Authorization': `Bearer ${process.env.ZOOM_JWT_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Zoom API error:', error.response.data);
    throw error;
  }
};