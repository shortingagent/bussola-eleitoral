#!/bin/bash
if [ -z "$ANTHROPIC_API_KEY" ]; then
  echo ""
  echo "  ERROR: ANTHROPIC_API_KEY is not set."
  echo "  Run:  export ANTHROPIC_API_KEY=sk-ant-..."
  echo "  Then: bash start.sh"
  echo ""
  exit 1
fi
echo ""
echo "  Bússola Eleitoral Brasil 2026"
echo "  ─────────────────────────────"
echo "  Open in browser: http://localhost:8080"
echo ""
node server.js
