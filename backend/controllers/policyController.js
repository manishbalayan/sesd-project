// controllers/policyController.js
// Exposes endpoints for reading and updating the risk policy.
// These routes are restricted to admin users only.

class PolicyController {
  /**
   * GET /api/policy
   * Returns the current risk threshold from the active policy.
   */
  async getPolicy(req, res) {
    // fetch the active policy via PolicyService
    // return it as JSON
  }

  /**
   * PUT /api/policy
   * Lets an admin update the risk threshold value.
   */
  async updateThreshold(req, res) {
    // read the new threshold from req.body
    // pass it to PolicyService.updateThreshold()
    // send back the updated policy
  }
}

module.exports = new PolicyController();
