# Pinecone Setup Guide for RAG Knowledge Agent

## Step 1 — Create Account
1. Go to [pinecone.io](https://pinecone.io) and sign up (free tier available)
2. Create a new project

## Step 2 — Create Index

In the Pinecone dashboard:
- **Index Name:** `knowledge-base`
- **Dimensions:** `1536`
  - This matches OpenAI's `text-embedding-3-small` output size
- **Metric:** `cosine`
  - Best for semantic similarity search
- **Cloud/Region:** `AWS us-east-1` (free tier)

## Step 3 — Get Credentials

From Pinecone dashboard:
- **API Key** → Settings → API Keys → Copy
- **Index Host URL** → Indexes → Your Index → Copy host URL

## Step 4 — Add to n8n

1. In n8n: Settings → Credentials → New → Pinecone
2. Paste your API key
3. Save and name it `Pinecone RAG Project`

## Dimension Reference

| OpenAI Model | Dimensions |
|---|---|
| text-embedding-3-small | 1536 |
| text-embedding-3-large | 3072 |
| text-embedding-ada-002 | 1536 |

**Recommendation:** Use `text-embedding-3-small` — best cost/performance ratio for portfolio projects.

## Supabase Alternative

If you want open-source/free:
1. Create Supabase project at [supabase.com](https://supabase.com)
2. Enable pgvector: Run `CREATE EXTENSION vector;` in SQL editor
3. Create vectors table:
```sql
CREATE TABLE documents (
  id TEXT PRIMARY KEY,
  content TEXT,
  source TEXT,
  embedding VECTOR(1536)
);

CREATE INDEX ON documents USING ivfflat (embedding vector_cosine_ops);
```
4. Use Supabase node in n8n to upsert/query
