// repositories/promptRepository.js
// Responsible for reading and writing prompt records in MongoDB.
// Used by PromptService to persist evaluation results.

class PromptRepository {
  /**
   * Saves a new prompt along with its risk score and decision.
   * @param {object} data - { content, riskScore, decision, userId }
   * @returns {object} - the saved prompt document
   */
  async create(data) {
    // insert into the Prompt collection
  }

  /**
   * Returns all prompts that were submitted by a given user.
   * @param {string} userId
   * @returns {Array}
   */
  async findByUserId(userId) {
    // filter prompts by userId
  }

  /**
   * Returns every prompt in the database — intended for admin audit view.
   * @returns {Array}
   */
  async findAll() {
    // fetch all records from the Prompt collection
  }
}

module.exports = new PromptRepository();
