# Sequence Diagram

## Prompt Submission Flow

This diagram walks through what happens when a user submits a prompt. The request goes from the frontend to the backend, gets scored by the risk engine, checked against the policy threshold, saved to the database, and then the result is sent back.

### PlantUML

```plantuml
@startuml SequenceDiagram

actor User
participant "Frontend\n(React)" as Frontend
participant "PromptController" as Controller
participant "PromptService" as Service
participant "RuleBasedRiskEvaluator" as RiskEngine
participant "PolicyService" as PolicyEngine
participant "PromptRepository" as Repository
database "MongoDB" as DB

User -> Frontend : Enter prompt text
Frontend -> Controller : POST /api/prompts\n{ content: "..." }

Controller -> Service : submitPrompt(content, userId)

Service -> RiskEngine : evaluate(content)
note right of RiskEngine : Scans for risky keywords\nand patterns, returns a score
RiskEngine --> Service : riskScore (e.g. 0.75)

Service -> PolicyEngine : getPolicy()
note right of PolicyEngine : Fetches the current\nrisk threshold from DB
PolicyEngine --> Service : policy.riskThreshold

note over Service : Compare riskScore against\nthreshold → ALLOW or BLOCK

Service -> Repository : create({ content, riskScore, decision, userId })
Repository -> DB : Insert prompt record
DB --> Repository : Saved
Repository --> Service : Saved prompt

Service --> Controller : { riskScore, decision }
Controller --> Frontend : 200 OK\n{ riskScore, decision }
Frontend --> User : Show result\n(Allowed / Blocked)

@enduml
```
