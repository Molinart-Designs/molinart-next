#!/usr/bin/env bash
# Prueba local de POST /api/chat (inglés)
# Uso: bash scripts/test-chat-en.sh

set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:3000}"

echo "POST ${BASE_URL}/api/chat"
echo ""

curl -sS -w "\n\nHTTP status: %{http_code}\n" \
  -X POST "${BASE_URL}/api/chat" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Why would Emilio be a strong Software Engineer candidate?",
    "locale": "en"
  }'

echo ""
