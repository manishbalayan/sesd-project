# Prompt Risk Evaluation & Policy Management System

## About the Project

This project is a backend-focused system that evaluates user-submitted text prompts before they are processed further. The idea behind it is simple: not all user input is safe, and applications should have a mechanism to assess and enforce policies on incoming data.

The system calculates a risk score for each submitted prompt using rule-based logic. It then compares that score against a configurable policy threshold and decides whether the prompt should be allowed or blocked. All decisions are stored for reference and auditing.

This repository represents the Milestone-1 submission, so the focus here is on system design, architecture, and structured planning rather than full implementation.

---

## Why This System Is Needed

Many applications accept text input from users. However, blindly processing user input can lead to moderation issues, policy violations, or security risks.

Instead of directly accepting and processing prompts, this system introduces a backend validation layer. The goal is to create a structured decision engine that evaluates risk before allowing further action.

---

## What This Milestone Includes

For Milestone-1, the following are included:

- Clear problem definition
- System architecture planning
- UML diagrams (Use Case, Sequence, Class, ER)
- Backend folder structure
- Design pattern modeling
- Prisma schema for database structure

The backend files currently contain structured placeholders and comments. The focus at this stage is clean architecture and consistency across all design artifacts.

---

## Core Features (Planned Implementation)

- User registration and login
- Prompt submission
- Rule-based risk scoring
- Policy threshold comparison
- Allow / Block decision generation
- Audit logging of decisions
- Admin control over risk threshold

---

## System Architecture

The backend follows a layered approach:

Controller → Service → Risk Evaluator → Policy Service → Repository → Database

This separation helps keep responsibilities clear and makes the system easier to expand in later milestones.

---

## Design Principles Used

The structure reflects standard software engineering practices:

- **Encapsulation** – Business logic handled inside service layers
- **Abstraction** – Risk evaluation abstracted via a base evaluator
- **Strategy Pattern** – Different risk evaluation strategies can be introduced later
- **Repository Pattern** – Database operations separated from business logic
- **Middleware** – Authentication and authorization handled separately

---

## Tech Stack

Backend:
- Node.js
- Express.js
- MongoDB
- Prisma ORM

Frontend (to be developed later):
- React

---

## Project Structure

```
.
├── idea.md
├── useCaseDiagram.md
├── sequenceDiagram.md
├── classDiagram.md
├── ErDiagram.md
├── README.md
│
└── backend/
    ├── controllers/
    │   ├── authController.js
    │   ├── promptController.js
    │   └── policyController.js
    │
    ├── services/
    │   ├── promptService.js
    │   ├── policyService.js
    │   └── riskEngine/
    │       ├── riskEvaluator.js
    │       └── ruleBasedRiskEvaluator.js
    │
    ├── repositories/
    │   ├── userRepository.js
    │   ├── promptRepository.js
    │   └── policyRepository.js
    │
    ├── middleware/
    │   └── authMiddleware.js
    │
    ├── routes/
    │   └── index.js
    │
    ├── prisma/
    │   └── schema.prisma
    │
    ├── config/
    │   └── index.js
    │
    ├── app.js
    └── server.js
```


## Current Status

This submission focuses on architecture and planning.  
Implementation logic will be completed in future milestones.

---

## Notes

The scope has been intentionally kept focused to ensure a strong backend foundation. The design allows future extension without major restructuring.
