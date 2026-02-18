// controllers/promptController.js
// Receives prompt-related HTTP requests and hands them off to PromptService.
// This is the entry point for submitting and retrieving prompts.

class PromptController {
  /**
   * POST /api/prompts
   * Takes the prompt text from the request, sends it to PromptService
   * for risk evaluation, and returns the score + decision to the client.
   */
  async submitPrompt(req, res) {
    // extract prompt content from req.body
    // get the authenticated user's ID from req.user
    // call PromptService.submitPrompt(content, userId)
    // respond with the risk score and decision
  }

  /**
   * GET /api/prompts
   * Returns all past prompts for the currently logged-in user.
   */
  async getPromptHistory(req, res) {
    // get userId from req.user
    // fetch prompt list via PromptService.getPromptsByUser(userId)
    // send the list back as JSON
  }
}

module.exports = new PromptController();
