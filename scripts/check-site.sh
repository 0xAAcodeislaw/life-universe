#!/usr/bin/env bash
set -euo pipefail

test -s site/index.html
test -s site/main.js
test -s site/graph.png
test -s site/anim.png
test -s site/loc.png

echo "Life Universe static assets are present."
