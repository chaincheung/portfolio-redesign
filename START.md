# Start Portfolio Redesign on Localhost:3000

## Quick Start

1. **Open Terminal**

2. **Navigate to project:**
   ```bash
   cd /Users/johncheung/Documents/portfolio_redesign
   ```

3. **Install dependencies (if not already done):**
   ```bash
   npm install
   ```

4. **Kill any process on port 3000:**
   ```bash
   lsof -ti:3000 | xargs kill -9 2>/dev/null
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   - The server should automatically open `http://localhost:3000`
   - If not, manually go to: `http://localhost:3000`

## What You Should See

- Terminal shows: `VITE v5.x.x ready in xxx ms`
- Browser opens to: `http://localhost:3000`
- You should see your portfolio with the gradient background

## Troubleshooting

If port 3000 is busy, the server will show an error. You can:
- Kill the process using port 3000 (command above)
- Or change the port in `vite.config.js` to 3001 or 5173

