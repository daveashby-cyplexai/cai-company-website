# CyplexAI Company Hub

Internal company hub for SOPs, training, FAQs, how-to guides, company knowledge, and a live LLM capability dashboard.

## Current Build

- `index.html` renders the portal.
- `styles.css` contains the branded visual system and accessibility contrast fixes.
- `app.js` loads dashboard and content data.
- `data/bootstrap-data.js` provides a browser-safe fallback data bundle for GitHub Pages and file-based previews.
- `data/llm_features.json` stores the LLM capability profiles.
- `data/content_index.json` stores starter company knowledge entries.
- `data/team_directory.json` stores the org chart, roles, and ownership map.
- `data/review_queue.json` stores drafted update items awaiting review.
- `incoming_newsletters/` is reserved for source text that future automation can process.
- `.github/workflows/ai-sync.yml` is a starter GitHub Actions workflow.
- `scripts/updater.py` creates a review queue from newsletter text files.

## Current Brand Direction

- Headings and the text wordmark use Newsreader.
- Body copy uses IBM Plex Sans.
- Labels and system text use IBM Plex Mono.
- The top-left wordmark is rendered as text: `Cyplex` in white and `AI` in accessible Harbor Teal.
- Dark hero, sidebar, dashboard, FAQ, team, and governance sections use ADA-checked light text on slate/ocean backgrounds.
- LearnWorlds currently uses a placeholder user-count card and dashboard link until the live source is connected.

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

## GitHub Pages Upload Checklist

Upload the full folder structure, not only `index.html`:

- `index.html`
- `styles.css`
- `app.js`
- `data/`
- `scripts/`
- `incoming_newsletters/`
- `.github/`
- `README.md`

The `assets/` folder can remain in the project for reference, but the current header wordmark no longer depends on the logo image.
