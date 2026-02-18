// repositories/policyRepository.js
// Reads and updates the policy record in the database.
// There's usually only one active policy at a time.

class PolicyRepository {
  /**
   * Fetches the current active policy.
   * @returns {object|null}
   */
  async findActive() {
    // grab the policy document from the collection
  }

  /**
   * Updates the policy with new values (e.g. a new risk threshold).
   * @param {object} data - { riskThreshold }
   * @returns {object} - the updated policy
   */
  async update(data) {
    // update the existing policy record
  }
}

module.exports = new PolicyRepository();
