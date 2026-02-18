// services/riskEngine/riskEvaluator.js
// Abstract base class for the risk evaluation strategy.
// Any new scoring approach should extend this class and implement evaluate().

class RiskEvaluator {
  /**
   * Scores the risk of a given prompt.
   * Subclasses must override this method.
   * @param {string} content - the prompt text
   * @returns {number} - a score between 0.0 (safe) and 1.0 (risky)
   */
  evaluate(content) {
    throw new Error('evaluate() must be implemented by subclass');
  }
}

module.exports = RiskEvaluator;
