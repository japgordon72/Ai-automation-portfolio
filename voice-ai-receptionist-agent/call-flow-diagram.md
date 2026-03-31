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
