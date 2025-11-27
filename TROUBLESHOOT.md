# Troubleshooting Localhost Connection

If localhost is refusing to connect, try these steps:

## 1. Check if server is running
Look at your terminal - you should see output like:
```
VITE v5.x.x  ready in xxx ms
➜  Local:   http://localhost:3000/
```

## 2. Kill any existing processes
```bash
lsof -ti:3000 | xargs kill -9
```

## 3. Reinstall dependencies
```bash
cd /Users/johncheung/Documents/portfolio_redesign
rm -rf node_modules package-lock.json
npm install
```

## 4. Start the server
```bash
npm run dev
```

## 5. Check for errors
If you see errors in the terminal, they will tell you what's wrong. Common issues:
- Missing dependencies: Run `npm install`
- Port already in use: Change port in vite.config.js
- Syntax errors: Check the error message

## 6. Try a different port
If port 3000 is blocked, edit vite.config.js and change port to 3001 or 5173

