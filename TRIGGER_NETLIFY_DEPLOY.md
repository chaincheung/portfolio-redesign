# How to Trigger Netlify Deployment

## If You Don't See "Trigger Deploy" Button:

### Method 1: Check Deploys Tab
1. Go to Netlify Dashboard
2. Click on your site
3. Go to **"Deploys"** tab (left sidebar)
4. Look at the top right of the Deploys page
5. You might see:
   - **"Trigger deploy"** button (top right)
   - Or **"Deploy site"** button
   - Or **"..."** (three dots menu) → "Deploy site"

### Method 2: Settings → Build & Deploy
1. Go to **Settings** (gear icon)
2. Click **"Build & deploy"** (left sidebar)
3. Scroll down to **"Build hooks"** section
4. Or look for **"Deploy settings"**
5. There might be a **"Trigger deploy"** or **"Clear cache and deploy site"** button

### Method 3: Clear Cache and Deploy
1. Go to **Settings → Build & deploy**
2. Scroll to **"Build settings"**
3. Look for **"Clear cache and deploy site"** button
4. Click it - this will trigger a new deployment

### Method 4: Make a Small Change and Push
If you can't find the button, trigger deployment by pushing a small change:

1. **Make a tiny change** (add a space or comment)
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Trigger Netlify deployment"
   git push origin main
   ```
3. **Netlify should auto-deploy** when it detects the push

### Method 5: Check if Netlify is Connected
1. Go to **Settings → Build & deploy → Continuous Deployment**
2. Make sure it shows:
   - **Connected to:** GitHub
   - **Repository:** chaincheung/portfolio-redesign
   - **Branch:** main
3. If not connected, click **"Link repository"** and connect it

---

## Alternative: Check What You See

**In the Deploys tab, what do you see?**
- A list of deployments?
- A button at the top?
- Three dots menu (...)?
- Nothing?

**Tell me what you see and I can guide you to the right place!**

---

## Quick Test: Push a Small Change

If you can't find the trigger button, just push a small change:

```bash
cd /Users/johncheung/Documents/portfolio_redesign
# Make a tiny change to trigger deployment
echo "// Trigger deployment" >> src/portfolio/portfolio.css
git add src/portfolio/portfolio.css
git commit -m "Trigger Netlify deployment"
git push origin main
```

This will trigger Netlify to auto-deploy when it detects the GitHub push.

