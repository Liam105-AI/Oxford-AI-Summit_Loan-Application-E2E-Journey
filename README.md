# 🤖 Multi-Agent Loan Processing System

[![TypeScript](https://img.shields.io/badge/TypeScript-97.1%25-blue)]() [![CSS](https://img.shields.io/badge/CSS-2.0%25-1572B6)]() [![Deployed](https://img.shields.io/badge/Status-Live-brightgreen)]()

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
- Financial data analysis
- Risk factor identification
- Confidence scoring
- Regulatory compliance checking

2. **Decision Explainer Agent**
- Clear reasoning articulation
- Next steps recommendation
- Stakeholder action items
- Professional communication formatting

## Workflow Process

1. **Application Submission** - User completes 13-field loan application
2. **Webhook Trigger** - Make.com receives form data via webhook
3. **Risk Analysis** - Lyzr Risk Intelligence Agent evaluates application
4. **Decision Explanation** - Second agent provides reasoning and recommendations
5. **Text Processing** - Custom parser extracts structured sections from AI output
6. **Stakeholder Notification** - Automated email sent to relevant parties

## Repository Structure

- `/oxford-submission/` - Technical implementation and academic submission materials
- `/business-context/` - Strategic analysis of when and how this approach adds genuine business value

## What I Learned

- **Where agents add value**: Complex process orchestration across multiple systems with variable workflow paths

- **Where they don't**: Simple automation, high-stakes compliance decisions, unclear business requirements

- **Implementation reality**: Technical complexity is moderate but AI assisted workflows lower barriers to entry; organisational complexity is high, and cost of iteration requires careful economic modelling

See `/business-context/` for detailed analysis of real-world application considerations.

## System Status

- ✅ **Fully Operational** - Complete end-to-end processing
- ✅ **Tested** - Successfully processing loan applications
- ✅ **Deployed** - Live on Lovable platform
- ✅ **Email Integration** - Confirmed delivery to stakeholders

## Getting Started

### Prerequisites
- Make.com account with workflow access
- Lovable account
- Lyzr account with agent access
- Gmail account for notifications

### Installation
```bash
git clone https://github.com/Liam105-AI/jade-loan-collaborate-now.git
cd jade-loan-collaborate-now
npm install
npm run dev
```
### Future Enhancements
- Supabase database integration for application persistence
- Advanced analytics dashboard
- Multi-language support
- Enhanced security features
- Mobile application version

### **Developer**
Built as part of the Oxford AI Summit Challenge by Liam - showcasing multi-agent system development.
