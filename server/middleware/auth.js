
// Simple auth middleware for session-based auth
const auth = (req, res, next) => {
  // For this simplified version, we'll just pass through
  // In a real app, you might check session or other auth mechanism
  next();
};

module.exports = auth;
