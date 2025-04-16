const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/send-email', async (req, res) => {
  const { email, message } = req.body;

  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL, // This needs to be verified in SendGrid dashboard
    subject: 'New Peer Support Message',
    text: `From: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('SendGrid error:', error.response?.body || error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
});

module.exports = router;
