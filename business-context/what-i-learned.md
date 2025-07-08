# What I Learned Building a Multi-Agent Loan System

*I built this as part of the Oxford AI Summit to get hands-on, and cut through the hype and explore and experiment with what could actually work or be enabled in an enterprise contexts*

## Why I Built This

After hearing more about Agents and the future that they promise to "transform business," I wanted to understand what's real versus marketing. So I built a loan processing system using orchestrated agents to see where they actually add value and where they're overkill.

Coming from 11+ years of enterprise transformation and proposition development, I've learned the value of hands on practical experience, to test and see what resonates.

## What I Expected vs. What Actually Happened

### I Expected: "AI Agents Will Automate Everything"
**Reality**: They're (currently) sophisticated workflows with LLM decision points, not truly autonomous systems. Most of my time went to data pipeline cleanup and exception handling, not agent logic.

### I Expected: "Integration Would Be Seamless" 
**Reality**: Same challenges, but with added layer understanding the decision-making, and where I needed to debug. The Lyzr agents worked fine; connecting them to Make.com and Gmail took 3x longer than estimated.

### I Expected: "AI Will Handle Edge Cases Better"
**Reality**: Edge cases required true end-to-end thinking. My happy path worked great with demo data, but when I deliberately tested conflicting information scenarios, the system didn't flag issues in an intuitive way. This highlighted how much thought would need to go into designing the user experience for real deployment.

## Where Agents Actually Helped (Surprised Me)

**Potential to Bridge Silos**
The loan system needed to exercise enough judgement to provide meaningful actionable information to stakeholders simultaneously. Agents coordinated this better than I expected - they could reason about conflicting information, and provide more context instead of just failing.

**Dynamic Risk Assessment Logic**
When applicant profiles didn't fit standard categories (self-employed, irregular income, etc.), agents adapted the risk evaluation process. Traditional rules would have required complex logic and still not been exhaustive.

## Where I Should Have Just Used Normal Automation

**Simple Approval/Rejection Decisions**
Clear criteria (credit score > 750, income > 3x payment) work better with deterministic rules. More predictable, easier to audit, no AI complexity needed.

**Regulatory Compliance Checks**
Anything requiring audit trails or regulatory reporting. AI decisions create documentation complexity that could create more challenges in the workflow overall.

## The Data Quality Wake-Up Call

This was the biggest learning: your agents are only as good as your data pipelines. I spent 60% of development time cleaning data connections, not building agent logic.

If your data quality isn't consistently above 85%, fix that first. Agents amplify data problems rather than hiding them.

## Cost Reality Check

**What Would Actually Cost Money in Real Deployment**:
- Ongoing monitoring and adjustment (not one-time setup)
- Integration debugging when systems changed
- Extensive user research to understand AI explanation preferences
- Customer service training for "why did the AI say that?" questions
- Manual backup processes for when agents failed

**Key Considerations from Building This**:
- "24/7 availability" would still need human escalation paths
- "Faster processing" depends on your slowest data source
- "Consistent decisions" assumes consistent training data (it never is)

## What Real Deployment Would Require

**User Testing Complexity**: Building this demo revealed how challenging it would be to test agent behavior with real users. Traditional A/B testing breaks when your system makes different decisions for similar inputs. How do you validate that "intelligent" responses actually help users?

**Explanation Design Challenge**: Even in limited testing scenarios, it became clear that users would need consistent explanation patterns, not just consistent logic. The system could reason about conflicting information, but explaining that reasoning clearly to confused applicants would be a major design challenge.

**Transparency vs. Simplicity Trade-off**: Show users the AI reasoning or hide it? Too much detail would overwhelm; too little feels arbitrary. This balance would require extensive user research with real scenarios before deployment.

## When I'd Use This Approach Again

**Complex Process Orchestration**: Multiple systems that need coordination where the workflow path changes based on context. The loan application routing different approval workflows based on risk profile actually worked well.

**Variable Decision Trees Under Time Pressure**: Business logic too complex for if/then rules but not complex enough for human judgment. Risk assessment pulling from multiple data sources simultaneously.

**Real-Time Data Aggregation**: When manual coordination creates delays and the logic isn't straightforward.

## When I'd Avoid It

**Straightforward Workflows**: If you can map it in a flowchart with clear decision points, use traditional automation.

**High-Stakes Decisions**: Anything involving large financial exposure or regulatory compliance.

**Unclear Requirements**: If you can't define success criteria clearly, adding AI complexity won't help.

## What I'd Tell Someone Else Experimenting

Start by mapping your current user journey completely - not just the process flow, but how users actually experience decisions and explanations today. If users can't understand how decisions get made currently, AI won't make it clearer.

Then ask: what specific user problem are we solving that normal automation can't handle? If the answer involves buzzwords like "personalisation" without user research to back it up, you're probably not ready.

Most importantly: plan for extensive user testing before real deployment. Building this demo showed me that user acceptance would be the biggest challenge, not technical implementation.

## The Honest ROI Assessment

**Technical Complexity**: Moderate with low-code platforms (Make.com, Lyzr, Lovable made this manageable)

**Organisational Complexity**: High - requires process redesign, governance frameworks, and change management

**Value Threshold**: Must clear significantly higher bar than traditional automation due to implementation overhead

For my loan system, agents added value because the workflow genuinely varied based on applicant context. But 70% of what I built could have been simpler automation.

## Bottom Line

Multi-agent systems work for complex, multi-system environments where traditional automation falls short. But most enterprises would get better ROI from fixing data quality and process clarity first.

I'm glad I built this - it forced me to understand the technology beyond demos. Now I know when to recommend it and when to say "just use normal automation."

The hype is overblown, but the capability is real for the right use cases.

## Strategic Implications for Enterprise Leaders

**Technology Readiness vs. Organisational Readiness Gap**: The technology works reasonably well, but most enterprises lack the data quality and process clarity to use it effectively. This creates a strategic timing question - invest in foundational capabilities first, or risk agent projects failing due to poor groundwork.

**The Innovation Theater Risk**: It's easy to build impressive demos (I did it in a week). The real challenge is sustainable enterprise deployment with governance, compliance, and change management. In my experience, this organisational complexity typically accounts for 70% of transformation project effort, not the technology implementation.

## Scope Reality

This was a one-week hackathon build to understand the technology, not a real enterprise deployment. The insights come from hands-on technical implementation and thinking through what real deployment would require based on enterprise transformation experience.

Building something yourself, even as a demo, teaches you things demos can't.

*Built as part of Oxford AI Summit 2025 challenge - technical details in `/oxford-submission/`*
