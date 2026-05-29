# CyplexAI Company Website

Internal company hub for SOPs, training, FAQs, how-to guides, company knowledge, and a live LLM capability dashboard.

## Current Build

- `index.html` renders the portal.
- `styles.css` contains the visual system.
- `app.js` loads dashboard and content data.
- `data/llm_features.json` stores the LLM capability profiles.
- `data/content_index.json` stores starter company knowledge entries.
- `incoming_newsletters/` is reserved for source text that future automation can process.
- `.github/workflows/ai-sync.yml` is a starter GitHub Actions workflow.
- `scripts/updater.py` creates a review queue from newsletter text files.

## Run Locally

Because the page loads local JSON files, serve the folder with a small local server:

```bash
python3 -m http.server 8032
```

Then open:

```text
http://127.0.0.1:8032/index.html
```

## Recommended Governance

Keep the LLM dashboard semi-automated at first. Let AI draft updates into a review queue, then approve changes before publishing them into `data/llm_features.json`.
