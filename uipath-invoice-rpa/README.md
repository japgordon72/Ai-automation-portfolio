# Automated Invoice Reporting with UiPath RPA

**Problem:** Manual invoice processing is slow, error-prone, and creates costly delays in accounts payable workflows — especially at volume.

**Solution:** A UiPath RPA bot that monitors a Google Drive folder for new PDF invoices, uses Document Understanding to extract structured data, validates the numbers, writes results to a Google Sheets accounting log, and sends email alerts for anomalies — all without human intervention.

**Impact:** ~90% reduction in invoice processing time; zero manual data entry errors.

**Tech Stack:** UiPath Studio · UiPath Document Understanding · Google Drive · Google Sheets · Gmail

---

## Workflow Architecture

```
Google Drive: New PDF detected
  → UiPath: download to temp folder
  → Document Understanding: OCR + extract structured fields
  → Validation Rules: check totals, due dates, approval thresholds
      → flagged  → Gmail alert to manager
      → clean    → Append to Google Sheets log
  → Archive PDF to /Processed folder
```

## Files

| File | Description |
|---|---|
| `workflow-invoice-bot.md` | Full process flow + activities documentation |
| `Japheth Gordon Automation of Invoice Reporting with UiPath.pptx` | Sprint presentation deck |

## Key Features

- Handles multi-page PDF invoices via OCR + Document Understanding
- Auto-flags invoices over $10K for manager approval
- Detects calculation errors (subtotal + tax ≠ total)
- Urgent payment alerts when due date is within 3 days
- Full audit trail in Google Sheets

## Setup

See [`workflow-invoice-bot.md`](./workflow-invoice-bot.md) for the complete process documentation, UiPath activity list, and Google Sheets schema.

## Prompt Used for Data Extraction

See [`../prompt-engineering-framework/prompts/03-data-extraction.md`](../prompt-engineering-framework/prompts/03-data-extraction.md) for the GPT-4o extraction prompt template used alongside Document Understanding.
