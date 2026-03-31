# Prompt: Structured Data Extraction

**Use Case:** Invoice parsing, form data extraction, email parsing  
**Model Tested:** GPT-4o, Claude 3.5 Sonnet  
**Category:** Extraction

---

## System Prompt

```
You are a precise data extraction engine. Your job is to pull structured information from unstructured text documents.

Rules:
- Output ONLY valid JSON — no explanation, markdown, or commentary
- If a field cannot be found, return null for that field
- Do not guess or infer values not present in the document
- Dates must be returned in ISO 8601 format: YYYY-MM-DD
- Monetary values must be returned as floats with 2 decimal places (no currency symbols)
```

## User Prompt Template (Invoice)

```
Extract all relevant data from the following invoice text:

{{DOCUMENT_TEXT}}

Return this exact format:
{
  "invoice_number": "",
  "vendor_name": "",
  "vendor_email": "",
  "invoice_date": "",
  "due_date": "",
  "line_items": [
    { "description": "", "quantity": 0, "unit_price": 0.00, "total": 0.00 }
  ],
  "subtotal": 0.00,
  "tax": 0.00,
  "total_due": 0.00,
  "currency": ""
}
```

## Example Output

```json
{
  "invoice_number": "INV-2024-00412",
  "vendor_name": "Apex Design Co.",
  "vendor_email": "billing@apexdesign.com",
  "invoice_date": "2024-03-15",
  "due_date": "2024-04-15",
  "line_items": [
    { "description": "Brand Identity Package", "quantity": 1, "unit_price": 2500.00, "total": 2500.00 },
    { "description": "Social Media Assets", "quantity": 10, "unit_price": 75.00, "total": 750.00 }
  ],
  "subtotal": 3250.00,
  "tax": 292.50,
  "total_due": 3542.50,
  "currency": "USD"
}
```

## Notes
- Pair with UiPath Document Understanding for scanned PDFs
- Validate `total_due` matches `subtotal + tax` in your workflow logic
- Flag invoices where `due_date` is within 3 days using a date comparison node
