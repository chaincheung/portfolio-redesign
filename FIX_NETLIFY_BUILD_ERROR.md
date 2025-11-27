# Fix Netlify Build Error

## The Problem:
Netlify deployments are failing with: "Build script returned non-zero exit code: 2"

## The Solution:

### Step 1: Check Netlify Build Settings

1. **Go to Netlify Dashboard**
2. **Click on your site**
3. **Go to Settings → Build & deploy**
4. **Check "Build settings":**
   - **Build command:** Should be `npm run build`
   - **Publish directory:** Should be `build`
   - **Base directory:** (leave blank unless your files are in a subfolder)

### Step 2: Check Node Version

1. **In Settings → Build & deploy**
2. **Scroll to "Environment variables"**
3. **Check if `NODE_VERSION` is set**
4. **If not, add it:**
   - Click "Add variable"
   - Key: `NODE_VERSION`
   - Value: `18` (or `20`)
   - Click "Save"

### Step 3: Clear Cache and Redeploy

1. **Go to Deploys tab**
2. **Click "Trigger deploy"** → **"Clear cache and deploy site"**
3. **Wait for deployment**

### Step 4: Check Build Logs

1. **Click on the failed deployment**
2. **Click "View build log"** or expand the build section
3. **Look for the specific error message**
4. **Share the error** so we can fix it

---

## Common Fixes:

### Fix 1: Set Node Version
Add environment variable:
- Key: `NODE_VERSION`
- Value: `18`

### Fix 2: Check Build Command
Make sure it's exactly: `npm run build`

### Fix 3: Check Publish Directory
Make sure it's exactly: `build`

---

**Try Step 1-3 first, then check the build logs (Step 4) to see the exact error!**

