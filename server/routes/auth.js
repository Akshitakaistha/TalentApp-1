const express = require('express');
const router = express.Router();

// Hardcoded credentials for demonstration
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'password123'
};

// Login route
router.post('/login', (req, res) => {
  let { username, password } = req.body;

  console.log('Login attempt:', { username, password });

  // Trim whitespace from username and password
  username = username.trim();
  password = password.trim();

  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    res.json({
      success: true,
      user: { username }
    });
  } else {
    console.log('Invalid credentials provided');
    res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }
});

// Verify route (simplified)
router.get('/verify', (req, res) => {
  res.json({ success: true, user: { username: ADMIN_CREDENTIALS.username } });
});

module.exports = router;
