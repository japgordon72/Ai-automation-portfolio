# 🧾 UiPath Invoice RPA

**Type:** Robotic Process Automation + AI Document Understanding  
**Tools:** UiPath · Document Understanding · Generative AI

---

## Overview

Automated invoice processing robot that extracts structured data from invoice documents using UiPath Document Understanding, then generates AI-powered purchase descriptions — eliminating manual data entry.

---

## Workflow

```
Invoice Document (PDF/Image)
        ↓
  UiPath Robot
        ↓
  Document Understanding (extract fields)
        ↓
  Generative AI (generate purchase description)
        ↓
  Structured Output / System Entry
```

---

## Extracted Fields

| Field | Method |
|-------|--------|
| Vendor name | Document Understanding ML model |
| Invoice number | Document Understanding ML model |
| Line items | Document Understanding ML model |
| Purchase description | AI-generated from extracted data |
| Total amount | Document Understanding ML model |

---

## Key Capability

The AI-generated purchase description converts raw line items into human-readable business context — a step that previously required manual review.

---

## Tech Stack

| Tool | Role |
|------|------|
| UiPath Studio | Robot design + orchestration |
| Document Understanding | ML-based invoice field extraction |
| Generative AI Activity | AI description generation |

**Built by Japheth Gordon — TripleTen AI Automation Specialist**