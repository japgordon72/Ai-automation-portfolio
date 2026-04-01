# 📊 Feedback Analysis Pipeline

**Type:** AI Sentiment Analysis Automation  
**Tools:** Make.com · Google Gemini AI · JSON Parsing  
**Program:** TripleTen AI Automation Specialist

---

## 📋 Project Overview

An automated feedback analysis pipeline that receives customer feedback, sends it to Google Gemini for structured sentiment analysis, and outputs categorized JSON results — ready for dashboards or reporting.

> ⚠️ **Important:** This project uses **Google Gemini AI**, not OpenAI/ChatGPT.

---

## ⚙️ How It Works

1. Feedback is submitted or ingested into the pipeline
2. **Make.com** passes feedback content to **Google Gemini**
3. Gemini returns structured JSON with sentiment classification
4. Output is parsed and routed for storage or notification

---

## 🧠 AI Output Structure

```json
{
  "sentiment": "positive | neutral | negative",
  "confidence": 0.92,
  "key_themes": ["theme 1", "theme 2"],
  "summary": "One-sentence summary",
  "recommended_action": "Follow up / Escalate / Archive"
}
```

---

## 🛠️ Tech Stack

| Tool | Role |
|------|------|
| Make.com | Workflow orchestration |
| Google Gemini AI | Sentiment + theme analysis |
| JSON Parser | Structured output handling |

---

## 🗂️ Files

- `README.md` — This file