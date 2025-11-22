# Quick Commands to Push Changes to GitHub

## Exact Commands to Run (Copy and Paste)

Open Terminal and run these commands one at a time:

### Step 1: Navigate to Project Folder
```bash
cd /Users/johncheung/Documents/portfolio_redesign
```

### Step 2: Check What Changed
```bash
git status
```

You should see:
- `src/portfolio/PortfolioContact.js` - Modified
- `src/portfolio/PortfolioNav.js` - Modified

### Step 3: Add Only the Code Changes (Not Documentation Files)
```bash
git add src/portfolio/PortfolioContact.js src/portfolio/PortfolioNav.js
```

Or add all changes including documentation:
```bash
git add .
```

### Step 4: Commit Changes
```bash
git commit -m "Fix Contact Me links to open email client"
```

### Step 5: Push to GitHub
```bash
git push origin main
```

**When prompted:**
- Username: `chaincheung`
- Password: [Use your Personal Access Token]

### Step 6: Wait for Netlify to Deploy
- Go to Netlify → Your site → Deploys tab
- Wait 2-5 minutes for auto-deployment
- Your changes will be live!

