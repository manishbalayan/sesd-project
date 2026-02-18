// services/policyService.js
// Manages the risk policy — basically just reading and updating the threshold.
// Used by PromptService during evaluation and by PolicyController for admin access.

class PolicyService {
    /**
     * Gets the currently active policy from the database.
     * @returns {object} - the policy document with riskThreshold
     */
    async getPolicy() {
        // fetch via PolicyRepository.findActive()
    }

    /**
     * Updates the risk threshold to a new value.
     * @param {number} value - the new threshold
     * @returns {object} - the updated policy
     */
    async updateThreshold(value) {
        // update via PolicyRepository.update({ riskThreshold: value })
    }
}

module.exports = new PolicyService();
