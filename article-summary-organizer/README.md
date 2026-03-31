# Article Summary Organizer

**Problem:** Content teams spend 5–10 hrs/week manually reading, summarizing, and filing articles from RSS feeds and URLs.

**Solution:** An n8n automation that monitors RSS feeds on a schedule, fetches the full article body, sends it to GPT-4o for structured summarization, and appends the result to a categorized Google Sheets knowledge base — fully automated, zero manual effort.

**Impact:** 85% reduction in research time; always-on content intelligence pipeline.

**Tech Stack:** n8n · OpenAI GPT-4o · Google Sheets · RSS Feed Reader

---

## Workflow Architecture

```
Schedule Trigger (every 6hrs)
  → Fetch RSS Feed items
  → HTTP Request: pull full article body
  → GPT-4o: structured summarization (JSON output)
  → Code Node: parse JSON
  → Google Sheets: append row to knowledge base
```

## Files

| File | Description |
|---|---|
| `workflow-rss-summarizer.json` | Importable n8n workflow |
| `Japheth Gordon Article orgonizer final.pptx` | Sprint presentation deck |

## Setup

1. Import `workflow-rss-summarizer.json` into your n8n instance
2. Set credentials: OpenAI API key, Google Sheets OAuth
3. Replace `{{RSS_FEED_URL}}` with your target feed
4. Replace `{{GOOGLE_SHEET_ID}}` with your Sheet ID
5. Activate the workflow

## Prompt Used

See [`../prompt-engineering-framework/prompts/02-article-summarization.md`](../prompt-engineering-framework/prompts/02-article-summarization.md) for the full prompt template powering this workflow.
