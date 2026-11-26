#!/usr/bin/env bash
set -euo pipefail
DOCS_DIR="${1:-docs}"
for legacy in \
  "Claude_Certified_Architect_Professional_QA.pdf" \
  "Claude_Certified_Developer_Professional_QA.pdf"; do
  if [[ -f "$DOCS_DIR/$legacy" ]]; then
    rm -- "$DOCS_DIR/$legacy"
    echo "Removed duplicate: $DOCS_DIR/$legacy"
  else
    echo "Already absent: $DOCS_DIR/$legacy"
  fi
done
