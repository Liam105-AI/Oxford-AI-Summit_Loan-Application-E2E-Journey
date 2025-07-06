# 🤖 Intelligent Multi-Agent Loan Processing System

[![TypeScript](https://img.shields.io/badge/TypeScript-97.1%25-blue)]() [![CSS](https://img.shields.io/badge/CSS-2.0%25-1572B6)]() [![Deployed](https://img.shields.io/badge/Status-Live-brightgreen)]()

## 🌟 Overview

An AI-powered loan processing pipeline that combines multiple intelligent agents, workflow automation, and modern web technologies to provide sophisticated risk assessment and automated stakeholder communication.

**System Demonstration**: View the complete workflow in action through our documentation and demo video.

**🎬 Video Demos**:

Lyzr Agent Demo - [Core Agent Functionality](https://youtu.be/KCvDQ6NYyCw) 

Complete System Demo - [End-to-End Workflow](https://youtu.be/VV7G5TYYaAo) 

Live Demo - [Loan Application Frontend](https://preview--jade-loan-collaborate-now.lovable.app/)

*Note: Demo mode - form submissions are disabled to protect API credits*

**📱 Frontend Preview**: The loan application interface is available for viewing at the Lovable URL above. 

**⚠️ Note**: The live processing system is for demonstration purposes. Please refer to the documentation for implementation details.

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

## 🛠️ Technical Implementation (Leveraging in-built functionality within Lovable and Make.com)

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

### Future Enhancements
- Supabase database integration for application persistence
- Advanced analytics dashboard
- Multi-language support
- Enhanced security features
- Mobile application version

### **Developer**
Built as part of the Oxford AI Summit Challenge by Liam - showcasing multi-agent system development.
