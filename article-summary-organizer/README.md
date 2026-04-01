# 📰 Article Summary Organizer

**Type:** AI Content Automation  
**Tools:** Make.com · OpenAI · Google Forms · Gmail · Google Sheets

---

## Overview

Automated pipeline that accepts article or book content via Google Form, sends it to OpenAI for structured summarization, routes the output based on content type, and delivers results via email — with full logging and error handling.

---

## Workflow

```
Google Forms (Title + Content + Category)
        ↓
    Make.com
        ↓
  OpenAI ChatGPT → Structured JSON
        ↓
     Router
      ├─ [has_actions: true]  → Gmail (summary email) → Google Sheets (log)
      └─ [fallback]           → Google Sheets (error log) → Ignore
```

---

## Router Logic

| Route | Condition | Action |
|-------|-----------|--------|
| Primary | `has_actions = true` | Send Gmail summary → log to Sheets |
| Fallback | No actions found | Log to Sheets only → Ignore module |

The fallback branch ensures no submission is silently dropped — every response is logged even if no action items are detected.

---

## JSON Output Structure

```json
{
  "key_takeaways": ["point 1", "point 2", "point 3"],
  "action_items": ["action 1", "action 2"],
  "has_actions": true
}
```

---

## Tech Stack

| Tool | Role |
|------|------|
| Google Forms | User input (title, content, category) |
| Make.com | Workflow orchestration + routing |
| OpenAI GPT | Structured summarization |
| Gmail | Automated email delivery |
| Google Sheets | Logging + error tracking |

**Built by Japheth Gordon — TripleTen AI Automation Specialist**