// routes/index.js
// Central place for all API route definitions.
// Each route points to a controller method, with middleware applied where needed.

const express = require('express');
const router = express.Router();

// -- Controller imports --
// const authController = require('../controllers/authController');
// const promptController = require('../controllers/promptController');
// const policyController = require('../controllers/policyController');

// -- Middleware imports --
// const { authenticate, authorizeAdmin } = require('../middleware/authMiddleware');

// Auth
// router.post('/auth/register', authController.register);
// router.post('/auth/login', authController.login);

// Prompts (requires login)
// router.post('/prompts', authenticate, promptController.submitPrompt);
// router.get('/prompts', authenticate, promptController.getPromptHistory);

// Policy (admin only)
// router.get('/policy', authenticate, authorizeAdmin, policyController.getPolicy);
// router.put('/policy', authenticate, authorizeAdmin, policyController.updateThreshold);

module.exports = router;
