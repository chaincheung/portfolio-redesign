# Start Portfolio Redesign on Localhost

## Quick Start Commands

Open Terminal and run these commands:

```bash
# 1. Navigate to project directory
cd /Users/johncheung/Documents/portfolio_redesign

# 2. Install dependencies (if not already installed)
npm install

# 3. Kill any process using port 3000 (if needed)
lsof -ti:3000 | xargs kill -9 2>/dev/null

# 4. Start the development server
npm run dev
```

## What Should Happen

1. Terminal will show:
   ```
   VITE v5.x.x  ready in xxx ms
   
   ➜  Local:   http://localhost:3000/
   ➜  Network: use --host to expose
   ```

2. Browser should automatically open to `http://localhost:3000`

3. You should see your portfolio with:
   - Navigation bar
   - Hero section
   - Best Design section
   - Process section
   - Experiences section
   - Contact section

## Troubleshooting

**If port 3000 is busy:**
- The server will show an error
- Kill the process: `lsof -ti:3000 | xargs kill -9`
- Or change port in `vite.config.js` to 3001

**If you see errors:**
- Check browser console (F12)
- Check terminal for error messages
- Make sure all dependencies are installed: `npm install`

**If page is blank:**
- Check browser console for React errors
- Verify the server is running (check terminal)
- Try hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

## Configuration

- **Host:** localhost
- **Port:** 3000
- **Entry:** `/src/index.jsx`
- **Main App:** `/src/App.js`




