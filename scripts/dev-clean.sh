#!/usr/bin/env bash
# Safe dev startup — stops duplicate servers and clears a corrupted .next cache.
# Usage: npm run dev:clean

set -e

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

echo "→ Stopping any existing Next.js dev servers for this project..."
pkill -f "$PROJECT_DIR/node_modules/.bin/next dev" 2>/dev/null || true
pkill -f "$PROJECT_DIR/.next/postcss" 2>/dev/null || true

# Free ports 3000 and 3001 if something is still stuck
for port in 3000 3001; do
  lsof -ti :"$port" 2>/dev/null | xargs kill -9 2>/dev/null || true
done

sleep 1

echo "→ Clearing .next cache..."
rm -rf .next

echo "→ Starting dev server on http://localhost:3000"
exec npm run dev
