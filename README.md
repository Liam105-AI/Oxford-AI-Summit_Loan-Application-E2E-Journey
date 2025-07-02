# 🤖 Intelligent Multi-Agent Loan Processing System

[![TypeScript](https://img.shields.io/badge/TypeScript-97.1%25-blue)]() [![CSS](https://img.shields.io/badge/CSS-2.0%25-1572B6)]() [![Deployed](https://img.shields.io/badge/Status-Live-brightgreen)]()

## 🌟 Overview

An enterprise-grade AI-powered loan processing pipeline that combines multiple intelligent agents, workflow automation, and modern web technologies to provide sophisticated risk assessment and automated stakeholder communication.

**Live Demo**: [https://lovable.dev/projects/7bf7d627-39e5-48bf-a794-e3d36ef3f821](https://lovable.dev/projects/7bf7d627-39e5-48bf-a794-e3d36ef3f821)

## 🏗️ System Architecture

Frontend (Lovable/React) → Make.com Workflow → Lyzr AI Agents → Email Integration
↓                         ↓                    ↓              ↓
13-Field Form → Webhook → Risk Intelligence → Decision Analysis → Stakeholder Communication

### **Technology Stack:**
- **Frontend**: Lovable.dev (React + TypeScript + Tailwind CSS)
- **AI Intelligence**: Dual Lyzr agents with specialized roles
- **Workflow Orchestration**: Make.com (5-module automation pipeline)
- **Data Processing**: Custom regex-based text parsing
- **Communication**: Gmail integration for automated stakeholder routing

## ✨ Key Features

- 📝 **13-Field Comprehensive Application Form** - Professional loan application with validation
- 🤖 **Dual AI Agent System**:
  - **Risk Intelligence Agent** (ID: 6863ee3906bcd0ccc1a73458) - Analyzes financial risk factors
  - **Decision Explainer Agent** (ID: 68640158c781c1fdd3a67701) - Provides reasoning and next steps
- ⚡ **Real-time Processing** - Immediate analysis and stakeholder notification
- 📊 **Structured Output** - Parsed analysis with confidence scoring
- 📧 **Automated Communication** - Professional email delivery to stakeholders

## 🔄 Workflow Process

1. **Application Submission** - User completes 13-field loan application
2. **Webhook Trigger** - Make.com receives form data via webhook
3. **Risk Analysis** - Lyzr Risk Intelligence Agent evaluates application
4. **Decision Explanation** - Second agent provides reasoning and recommendations
5. **Text Processing** - Custom parser extracts structured sections from AI output
6. **Stakeholder Notification** - Automated email sent to relevant parties

## 🧠 AI Agent Capabilities

### Risk Intelligence Agent
- Financial data analysis
- Risk factor identification
- Confidence scoring
- Regulatory compliance checking

### Decision Explainer Agent  
- Clear reasoning articulation
- Next steps recommendation
- Stakeholder action items
- Professional communication formatting

## 🛠️ Technical Implementation

- **Frontend**: Modern React with TypeScript for type safety
- **Styling**: Tailwind CSS for responsive, professional design
- **Integration**: RESTful API communication with Make.com
- **Processing**: Regex-based HTML content extraction
- **Email**: Gmail API integration for stakeholder communication

## 📈 System Status

- ✅ **Fully Operational** - Complete end-to-end processing
- ✅ **Tested** - Successfully processing loan applications
- ✅ **Deployed** - Live on Lovable platform
- ✅ **Email Integration** - Confirmed delivery to stakeholders

## 🚀 Getting Started

### Prerequisites
- Node.js & npm
- Make.com account with workflow access
- Lyzr account with agent access
- Gmail account for notifications

### Installation
```bash
git clone https://github.com/Liam105-AI/jade-loan-collaborate-now.git
cd jade-loan-collaborate-now
npm install
npm run dev

### Future Enhancements
- Supabase database integration for application persistence
- Advanced analytics dashboard
- Multi-language support
- Enhanced security features
- Mobile application version

### **Developer**
Built as part of the Oxford AI Summit Challenge by Liam - showcasing enterprise-grade multi-agent system development.
