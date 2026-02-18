# Prompt Risk Evaluation & Policy Management System

## 1. Problem Statement

A lot of modern applications accept text input from users — things like search queries, form submissions, chat messages, and so on. The problem is, not all user input is safe. Some of it might contain harmful content, policy violations, or just stuff that shouldn't be processed without any checks.

If the backend blindly processes everything it receives, it opens the door to issues like:
- Harmful or abusive content getting through
- Violations of content policies set by the organization
- No record of what was processed and why, making auditing difficult

So the idea here is pretty straightforward: we need a backend system that can look at a text prompt, figure out how risky it is, and then decide whether to allow it or block it — all based on configurable rules rather than any kind of guesswork.

## 2. Proposed Solution

We're building a backend system that sits between the user and the application logic. Before any prompt gets processed further, it goes through our evaluation pipeline. Here's what the system does:

- **Rule-Based Risk Scoring** — When a prompt comes in, the system runs it through a set of predefined rules (like checking for certain keywords or patterns) and assigns it a numeric risk score.
- **Policy Threshold Comparison** — That risk score gets compared against a threshold value. This threshold is configurable, so admins can tighten or loosen the policy as needed.
- **Decision Engine** — Based on whether the score is above or below the threshold, the system makes a simple call: ALLOW or BLOCK.
- **Audit Logging** — Every prompt, along with its score and the resulting decision, gets saved to the database. This gives us a full trail for compliance and review.
- **Admin-Configurable Policies** — Admins don't need to touch the code to change the threshold. They can update it through the system whenever they want.

## 3. Key Features

| Feature                  | Description                                                        |
|--------------------------|--------------------------------------------------------------------|
| User Authentication      | Basic registration and login for both users and admins            |
| Submit Prompt            | Users can submit text prompts that get evaluated by the system    |
| Risk Score Calculation   | A rule-based engine scores each prompt based on predefined rules  |
| Policy Enforcement       | The prompt is either allowed or blocked depending on the threshold|
| Audit Logging            | Every submission and its outcome are stored for later review      |
| Admin Policy Management  | Admins can adjust the risk threshold without code changes         |

## 4. Architecture Overview

The backend uses a standard layered architecture. Each layer has a clear job, and they communicate in sequence:

```
Controller → Service → Risk Engine → Policy Engine → Repository → Database
```

- **Controller Layer** — Receives HTTP requests from the frontend and passes them along to the right service.
- **Service Layer** — This is where the main business logic lives. It coordinates between the risk engine, policy engine, and the database.
- **Risk Engine** — Takes in the prompt text and runs it through the scoring rules. Returns a numeric score.
- **Policy Engine** — Compares the score against the current threshold and returns ALLOW or BLOCK.
- **Repository Layer** — Handles all the database read/write operations. We use the Repository Pattern here so the services don't talk to the database directly.
- **Database** — MongoDB is used to store users, prompts (with their scores and decisions), and policy settings.

## 5. Tech Stack

| Layer     | Technology     |
|-----------|----------------|
| Backend   | Node.js        |
| Framework | Express.js     |
| Database  | MongoDB        |
| ORM       | Prisma ORM     |
| Frontend  | React          |

## 6. Design Principles

- **OOP (Encapsulation, Abstraction)** — The core logic is split into classes, each with its own responsibility. For example, the risk engine doesn't need to know anything about how data is stored.
- **Strategy Pattern** — We use this for the risk evaluation step. Right now we have `RuleBasedRiskEvaluator`, but the design lets us swap in a different strategy later without changing the rest of the code.
- **Repository Pattern** — All database access goes through repository classes. This keeps the service layer clean and makes it easier to switch databases if needed.
- **Middleware for Authentication** — Authentication and role checks are handled by Express middleware, so we don't have to repeat that logic in every controller.
