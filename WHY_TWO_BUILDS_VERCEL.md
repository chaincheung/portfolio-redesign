# Why Are There 2 Builds on Vercel?

## Common Reasons for Duplicate Builds:

### 1. Multiple Deployments Per Push (Most Common)

**Reason:** Vercel automatically builds for:
- **Production branch** (usually `main` or `master`)
- **Preview deployments** (for pull requests or other branches)

**Check:**
- Look at your Vercel dashboard → Deployments
- Are they both for the same commit/branch?
- Or is one for `main` and one for a different branch?

**Solution:**
- This is normal! Vercel builds production + previews
- You can disable preview deployments in Settings → Git → Preview Deployments

---

### 2. Project Connected Multiple Times

**Reason:** Project might be connected to:
- GitHub repository
- GitLab repository
- Bitbucket repository
- Manual deployments

**Check:**
- Go to Vercel Dashboard → Your Project → Settings → Git
- See if it's connected to multiple Git providers
- Or connected multiple times to the same repo

**Solution:**
- Keep only one connection
- Disconnect duplicate connections

---

### 3. Multiple Projects for Same Repository

**Reason:** You might have created the project twice:
- One project with automatic deployments
- Another project with manual deployments
- Or cloned the project

**Check:**
- Go to Vercel Dashboard
- Count how many projects you have for this repo
- Do you see 2 different projects for `portfolio-redesign`?

**Solution:**
- Delete the duplicate project
- Keep only one project

---

### 4. Build on Push + Build on Pull Request

**Reason:** Vercel settings might have both enabled:
- **"Build on push"** - builds when you push to main
- **"Build on pull request"** - builds when PR is created/updated

**Check:**
- Go to Settings → Git
- Check what triggers are enabled

**Solution:**
- Disable one if you don't need both
- Or this is normal behavior if you have PRs

---

### 5. Webhook Triggers

**Reason:** Webhooks might be set up twice:
- One from GitHub
- One manually configured

**Check:**
- Go to Settings → Git → Deploy Hooks
- See if there are duplicate webhooks

**Solution:**
- Remove duplicate webhooks
- Keep only one

---

## How to Check What's Happening:

### Step 1: Look at Your Deployments Tab

1. Go to Vercel Dashboard
2. Click on your project
3. Go to **"Deployments"** tab
4. **Look at the deployments:**
   - What are the branch names?
   - What are the commit messages?
   - Are they both for `main` branch?

### Step 2: Check Project Settings

1. Go to **Settings → Git**
2. **See:**
   - Which Git provider is connected?
   - Is it connected multiple times?
   - What branches are configured to deploy?

### Step 3: Check for Multiple Projects

1. Go to Vercel Dashboard (main page)
2. **Count your projects**
3. Do you see 2 projects with similar names?

---

## Quick Fix:

### If You See 2 Deployments for Same Commit:

**This is usually normal** - one is production, one might be a preview. You can:
- **Keep both** (this is normal Vercel behavior)
- **Disable preview deployments** in Settings → Git

### If You See 2 Different Projects:

1. **Identify which project you want to keep**
2. **Delete the duplicate project**
3. **Make sure only one project is connected to your repo**

### If Both Deployments Are Failing:

1. **Check both deployment logs**
2. **See if they have the same error**
3. **Focus on fixing one first**

---

## What Should You See:

**Normal setup:**
- 1 Project
- 1 Production deployment per push
- 1 Preview deployment per PR (if enabled)

**If you see:**
- 2 Projects → Delete one
- 2 Deployments for same push → Usually normal (production + preview)
- 2 Deployments from different commits → Normal (each commit creates new deployment)

---

**Can you check your Vercel dashboard and tell me:**
1. **Are there 2 different projects?** (go to main dashboard)
2. **Or 2 deployments in one project?** (go to project → Deployments)
3. **What are the branch names/commit messages?**

This will help me tell you exactly what's happening!

