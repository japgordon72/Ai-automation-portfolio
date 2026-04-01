# 🧾 UiPath Invoice RPA

**Type:** Robotic Process Automation (RPA)  
**Tools:** UiPath · Document Understanding · GenAI Activity  
**Program:** TripleTen AI Automation Specialist

---

## 📋 Project Overview

An RPA bot built in UiPath that automates invoice processing end-to-end — extracting data using Document Understanding, generating AI-written purchase descriptions via GenAI activity, and filtering invoices by due date for priority processing.

---

## ⚙️ How It Works

1. **UiPath bot** opens and reads incoming invoice files
2. **Document Understanding** extracts structured fields (vendor, amount, date, line items)
3. **GenAI Activity** generates a plain-English purchase description for each line item
4. Bot **filters by due date** — flags invoices due within 7 days
5. Results written to output file / system

---

## 🛠️ Tech Stack

| Tool | Role |
|------|------|
| UiPath Studio | RPA bot development |
| Document Understanding | AI-powered data extraction |
| GenAI Activity | Purchase description generation |
| Excel / Output File | Results storage |

---

## 🔑 Key Features

- ✅ Fully automated — zero manual data entry
- ✅ AI-generated purchase descriptions for every line item
- ✅ Due-date filtering for priority queue management
- ✅ Handles multiple invoice formats

---

## 🗂️ Files

- `README.md` — This file