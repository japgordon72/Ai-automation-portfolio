# LLM Comparison Matrix

Benchmark results from Sprint 1 — testing 6 LLMs across core automation tasks.

---

## Scoring Criteria

| Dimension | Description |
|---|---|
| **JSON Accuracy** | Does it return valid, parseable JSON on first try? |
| **Instruction Following** | Does it follow system prompt rules without deviation? |
| **Consistency** | Same input → same output across 5 runs? |
| **Speed** | Time-to-first-token for automation latency sensitivity |
| **Cost / 1K tokens** | Input + output pricing (as of Q1 2026) |

---

## Results by Task

### Task 1: Sentiment Classification

| Model | JSON Accuracy | Instruction Following | Consistency | Best For |
|---|---|---|---|---|
| GPT-4o | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Production workflows |
| Claude 3.5 Sonnet | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | High-nuance feedback |
| Gemini 1.5 Pro | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Google ecosystem workflows |
| DeepSeek V2 | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | Cost-sensitive volume jobs |
| GPT-3.5-Turbo | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | Simple classification only |
| Llama 3 (70B) | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | Self-hosted / private data |

### Task 2: Structured Data Extraction

| Model | JSON Accuracy | Instruction Following | Consistency | Best For |
|---|---|---|---|---|
| GPT-4o | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Invoice & document parsing |
| Claude 3.5 Sonnet | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Long-form doc extraction |
| Gemini 1.5 Pro | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Multimodal docs (images+text) |
| DeepSeek V2 | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | Budget extraction tasks |

---

## Key Findings

1. **GPT-4o** is the most reliable for production automation — best JSON adherence and consistency
2. **Claude 3.5 Sonnet** outperforms on long documents and nuanced reasoning tasks
3. **Gemini 1.5 Pro** is the best choice for workflows already inside Google Workspace
4. **DeepSeek V2** offers ~80% of GPT-4o quality at ~20% of the cost — ideal for high-volume, low-stakes jobs
5. All models degraded in JSON accuracy when system prompts exceeded ~800 tokens — keep system prompts tight

---

## Decision Framework

```
IF task requires JSON output AND high accuracy → GPT-4o or Claude 3.5 Sonnet
IF task is high-volume AND cost-sensitive → DeepSeek V2
IF workflow lives in Google ecosystem → Gemini 1.5 Pro
IF data is private/sensitive → Llama 3 (self-hosted)
IF task is simple classification → GPT-3.5-Turbo (cheapest)
```
