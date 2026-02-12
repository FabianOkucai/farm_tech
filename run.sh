#!/bin/bash
cd "$(dirname "$0")/src/frontend"
echo "🚀 Starting Farmtech Academy..."
echo "📍 Server running at: http://localhost:8080"
echo "Press Ctrl+C to stop"
python3 -m http.server 8080
