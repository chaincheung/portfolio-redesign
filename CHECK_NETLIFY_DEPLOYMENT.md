# Check Netlify Deployment

## Verify Changes Are on GitHub:

1. **Go to GitHub:** https://github.com/chaincheung/portfolio-redesign
2. **Check the latest commits:**
   - Should see: "Brighten hero image and update hero text colors to #323232"
   - Should see: "Simplify Contact Me links and fix vercel.json"
3. **Check the files:**
   - Go to `src/portfolio/portfolio.css`
   - Look for `.hero-background` - should have `filter: brightness(1.2);`
   - Look for `.hero-greeting` and `.hero-description` - should have `color: #323232;`

## Check Netlify Deployment:

### Step 1: Go to Netlify Dashboard
1. Go to: https://app.netlify.com
2. Click on your site
3. Go to **"Deploys"** tab

### Step 2: Check Latest Deployment
1. **Look at the top deployment:**
   - What commit message does it show?
   - Does it match your latest commits?
   - What's the status? (Building, Published, Failed)

### Step 3: If Deployment is Old
1. **Check if Netlify is connected to GitHub:**
   - Go to **Settings → Build & deploy → Continuous Deployment**
   - Is it connected to `chaincheung/portfolio-redesign`?
   - Is the branch set to `main`?

### Step 4: Trigger New Deployment
If Netlify didn't auto-deploy:

**Option A: Trigger from Netlify**
1. Go to **Deploys** tab
2. Click **"Trigger deploy"** → **"Deploy site"**
3. This will rebuild with latest code from GitHub

**Option B: Check GitHub Connection**
1. Go to **Settings → Build & deploy → Continuous Deployment**
2. Make sure it's connected to the right repo
3. Click **"Clear cache and deploy site"**

### Step 5: Check Build Logs
1. Click on the latest deployment
2. Check **build logs**
3. Look for any errors
4. Make sure build completed successfully

---

## Common Issues:

### Issue: Netlify Not Auto-Deploying
**Solution:**
- Check GitHub webhook connection
- Go to Settings → Build & deploy → Continuous Deployment
- Make sure "Build hooks" or "Deploy notifications" are set up

### Issue: Deployment Shows Old Commit
**Solution:**
- Manually trigger deploy: Deploys → Trigger deploy
- Or check if Netlify is watching the right branch

### Issue: Build Failed
**Solution:**
- Check build logs for errors
- Make sure build command is: `npm run build`
- Make sure publish directory is: `build`

---

## Quick Fix: Force Redeploy

1. **Go to Netlify Dashboard**
2. **Deploys** tab
3. **Click "Trigger deploy"** → **"Deploy site"**
4. **Wait for deployment to complete**
5. **Check your site** - changes should be there!

---

**Check your Netlify Deploys tab and tell me:**
1. What commit is the latest deployment showing?
2. Is it building or already published?
3. Any errors in the build logs?

