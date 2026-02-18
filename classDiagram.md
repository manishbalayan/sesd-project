# Class Diagram

## Prompt Risk Evaluation & Policy Management System

This diagram shows the main classes in the backend, grouped by their role. The models represent the data, the services handle business logic, the risk engine does the scoring, and the repositories take care of database access.

### Classes Overview

| Class                    | Type       | Description                                     |
|--------------------------|------------|-------------------------------------------------|
| User                     | Model      | Registered user with a role (USER or ADMIN)     |
| Prompt                   | Model      | A submitted prompt along with its score and decision |
| Policy                   | Model      | Stores the current risk threshold               |
| PromptService            | Service    | Coordinates prompt evaluation and storage       |
| PolicyService            | Service    | Handles reading and updating the policy         |
| RiskEvaluator            | Abstract   | Base class for risk scoring strategies          |
| RuleBasedRiskEvaluator   | Strategy   | Scores prompts using keyword and pattern rules  |
| UserRepository           | Repository | Reads and writes User records                   |
| PromptRepository         | Repository | Reads and writes Prompt records                 |
| PolicyRepository         | Repository | Reads and writes Policy records                 |

### PlantUML

```plantuml
@startuml ClassDiagram

skinparam classAttributeIconSize 0

' --- Models ---

class User {
    - id : String
    - name : String
    - email : String
    - password : String
    - role : String
}

class Prompt {
    - id : String
    - content : String
    - riskScore : Number
    - decision : String
    - userId : String
    - createdAt : Date
}

class Policy {
    - id : String
    - riskThreshold : Number
    - updatedAt : Date
}

' --- Services ---

class PromptService {
    + submitPrompt(content, userId) : Prompt
    + getPromptsByUser(userId) : Prompt[]
}

class PolicyService {
    + getPolicy() : Policy
    + updateThreshold(value) : Policy
}

' --- Risk Engine (Strategy Pattern) ---

abstract class RiskEvaluator {
    + {abstract} evaluate(content) : Number
}

class RuleBasedRiskEvaluator {
    + evaluate(content) : Number
}

' --- Repositories ---

class UserRepository {
    + findById(id) : User
    + findByEmail(email) : User
    + create(data) : User
}

class PromptRepository {
    + create(data) : Prompt
    + findByUserId(userId) : Prompt[]
    + findAll() : Prompt[]
}

class PolicyRepository {
    + findActive() : Policy
    + update(data) : Policy
}

' --- Relationships ---

RuleBasedRiskEvaluator --|> RiskEvaluator : extends

PromptService --> RiskEvaluator : uses
PromptService --> PolicyService : uses
PromptService --> PromptRepository : uses

PolicyService --> PolicyRepository : uses

UserRepository --> User : manages
PromptRepository --> Prompt : manages
PolicyRepository --> Policy : manages

User "1" --> "0..*" Prompt : submits

@enduml
```
