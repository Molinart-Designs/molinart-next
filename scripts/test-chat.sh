#!/usr/bin/env bash
# Prueba local de POST /api/chat (español, señal de hiring)
# Uso: bash scripts/test-chat.sh

set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:3000}"

echo "POST ${BASE_URL}/api/chat"
echo ""

curl -sS -w "\n\nHTTP status: %{http_code}\n" \
  -X POST "${BASE_URL}/api/chat" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Buscamos un ingeniero senior para un proyecto Laravel y React de 6 meses. ¿Te interaría colaborar?",
    "locale": "es"
  }'

echo ""
