# 📰 Article Summary Organizer

**Type:** AI Content Automation  
**Tools:** Make.com · OpenAI (ChatGPT) · Google Forms · Gmail  
**Built by:** Japheth Gordon (independently)

---

## 📋 Project Overview

An automated pipeline that accepts article or book content via Google Form, sends it to OpenAI for structured summarization, and emails the formatted output — all without any manual steps.

---

## ⚙️ How It Works

1. User submits article text via **Google Form** (3 fields: Title, Content, Category)
2. **Make.com** triggers on new form submission
3. **OpenAI (ChatGPT)** processes the content and returns structured JSON
4. **Gmail** sends the formatted summary to the user automatically

---

## 🧠 AI Output Structure (JSON)

```json
{
  "title": "Article title",
  "category": "Category submitted",
  "key_takeaways": ["point 1", "point 2", "point 3"],
  "action_items": ["action 1", "action 2"],
  "related_context": "Brief background or connections",
  "has_actions": true
}
```

---

## 🛠️ Tech Stack

| Tool | Role |
|------|------|
| Google Forms | User input collection |
| Make.com | Workflow orchestration |
| OpenAI GPT | Structured summarization |
| Gmail | Automated email delivery |

---

## 📸 Screenshots

> Screenshots coming soon — workflow built independently, visual documentation in progress.

---

## 🗂️ Files

- `README.md` — This file