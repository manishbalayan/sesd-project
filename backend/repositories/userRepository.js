// repositories/userRepository.js
// Handles all database operations related to users.
// Wraps Prisma calls so the rest of the app doesn't touch the DB directly.

class UserRepository {
  /**
   * Looks up a user by their ID.
   * @param {string} id
   * @returns {object|null}
   */
  async findById(id) {
    // query the User collection by id
  }

  /**
   * Looks up a user by email — mainly used during login.
   * @param {string} email
   * @returns {object|null}
   */
  async findByEmail(email) {
    // query the User collection by email
  }

  /**
   * Inserts a new user into the database.
   * @param {object} data - { name, email, password, role }
   * @returns {object} - the created user
   */
  async create(data) {
    // insert into the User collection and return the new record
  }
}

module.exports = new UserRepository();
