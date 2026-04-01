# ⛅ Weather-Triggered Sales Automation

**Type:** Event-Driven Sales Outreach  
**Tools:** Zapier · OpenWeatherMap · Gmail · OpenAI

---

## Overview

Monitors real-time weather conditions for a target location and automatically sends personalized sales outreach emails when weather triggers are met — no manual intervention required.

---

## Workflow

```
OpenWeatherMap API (scheduled check)
        ↓
    Zapier
        ↓
  Weather Condition Check
      ├─ [Trigger met]  → OpenAI (personalize email) → Gmail (send)
      └─ [No trigger]   → Stop
```

---

## Trigger Logic

| Condition | Action |
|-----------|--------|
| Rain / Storm | Send rain-gear promo email |
| Heat > 90°F | Send cooling product outreach |
| No trigger | Workflow ends silently |

---

## Why This Matters

Timing sales outreach to real-world conditions increases open rates and relevance. This workflow demonstrates event-driven automation — a core pattern in enterprise sales tools.

---

## Tech Stack

| Tool | Role |
|------|------|
| OpenWeatherMap | Real-time weather data |
| Zapier | Workflow orchestration |
| OpenAI | Personalized email copy |
| Gmail | Automated delivery |

**Built by Japheth Gordon — TripleTen AI Automation Specialist**