#!/bin/bash

cd /Users/johncheung/Documents/portfolio_redesign

echo "Starting portfolio redesign on localhost:3000..."
echo ""

# Kill any existing process on port 3000
lsof -ti:3000 | xargs kill -9 2>/dev/null

# Start the dev server
npm run dev

