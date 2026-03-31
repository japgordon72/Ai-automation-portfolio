# Automated Customer Feedback Analysis Pipeline

**Problem:** Manual review of customer feedback delayed issue detection and response times, letting critical complaints go unaddressed for hours or days.

**Solution:** A Make.com/n8n pipeline that triggers on new Google Form submissions, runs GPT-4o sentiment analysis, classifies urgency, routes negative feedback via instant email alert, and logs all results to a tagged Google Sheets dashboard.

**Impact:** 85% faster feedback analysis; instant negative feedback alerts eliminate response lag.

**Tech Stack:** n8n · OpenAI GPT-4o · Google Forms · Google Sheets · Gmail

---

## Workflow Architecture

```
Google Forms Submission (trigger)
  → GPT-4o: sentiment + tags + priority (JSON)
  → Code Node: parse & enrich
  → Switch Node: route by sentiment
      → negative  → Gmail alert to team
      → neutral   → Log to Sheets
      → positive  → Log to Sheets
```

## Files

| File | Description |
|---|---|
| `workflow-feedback-pipeline.json` | Importable n8n workflow |
| `Sprint 3 Japheth Gordon Automated Feedback Analysis Workflow.pptx` | Sprint presentation deck |

## Setup

1. Import `workflow-feedback-pipeline.json` into n8n
2. Set credentials: OpenAI API key, Google OAuth (Forms + Sheets + Gmail)
3. Replace `{{GOOGLE_FORM_ID}}` with your Form ID
4. Replace `{{GOOGLE_SHEET_ID}}` with your Sheet ID
5. Replace `{{ALERT_EMAIL}}` with your notification email
6. Activate workflow

## Prompt Used

See [`../prompt-engineering-framework/prompts/01-sentiment-classification.md`](../prompt-engineering-framework/prompts/01-sentiment-classification.md) for the full prompt template.
