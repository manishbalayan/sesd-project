# Use Case Diagram

## Prompt Risk Evaluation & Policy Management System

There are two main actors in the system — a regular **User** and an **Admin**. Users interact with the prompt submission side of things, while Admins handle the configuration and monitoring.

### Actors

- **User** — Can register, log in, submit prompts, and check their past submissions.
- **Admin** — Can log in, set the risk threshold, and view all audit logs.

### Use Cases

| Actor | Use Case                 |
|-------|--------------------------|
| User  | Register                 |
| User  | Login                    |
| User  | Submit Prompt            |
| User  | View Prompt History      |
| Admin | Login                    |
| Admin | Configure Risk Threshold |
| Admin | View All Logs            |

### PlantUML

```plantuml
@startuml UseCaseDiagram

left to right direction
skinparam actorStyle awesome

actor User
actor Admin

rectangle "Prompt Risk Evaluation & Policy Management System" {
    usecase "Register" as UC1
    usecase "Login" as UC2
    usecase "Submit Prompt" as UC3
    usecase "View Prompt History" as UC4
    usecase "Configure Risk Threshold" as UC5
    usecase "View All Logs" as UC6
}

User --> UC1
User --> UC2
User --> UC3
User --> UC4

Admin --> UC2
Admin --> UC5
Admin --> UC6

@enduml
```
