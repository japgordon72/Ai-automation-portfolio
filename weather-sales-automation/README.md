# Weather-Triggered Sales Automation

**Problem:** Sales teams send generic outreach that ignores real-world context, missing hyper-relevant opportunities triggered by weather events (heat waves, storms, cold snaps).

**Solution:** An n8n workflow that runs every morning, pulls a leads list from Google Sheets, checks the current weather for each lead's city via OpenWeatherMap API, and automatically generates + sends a personalized GPT-4o email when weather conditions match predefined triggers.

**Impact:** Automated, context-aware outreach delivered at scale — increases message relevance and conversion rates.

**Tech Stack:** n8n · OpenAI GPT-4o · OpenWeatherMap API · Google Sheets · Gmail

---

## Workflow Architecture

```
Schedule Trigger (8am daily)
  → Google Sheets: pull leads list
  → HTTP Request: OpenWeatherMap API (per lead city)
  → IF Node: temp >= 95°F (or custom threshold)
      → YES → GPT-4o: generate personalized email (JSON)
               → Code Node: parse JSON
               → Gmail: send email + log to Sheets
      → NO  → Log skip to Sheets
```

## Files

| File | Description |
|---|---|
| `workflow-weather-trigger.json` | Importable n8n workflow |
| `Sprint 5 Japheth Gordon Weather-Based Sales and Staffing Decisions.pptx` | Sprint presentation deck |

## Setup

1. Import `workflow-weather-trigger.json` into n8n
2. Set credentials: OpenAI API key, Google OAuth, OpenWeatherMap API key
3. Replace `{{LEADS_SHEET_ID}}` with your Google Sheet ID
4. Replace `{{OPENWEATHER_API_KEY}}` with your API key
5. Adjust the IF condition temperature threshold to match your use case
6. Activate workflow

## Customization

- Change the weather trigger condition (rain, wind, snow, humidity) in the IF node
- Swap Gmail for Twilio SMS by replacing the send node
- Add multiple product categories in your Leads sheet for dynamic email targeting

## Prompt Used

See [`../prompt-engineering-framework/prompts/05-email-generation.md`](../prompt-engineering-framework/prompts/05-email-generation.md) for the email generation prompt template.
