// services/riskEngine/ruleBasedRiskEvaluator.js
// Concrete strategy that scores prompts using simple keyword and pattern rules.
// Extends the abstract RiskEvaluator class.

const RiskEvaluator = require('./riskEvaluator');

class RuleBasedRiskEvaluator extends RiskEvaluator {
  /**
   * Checks the prompt against a list of risky keywords/patterns
   * and returns a normalized risk score.
   * @param {string} content - the prompt text
   * @returns {number} - score between 0.0 and 1.0
   */
  evaluate(content) {
    // define a list of flagged keywords
    // scan the content for matches
    // calculate a normalized score based on how many matched
    // return the score
  }
}

module.exports = new RuleBasedRiskEvaluator();
