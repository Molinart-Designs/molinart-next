#!/usr/bin/env bash
# Prueba local de POST /api/contact
# Uso: bash scripts/test-contact.sh

set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:3000}"

echo "POST ${BASE_URL}/api/contact"
echo ""

curl -sS -w "\n\nHTTP status: %{http_code}\n" \
  -X POST "${BASE_URL}/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Demo",
    "email": "jane.demo@example.com",
    "phone": "+52 55 1234 5678",
    "message": "Hola Emilio, me interesa conversar sobre un proyecto Laravel + React."
  }'

echo ""
