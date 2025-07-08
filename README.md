# 🤖 Multi-Agent Loan Processing System

*One-week hackathon exploration built to understand agent orchestration*

Built a loan processing system using orchestrated AI agents to understand when this approach actually makes sense versus traditional automation.

**Context**: Following Oxford AI Summit 2025's focus on "Autonomous AI Agents: Learning from deployments," I built this to cut through marketing and understand real-world applicability of agents.

## System Demonstration

**Live Demo**: [Loan Application Frontend](https://preview--jade-loan-collaborate-now.lovable.app/)
**Video Demos**: 
- [Core Agent Functionality](https://youtu.be/KCvDQ6NYyCw)
- [End-to-End Workflow](https://youtu.be/VV7G5TYYaAo)

*Note: Demo mode - form submissions disabled to protect API credits*

## What I Built

**System Architecture**: Frontend (Lovable/React) → Make.com Workflow → Lyzr AI Agents → Email Integration

**Technology Stack**:
- Frontend: Lovable.dev (React + TypeScript + Tailwind CSS)
- AI Intelligence: Dual Lyzr agents with specialised roles
- Workflow Orchestration: Make.com automation pipeline
- Communication: Gmail integration for automated stakeholder routing

## Key Components

- **13-Field Comprehensive Application Form** - Professional loan application with validation
- **Dual AI Agent System**:
  - **Risk Intelligence Agent** (ID: 6863ee3906bcd0ccc1a73458) - Analyses financial risk factors
  - **Decision Explainer Agent** (ID: 68640158c781c1fdd3a67701) - Provides reasoning and next steps
- **Real-time Processing** - Immediate analysis and stakeholder notification
- **Structured Output** - Parsed analysis with confidence scoring
- **Automated Communication** - Professional email delivery to stakeholders

**AI Agent Capabilities**

1. **Risk Intelligence Agent**
- Basic financial data evaluation
- Simple risk factor assessment  
- Pattern recognition from application data

2. **Decision Explainer Agent**
- Clear reasoning for demo scenarios
- Next steps recommendations
- Stakeholder communication formatting

## Workflow Process

1. **Application Submission** - User completes 13-field loan application
2. **Webhook Trigger** - Make.com receives form data via webhook
3. **Risk Analysis** - Lyzr Risk Intelligence Agent evaluates application
4. **Decision Explanation** - Second agent provides reasoning and recommendations
5. **Text Processing** - Custom parser extracts structured sections from AI output
6. **Stakeholder Notification** - Automated email sent to relevant parties

## Repository Structure

- `/oxford-submission/` - Technical implementation and academic submission materials  
- `/business-context/` - What I learned building this system and when agents actually make sense vs. hype

## What I Learned

- **Where agents add value**: Complex process orchestration across multiple systems with variable workflow paths

- **Where they don't**: Simple automation, high-stakes compliance decisions, unclear business requirements

- **Implementation reality**: Technical complexity is moderate but AI assisted workflows lower barriers to entry; organisational complexity is high, and cost of iteration requires careful economic modelling

See `/business-context/what-i-learned.md` for honest assessment of leveraging agents in this hackathon

## Getting Started

### Prerequisites
- Make.com account with workflow access
- Lovable account
- Lyzr account with agent access
- Gmail account for notifications

### Demo Access
This is a Lovable-hosted demo. To explore:
1. Visit the live demo link above
2. Review the workflow documentation in `/oxford-submission/`

*Note: This is a demo system, not deployable code*

### Future Enhancements
- Supabase database integration for application persistence
- Advanced analytics dashboard
- Multi-language support
- Enhanced security features
- Mobile application version

### **Developer**
Built as part of the Oxford AI Summit Challenge by Liam - showcasing multi-agent system development.
