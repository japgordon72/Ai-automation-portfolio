# 📞 Voice AI Receptionist

**Type:** Voice AI Agent  
**Tools:** Voice AI Platform · LLM · Call Flow Logic  
**Status:** 🛠️ In Progress — Building this week

---

## Planned Overview

An automated voice receptionist that handles inbound calls, answers frequently asked questions using a knowledge base, and routes complex inquiries to a live agent — available 24/7 with no hold times.

---

## Planned Call Flow

```
Inbound Call
     ↓
  Voice AI Agent (greeting)
     ↓
  Intent Detection
      ├─ [FAQ]         → Knowledge base answer → Resolve
      ├─ [Appointment] → Calendar booking flow
      └─ [Complex]     → Transfer to live agent
```

---

## Key Capabilities (Planned)

| Feature | Description |
|---------|-------------|
| Natural language understanding | Caller speaks naturally, no menu prompts |
| FAQ handling | Instant answers from knowledge base |
| Appointment booking | Integrated calendar flow |
| Live agent transfer | Seamless handoff with context |
| 24/7 availability | No business hours limitation |

---

## Tech Stack (Planned)

| Tool | Role |
|------|------|
| Voice AI Platform | Speech-to-text + text-to-speech |
| LLM | Intent detection + response |
| Calendar API | Appointment scheduling |
| Call routing | Live agent transfer logic |

**Built by Japheth Gordon — TripleTen AI Automation Specialist**