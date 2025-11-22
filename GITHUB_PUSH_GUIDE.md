# How to Push Changes to GitHub

## Quick Guide: Push Your Code Changes to GitHub

This guide walks you through pushing your React portfolio changes to GitHub so Netlify can automatically redeploy.

---

## Step-by-Step: Push Changes to GitHub

### Step 1: Open Terminal

1. **On Mac**: Press `Cmd + Space` to open Spotlight
2. Type **"Terminal"** and press **Enter**
3. A Terminal window opens (black/white window with text)

### Step 2: Navigate to Your Project Folder

In Terminal, type this command and press **Enter**:

```bash
cd /Users/johncheung/Documents/portfolio_redesign
```

**What this does:** Changes directory to your project folder

**You should see:** The prompt shows you're in the portfolio_redesign folder

### Step 3: Check What Files Changed

Type this command and press **Enter**:

```bash
git status
```

**What you'll see:**
- Files listed in **red** = Modified files (files you changed)
- Files listed in **green** = New files (files you created)
- Files listed in **white/black** = Already committed files

**This shows you:** What changes you're about to push

### Step 4: Add All Changes to Git

Type this command and press **Enter**:

```bash
git add .
```

**What this does:** Stages all your changed files for commit

**You should see:** No output (or minimal output) - this is normal

**Alternative:** If you want to add specific files only:
```bash
git add src/portfolio/PortfolioNav.js
git add src/portfolio/PortfolioContact.js
```

### Step 5: Create a Commit

Type this command and press **Enter**:

```bash
git commit -m "Fix Contact Me links"
```

**What this does:** Creates a commit (saves a snapshot) of your changes

**The message** (`"Fix Contact Me links"`) describes what you changed - you can write anything:
- `"Fix Contact Me links"`
- `"Update contact functionality"`
- `"Fix mailto links"`
- `"Update portfolio"`
- etc.

**You should see:** Something like:
```
[main abc1234] Fix Contact Me links
 2 files changed, X insertions(+), X deletions(-)
```

### Step 6: Push to GitHub

Type this command and press **Enter**:

```bash
git push origin main
```

**What this does:** Uploads your changes to GitHub

**If prompted for credentials:**
- **Username**: Your GitHub username (e.g., `chaincheung`)
- **Password**: Use your **Personal Access Token** (not your GitHub password)
  - If you don't have one, create it at: https://github.com/settings/tokens
  - Make sure it has `repo` scope checked

**You should see:** 
```
Enumerating objects: X, done.
Counting objects: 100% (X/X), done.
Writing objects: 100% (X/X), done.
To https://github.com/chaincheung/portfolio-redesign.git
   abc1234..def5678  main -> main
```

### Step 7: Verify Changes Are on GitHub

1. **Go to GitHub** in your browser: https://github.com/chaincheung/portfolio-redesign
2. **Refresh the page**
3. **Check the files** you changed:
   - Go to `src/portfolio/PortfolioNav.js`
   - Go to `src/portfolio/PortfolioContact.js`
   - You should see your changes!

### Step 8: Netlify Will Auto-Deploy (if connected)

If you connected Netlify to GitHub:

1. **Netlify automatically detects** your push
2. **Starts a new build** automatically
3. **Deploys your changes** when build completes
4. **Takes 2-5 minutes** usually

**Check Netlify:**
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click on your site
3. Go to **"Deploys"** tab (left sidebar)
4. You'll see a new deployment in progress or completed!

---

## Quick Command Summary

Here are all the commands in order (copy and paste one at a time):

```bash
# Navigate to project folder
cd /Users/johncheung/Documents/portfolio_redesign

# Check what changed
git status

# Add all changes
git add .

# Commit changes (describe what you changed)
git commit -m "Fix Contact Me links"

# Push to GitHub
git push origin main
```

---

## Common Issues & Solutions

### Issue: "Not a git repository"

**Solution:**
- You're not in the right folder
- Make sure you're in `/Users/johncheung/Documents/portfolio_redesign`
- Type `pwd` to see where you are
- If you're not in the right folder, navigate there first

### Issue: "Authentication failed"

**Solution:**
- Use Personal Access Token instead of password
- Create one at: https://github.com/settings/tokens
- Make sure it has `repo` scope checked
- Use token as password when pushing

### Issue: "Nothing to commit, working tree clean"

**Solution:**
- This means there are no changes to commit
- Either:
  - Changes are already committed
  - You haven't made any changes
  - You're in the wrong folder

### Issue: "Branch 'main' does not exist"

**Solution:**
- Check what branch you're on: `git branch`
- You might be on `master` instead of `main`
- If so, use: `git push origin master`
- Or rename branch: `git branch -M main`

### Issue: "Permission denied"

**Solution:**
- Check your GitHub username is correct
- Use Personal Access Token (not password)
- Make sure you have access to the repository
- Try generating a new token

---

## Step-by-Step Checklist

- [ ] Opened Terminal
- [ ] Navigated to project folder: `cd /Users/johncheung/Documents/portfolio_redesign`
- [ ] Checked status: `git status`
- [ ] Added changes: `git add .`
- [ ] Created commit: `git commit -m "Description of changes"`
- [ ] Pushed to GitHub: `git push origin main`
- [ ] Verified changes on GitHub
- [ ] Checked Netlify for auto-deployment

---

## Visual Guide

### What You'll See in Terminal:

**After `git status`:**
```
On branch main
Changes not staged for commit:
  modified:   src/portfolio/PortfolioNav.js
  modified:   src/portfolio/PortfolioContact.js

no changes added to commit (use "git add" to stage)
```

**After `git add .`:**
```
(no output, or minimal output)
```

**After `git commit -m "Fix Contact Me links"`:**
```
[main abc1234] Fix Contact Me links
 2 files changed, 10 insertions(+), 5 deletions(-)
```

**After `git push origin main`:**
```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 312 bytes | 312.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
To https://github.com/chaincheung/portfolio-redesign.git
   abc1234..def5678  main -> main
```

---

## Need Help?

If you get stuck:
1. **Copy the error message** from Terminal
2. **Take a screenshot** if helpful
3. **Tell me what step** you're on
4. **I'll help you fix it!**

---

## Next Steps After Pushing

Once changes are pushed to GitHub:

1. **Wait for Netlify to deploy** (2-5 minutes)
2. **Check Netlify dashboard** → Deploys tab
3. **Test your site** once deployment completes
4. **Test Contact Me links** - they should work now!

---

## Quick Reference

**Navigate to project:**
```bash
cd /Users/johncheung/Documents/portfolio_redesign
```

**Check changes:**
```bash
git status
```

**Add changes:**
```bash
git add .
```

**Commit changes:**
```bash
git commit -m "Your message here"
```

**Push to GitHub:**
```bash
git push origin main
```

That's it! 🎉

