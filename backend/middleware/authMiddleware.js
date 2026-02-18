// middleware/authMiddleware.js
// Express middleware for protecting routes.
// authenticate() checks for a valid JWT, authorizeAdmin() checks the user's role.

/**
 * Verifies the JWT from the Authorization header.
 * If valid, attaches the decoded user info to req.user.
 * Otherwise, responds with 401.
 */
const authenticate = (req, res, next) => {
  // read the token from the Authorization header
  // verify it against the JWT secret
  // attach decoded payload to req.user
  // call next() if valid, or return 401
};

/**
 * Checks whether the authenticated user has an ADMIN role.
 * Should always be used after authenticate().
 */
const authorizeAdmin = (req, res, next) => {
  // check req.user.role
  // if ADMIN, call next()
  // otherwise return 403
};

module.exports = { authenticate, authorizeAdmin };
