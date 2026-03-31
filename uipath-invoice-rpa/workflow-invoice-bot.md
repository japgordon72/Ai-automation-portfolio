# UiPath Invoice RPA — Workflow Documentation

## Bot Overview

This UiPath RPA bot automates the end-to-end invoice processing pipeline: extracting data from PDF invoices in Google Drive, validating line items, entering data into a Google Sheet accounting log, and flagging anomalies for human review.

---

## Process Flow

```
1. TRIGGER: New PDF added to Google Drive folder (watched via UiPath trigger)
2. DOWNLOAD: Bot downloads PDF to local temp folder
3. EXTRACT: UiPath Document Understanding extracts structured data
   - Invoice number, vendor, date, line items, totals
4. VALIDATE:
   - Check subtotal + tax = total_due
   - Flag if total_due > $10,000 (approval threshold)
   - Flag if due_date < today + 3 days (urgent payment)
5. WRITE: Append extracted data to Google Sheets accounting log
6. ALERT: Send email if anomaly or approval flag triggered
7. ARCHIVE: Move processed PDF to /Processed subfolder
```

---

## UiPath Activities Used

| Activity | Purpose |
|---|---|
| `GSuite > Drive > Download File` | Pull invoice PDF from Drive |
| `Document Understanding > Digitize Document` | OCR the PDF |
| `Document Understanding > Extract Document Data` | Extract structured fields |
| `Data Validation > Validate Data` | Run business rules checks |
| `GSuite > Sheets > Append Row` | Write data to accounting log |
| `GSuite > Gmail > Send Email` | Alert for flagged invoices |
| `GSuite > Drive > Move File` | Archive processed file |

---

## Google Sheets Output Schema

| invoice_number | vendor_name | invoice_date | due_date | total_due | currency | status | flagged | processed_at |
|---|---|---|---|---|---|---|---|---|
| INV-2024-001 | Acme Corp | 2024-03-01 | 2024-03-31 | 1250.00 | USD | processed | false | 2024-03-02T08:15:00Z |

---

## Anomaly / Flag Rules

- `total_due > $10,000` → flag for manager approval
- `due_date within 3 days` → flag as urgent
- `subtotal + tax ≠ total_due` → flag as calculation error
- `vendor_name not in approved vendors list` → flag for verification

---

## Setup Requirements

1. UiPath Studio Community Edition (free)
2. UiPath Document Understanding package installed
3. GSuite activities package installed
4. Google Service Account credentials configured
5. Watch folder set up in Google Drive
