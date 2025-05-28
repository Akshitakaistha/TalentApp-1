const express = require('express');
const router = express.Router();

// Hardcoded credentials
const ADMIN_CREDENTIALS = {
  username: 'Bavneet1212x',
  password: 'OkBavneet'
};

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    res.json({
      success: true,
      user: { username }
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid credentials'
    });
  }
});

// Verify route (simplified)
router.get('/verify', (req, res) => {
  // For simplicity, we'll just return success
  // In a real app, you might want to maintain session state
  res.json({ success: true, user: { username: ADMIN_CREDENTIALS.username } });
});

module.exports = router;