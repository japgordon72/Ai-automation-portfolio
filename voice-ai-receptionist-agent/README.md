# Voice AI Receptionist Agent

An AI-powered voice receptionist that answers inbound calls, handles FAQs, qualifies callers, and routes inquiries — fully automated using n8n, Twilio, ElevenLabs, and OpenAI.

## Problem

Small businesses miss inbound calls when staff are unavailable. Every missed call is a lost lead, delayed support, or a frustrated customer. Hiring a full-time receptionist is expensive and inconsistent.

## Solution

This workflow deploys an AI voice receptionist that picks up every call, answers common questions instantly, captures caller information, and routes or escalates when needed — without any human intervention on first contact.

## Stack

- n8n (workflow orchestration)
- Twilio (inbound call handling + webhooks)
- ElevenLabs (natural AI voice generation)
- OpenAI GPT (intent detection + response generation)
- Google Sheets (call logging + analytics)

## Use Case

Designed for small service businesses — clinics, gyms, contractors, law offices — that receive repetitive inbound calls about:
- Hours of operation
- Pricing and services
- Appointment availability
- Location and directions
- General support questions

## Workflow Architecture

1. Customer calls the Twilio phone number
2. Twilio sends inbound call webhook to n8n endpoint
3. n8n triggers the voice receptionist workflow
4. OpenAI detects caller intent from speech input
5. AI generates a response using the FAQ knowledge base
6. ElevenLabs converts the response to natural voice audio
7. If escalation is needed, workflow logs and routes to human follow-up
8. All call details are saved to Google Sheets

## Folder Contents

| File | Description |
|------|-------------|
| `README.md` | Project overview and setup guide |
| `workflow-call-handler.json` | n8n inbound call workflow |
| `workflow-faq-router.json` | n8n FAQ classification and routing logic |
| `system-prompt.md` | AI receptionist behavior and personality prompt |
| `faq-knowledge-base.md` | Approved FAQs and response content |
| `twilio-setup-guide.md` | Twilio phone number and webhook configuration |
| `call-flow-diagram.md` | Visual architecture and conversation routing logic |

## Business Impact

- Automates first-response handling for 100% of inbound calls
- Eliminates missed calls during off-hours or busy periods
- Reduces front-desk workload by handling repetitive inquiries
- Captures lead information automatically for follow-up
- Scalable architecture adaptable across industries

## Setup Instructions

1. Purchase or configure a Twilio phone number with voice capability
2. Point the Twilio voice webhook URL to your n8n webhook endpoint
3. Import `workflow-call-handler.json` and `workflow-faq-router.json` into n8n
4. Add your OpenAI and ElevenLabs API keys to n8n credentials
5. Customize `faq-knowledge-base.md` with your business-specific FAQs
6. Connect Google Sheets node for call logging
7. Test with a live call to your Twilio number

## Metrics Tracked

- Total inbound calls handled
- FAQ resolution rate
- Escalation rate
- Leads captured per session
- Average call handling time

## Future Improvements

- Live calendar booking integration (Google Calendar / Calendly)
- CRM integration (HubSpot, GoHighLevel)
- SMS follow-up after every call
- Multi-language voice support
- Sentiment detection for caller mood routing
- Real-time human handoff via warm transfer

## Author

**Japheth Gordon**
Entry-Level AI Automation Specialist | San Diego, CA
GitHub: https://github.com/japgordon72/Ai-automation-portfolio
