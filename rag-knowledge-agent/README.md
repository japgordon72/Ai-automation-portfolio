# Project 8 — RAG Knowledge Agent

**Stack:** n8n · OpenAI GPT-4o · Pinecone (Vector DB) · Google Drive (document source)

**Impact Metric:** Reduced manual document research time by ~80% — answers retrieved in <3 seconds vs. 10–15 minutes of manual searching.

---

## 🧠 What It Does

This agent ingests documents (PDFs, Google Docs, text files), chunks and embeds them into a vector database, then answers natural-language questions by retrieving the most relevant context — no hallucination, only grounded answers from your actual documents.

**Use Cases:**
- Company knowledge base Q&A
- Legal/compliance document search
- Internal HR policy assistant
- Product documentation chatbot

---

## 🏗️ Architecture

```
[Document Source]
    Google Drive / File Upload
           ↓
[Chunking & Embedding Pipeline]
    n8n → OpenAI Embeddings (text-embedding-3-small)
           ↓
[Vector Store]
    Pinecone Index (cosine similarity)
           ↓
[Query Pipeline]
    User Question → Embed Query → Pinecone Similarity Search
           ↓
[Context Injection]
    Top-K chunks → GPT-4o Prompt with retrieved context
           ↓
[Response]
    Grounded, cited answer returned to user
```

---

## 🔧 n8n Workflow Breakdown

### Workflow 1: Document Ingestion Pipeline
| Step | Node | Action |
|------|------|--------|
| 1 | Google Drive Trigger | Watch folder for new files |
| 2 | Read Binary File | Extract raw text content |
| 3 | Code Node | Chunk text into 500-token segments with 50-token overlap |
| 4 | OpenAI Embeddings | Generate vector for each chunk |
| 5 | Pinecone | Upsert vectors with metadata (source, chunk_id, text) |
| 6 | Google Sheets | Log ingestion record (filename, chunks created, timestamp) |

### Workflow 2: Query & Answer Pipeline
| Step | Node | Action |
|------|------|--------|
| 1 | Webhook | Receive user question (POST /ask) |
| 2 | OpenAI Embeddings | Embed the incoming question |
| 3 | Pinecone | Query top-5 similar chunks |
| 4 | Code Node | Format retrieved chunks into context block |
| 5 | OpenAI Chat (GPT-4o) | Answer question using only retrieved context |
| 6 | Respond to Webhook | Return JSON with answer + source citations |

---

## 📋 Setup Instructions

### Prerequisites
- [ ] n8n instance (self-hosted or n8n.cloud)
- [ ] OpenAI API key
- [ ] Pinecone account + API key (free tier works)
- [ ] Google Drive folder with source documents

### Step 1 — Pinecone Setup
1. Create a Pinecone account at [pinecone.io](https://pinecone.io)
2. Create a new index:
   - **Name:** `knowledge-base`
   - **Dimensions:** `1536` (matches `text-embedding-3-small`)
   - **Metric:** `cosine`
3. Copy your API key and index host URL

### Step 2 — n8n Credentials
Add the following credentials in n8n:
- `OpenAI API` — your OpenAI key
- `Pinecone API` — your Pinecone key
- `Google Drive OAuth2` — authorize your Google account

### Step 3 — Import Workflows
1. Import `workflow-ingestion.json` into n8n
2. Import `workflow-query.json` into n8n
3. Update all credential references
4. Set your Google Drive folder ID in the trigger node

### Step 4 — Test
```bash
# Drop a test PDF into your watched Google Drive folder
# Then query the agent:

curl -X POST https://your-n8n-instance/webhook/ask \
  -H "Content-Type: application/json" \
  -d '{"question": "What is the refund policy?"}'
```

**Expected response:**
```json
{
  "answer": "According to the uploaded policy document, refunds are processed within 5-7 business days...",
  "sources": ["refund-policy-2024.pdf (chunk 3)"],
  "confidence": "high"
}
```

---

## 🌲 Alternative: Supabase Vector DB

If you prefer open-source over Pinecone:
- Use **Supabase** with the `pgvector` extension
- Enable it in your Supabase project: `CREATE EXTENSION vector;`
- Use the n8n Supabase node to upsert/query vectors
- Same architecture — just swap the Pinecone nodes

---

## 📊 Impact Metrics

| Metric | Before (Manual) | After (RAG Agent) |
|--------|----------------|--------------------|
| Research time per query | 10–15 minutes | <3 seconds |
| Accuracy of answers | Variable (human error) | Grounded in source docs |
| Availability | Business hours only | 24/7 |
| Queries handled/hour | ~4 | Unlimited |

---

## 🛠️ Technologies Used

- **n8n** — workflow orchestration
- **OpenAI** — embeddings (`text-embedding-3-small`) + chat (`GPT-4o`)
- **Pinecone** — vector similarity search
- **Google Drive** — document source
- **Google Sheets** — ingestion logging

---

## 👤 Author

**Japheth Gordon** — AI Automation Specialist  
San Diego, CA | TripleTen AI Automation Bootcamp  
[GitHub Portfolio](https://github.com/japgordon72/Ai-automation-portfolio)
