# AI Knowledge-Base Chatbot with Zapier

**Problem:** Customer service teams waste hours answering the same FAQ questions repeatedly, creating bottlenecks and slow response times.

**Solution:** A Zapier-powered chatbot that connects to a Google Sheets knowledge base, uses GPT-4o to generate contextual answers from that data, and automatically logs all conversations — built entirely without code.

**Impact:** Automated FAQ responses 24/7; frees support staff for complex issues only.

**Tech Stack:** Zapier Chatbots · OpenAI GPT-4o · Google Sheets · Zapier Tables

---

## Workflow Architecture

```
New Chat Message (Zapier Chatbot trigger)
  → Google Sheets: lookup matching FAQ row by keyword
  → OpenAI GPT-4o: generate answer using KB context
  → Zapier Chatbot: send reply to user
  → Google Sheets: log conversation to Chat Logs sheet
```

## Files

| File | Description |
|---|---|
| `workflow-faq-chatbot.json` | Zapier Zap configuration |
| `Sprint 2 final project.docx` | Sprint project documentation |

## Knowledge Base Schema

Your Google Sheet (`FAQ` tab) should have these columns:

| keyword | question | answer | details | category | last_updated |
|---|---|---|---|---|---|
| shipping | How long does shipping take? | 3–5 business days | Standard shipping via USPS | Logistics | 2026-01-01 |

## Setup

1. Create a Zapier account and enable Zapier Chatbots
2. Build the Zap following the `workflow-faq-chatbot.json` configuration
3. Create a Google Sheet with the FAQ schema above
4. Replace `{{KNOWLEDGE_BASE_SHEET_ID}}` and `{{LOGGING_SHEET_ID}}` with your Sheet IDs
5. Add your OpenAI API key to Zapier's OpenAI integration
6. Publish your chatbot and embed the widget on your site

## Customization

- Add a Slack notification step for unanswered questions
- Expand the KB with a `PDF Knowledge Base` tab for product manuals
- Add a sentiment check to auto-escalate frustrated users to a human
