# 🧠 RAG Knowledge Agent

**Type:** Retrieval-Augmented Generation Agent  
**Tools:** n8n · LLM · Vector Store  
**Status:** 🛠️ In Progress — Building this week

---

## Planned Overview

An AI agent that answers domain-specific questions by retrieving relevant context from a custom knowledge base before generating responses — reducing hallucinations and improving answer accuracy.

---

## Planned Architecture

```
User Query
     ↓
  n8n Agent
     ↓
  Vector Store (semantic search)
     ↓
  Relevant Context Retrieved
     ↓
  LLM (context + query → answer)
     ↓
  Accurate Response
```

---

## Why RAG vs Standard LLM

| Standard LLM | RAG Agent |
|---|---|
| Hallucates on domain facts | Grounds answers in real documents |
| No custom knowledge | Uses your specific data |
| Static training cutoff | Always up-to-date with your docs |

---

## Tech Stack (Planned)

| Tool | Role |
|------|------|
| n8n | Agent orchestration |
| Vector Store | Semantic document retrieval |
| LLM | Response generation |

**Built by Japheth Gordon — TripleTen AI Automation Specialist**