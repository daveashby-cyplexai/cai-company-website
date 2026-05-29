#!/usr/bin/env python3
"""
Draft updater for the CyplexAI LLM capability dashboard.

This starter is intentionally conservative. It collects newsletter text files,
creates a review queue entry, and leaves the live dashboard unchanged until a
human approves structured updates.
"""

from __future__ import annotations

import json
from datetime import date
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
INCOMING = ROOT / "incoming_newsletters"
REVIEW_QUEUE = ROOT / "data" / "review_queue.json"


def read_existing_queue() -> list[dict]:
  if not REVIEW_QUEUE.exists():
    return []
  return json.loads(REVIEW_QUEUE.read_text(encoding="utf-8"))


def collect_newsletters() -> list[dict]:
  drafts = []
  for path in sorted(INCOMING.glob("*.txt")):
    text = path.read_text(encoding="utf-8").strip()
    if not text:
      continue

    drafts.append({
      "date_collected": date.today().isoformat(),
      "source_file": path.name,
      "review_status": "Needs Review",
      "notes": "Replace this placeholder with AI-extracted model updates after API integration.",
      "raw_excerpt": text[:1200]
    })
  return drafts


def main() -> None:
  INCOMING.mkdir(exist_ok=True)
  REVIEW_QUEUE.parent.mkdir(exist_ok=True)

  queue = read_existing_queue()
  queue.extend(collect_newsletters())
  REVIEW_QUEUE.write_text(json.dumps(queue, indent=2) + "\n", encoding="utf-8")

  print(f"Review queue now contains {len(queue)} item(s).")


if __name__ == "__main__":
  main()
