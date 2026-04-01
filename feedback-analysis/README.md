# 📊 Feedback Analysis Pipeline

**Type:** AI Sentiment Analysis Automation  
**Tools:** Make.com · Google Gemini · JSON Parsing

---

## Overview

Automated pipeline that receives raw customer feedback, sends it to Google Gemini for structured sentiment analysis, and outputs categorized JSON — ready for dashboards or reporting.

---

## Workflow

```
Customer Feedback Input
        ↓
    Make.com
        ↓
  Google Gemini AI
        ↓
  Structured JSON Output
        ↓
  Storage / Notification
```

---

## JSON Output Structure

```json
{
  "sentiment": "positive | neutral | negative",
  "confidence": 0.92,
  "key_themes": ["theme 1", "theme 2"],
  "summary": "One sentence summary",
  "recommended_action": "Follow up / Escalate / Archive"
}
```

---

## Tech Stack

| Tool | Role |
|------|------|
| Make.com | Workflow orchestration |
| Google Gemini | Sentiment + theme analysis |
| JSON Parser | Structured output formatting |

**Built by Japheth Gordon — TripleTen AI Automation Specialist**