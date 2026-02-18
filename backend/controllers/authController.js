// controllers/authController.js
// Handles user registration and login requests.
// Actual authentication logic will be implemented in later milestones.

class AuthController {
  /**
   * POST /api/auth/register
   * Takes name, email, and password from the request body,
   * hashes the password, and creates a new user record.
   */
  async register(req, res) {
    // pull name, email, password from req.body
    // hash the password before saving
    // create user via UserRepository
    // send back a success response
  }

  /**
   * POST /api/auth/login
   * Checks email and password, and if valid, returns a JWT token.
   */
  async login(req, res) {
    // grab email and password from req.body
    // look up the user and verify credentials
    // generate a JWT and send it back
  }
}

module.exports = new AuthController();
