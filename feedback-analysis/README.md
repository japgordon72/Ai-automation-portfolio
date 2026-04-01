# 📊 Feedback Analysis Pipeline

**Automated sentiment analysis → structured JSON output**

## Workflow
```
Google Forms → Make.com → Google Gemini → JSON Output
```

![Workflow](Screenshot-2026-04-01-073418.jpg)

## Output Structure
```json
{
  "sentiment": "positive|neutral|negative",
  "confidence": 0.92,
  "themes": ["theme1", "theme2"],
  "summary": "One sentence summary"
}
```

**Tech:** Make.com · Google Gemini · JSON Parsing