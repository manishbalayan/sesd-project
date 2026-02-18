// services/promptService.js
// The main service for handling prompt submissions.
// It ties together the risk engine, policy check, and database save.

class PromptService {
  /**
   * Takes a prompt, scores it, checks the policy, and saves everything.
   * @param {string} content - the raw prompt text
   * @param {string} userId - who submitted it
   * @returns {object} - { riskScore, decision }
   */
  async submitPrompt(content, userId) {
    // 1. run the prompt through RuleBasedRiskEvaluator.evaluate(content)
    // 2. get the current threshold from PolicyService.getPolicy()
    // 3. compare riskScore vs threshold → decide ALLOW or BLOCK
    // 4. save the prompt record via PromptRepository.create(...)
    // 5. return { riskScore, decision }
  }

  /**
   * Fetches all prompts that belong to a specific user.
   * @param {string} userId
   * @returns {Array}
   */
  async getPromptsByUser(userId) {
    // query PromptRepository.findByUserId(userId)
  }
}

module.exports = new PromptService();
