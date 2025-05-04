const transporter = require('../config/emailConfig');
const jwt = require('jsonwebtoken'); 

exports.sendVerificationEmail = async (user) => {
  const verificationToken = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
  
  const verificationUrl = `${process.env.BASE_URL}/verify-email?token=${verificationToken}`;
  
  await transporter.sendMail({
    to: user.email,
    subject: 'Verify Your Email',
    html: `Click <a href="${verificationUrl}">here</a> to verify your email.`
  });
};

exports.sendEmail = async ({ to, subject, text, html }) => {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject,
    text,
    html
  });
};