# Call Flow Diagram

## High-Level Architecture
Inbound Call
│
▼
Twilio Phone Number
│
▼
Webhook → n8n Trigger
│
▼
Speech-to-Text (Twilio / OpenAI Whisper)
│
▼
Intent Detection (OpenAI GPT)
│
├──► FAQ Match Found
│ │
│ ▼
│ Generate Answer (OpenAI)
│ │
│ ▼
│ Text-to-Speech (ElevenLabs)
│ │
│ ▼
│ Return Voice Response to Caller
│
└──► No FAQ Match / Escalation Trigger
│
▼
Log Caller Info (Google Sheets)
│
▼
Send Internal Notification (Email / Slack)
│
▼
Human Follow-Up

text

## Node Breakdown

| n8n Node | Function |
|----------|----------|
| Webhook Trigger | Receives inbound call from Twilio |
| OpenAI Node | Detects intent, generates response |
| IF Node | Routes to FAQ answer or escalation |
| ElevenLabs Node | Converts text response to voice audio |
| Google Sheets Node | Logs call details and outcomes |
| Email / Slack Node | Sends escalation notifications |
| Respond to Webhook | Returns TwiML response to Twilio |

## Conversation States

1. **Greeting** — AI introduces itself and asks how it can help
2. **Intent Detection** — classifies caller request
3. **FAQ Response** — answers if match found in knowledge base
4. **Info Collection** — gathers name and contact if needed
5. **Escalation** — routes to human if out of scope
6. **Closing** — thanks caller and confirms next steps
