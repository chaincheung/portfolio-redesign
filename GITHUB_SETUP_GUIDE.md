# GitHub Repository Setup Guide

## Step-by-Step Instructions

Follow these steps to create a GitHub repository and connect it to your portfolio redesign project.

---

## Part 1: Create Repository on GitHub

### Step 1: Sign in to GitHub
1. Go to [github.com](https://github.com)
2. Sign in to your account (or create one if you don't have one)

### Step 2: Create New Repository
1. Click the **"+"** icon in the top-right corner
2. Select **"New repository"** from the dropdown

### Step 3: Configure Repository Settings
Fill in the repository details:

- **Repository name**: `portfolio-redesign` (or any name you prefer)
- **Description**: (Optional) "My portfolio website redesign built with React"
- **Visibility**:
  - ✅ **Public** - Anyone can see your code (recommended for portfolios)
  - ❌ **Private** - Only you can see it (if you want to keep it private)
- **Initialize repository**:
  - ❌ **DO NOT** check "Add a README file" (you already have one)
  - ❌ **DO NOT** check "Add .gitignore" (you already have one)
  - ❌ **DO NOT** check "Choose a license" (unless you want one)

### Step 4: Create Repository
1. Click the green **"Create repository"** button
2. GitHub will show you setup instructions - **don't follow those yet!**

---

## Part 2: Connect Your Local Project to GitHub

### Step 1: Initialize Git (if not already done)
Open Terminal and run:

```bash
cd /Users/johncheung/Documents/portfolio_redesign
git init
```

### Step 2: Check What Files Will Be Committed
```bash
git status
```

You should see files that need to be added. The `build/` and `node_modules/` folders should be ignored (they're in `.gitignore`).

### Step 3: Add All Files to Git
```bash
git add .
```

This stages all files for commit.

### Step 4: Make Your First Commit
```bash
git commit -m "Initial commit: Portfolio redesign with React"
```

This creates your first commit with all your project files.

### Step 5: Rename Default Branch (Optional but Recommended)
```bash
git branch -M main
```

This renames your branch to `main` (GitHub's default).

### Step 6: Connect to GitHub Repository

**Copy your repository URL from GitHub:**
- It will look like: `https://github.com/yourusername/portfolio-redesign.git`
- Or SSH: `git@github.com:yourusername/portfolio-redesign.git`

**Add GitHub as remote:**
```bash
git remote add origin https://github.com/yourusername/portfolio-redesign.git
```

Replace `yourusername` with your actual GitHub username and `portfolio-redesign` with your repository name.

### Step 7: Push Your Code to GitHub
```bash
git push -u origin main
```

You'll be prompted for your GitHub username and password/token:
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (see below for how to create one)

---

## Part 3: Create Personal Access Token (for password)

GitHub no longer accepts passwords for Git operations. You need a Personal Access Token.

### Step 1: Create Token
1. Go to GitHub.com
2. Click your profile picture → **Settings**
3. Scroll down to **Developer settings** (bottom left)
4. Click **Personal access tokens** → **Tokens (classic)**
5. Click **Generate new token** → **Generate new token (classic)**

### Step 2: Configure Token
- **Note**: "Portfolio project" (or any name)
- **Expiration**: Choose how long (90 days, or No expiration)
- **Select scopes**: Check **`repo`** (this gives full repository access)
- Click **Generate token** at the bottom

### Step 3: Copy Token
**⚠️ IMPORTANT: Copy the token immediately!** You won't be able to see it again.
- It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

**Use this token as your password** when pushing to GitHub.

---

## Part 4: Verify Everything Worked

### Step 1: Check Repository
1. Go back to your GitHub repository page
2. Refresh the page
3. You should see all your files!

### Step 2: Verify Remote Connection
```bash
git remote -v
```

You should see:
```
origin  https://github.com/yourusername/portfolio-redesign.git (fetch)
origin  https://github.com/yourusername/portfolio-redesign.git (push)
```

---

## Quick Command Summary

Here's all the commands in order:

```bash
# Navigate to project
cd /Users/johncheung/Documents/portfolio_redesign

# Initialize git (if needed)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio redesign with React"

# Rename branch to main
git branch -M main

# Add GitHub remote (replace with your URL)
git remote add origin https://github.com/yourusername/portfolio-redesign.git

# Push to GitHub
git push -u origin main
```

---

## Troubleshooting

### "Repository not found" error
- Check that you typed the repository URL correctly
- Make sure you're using the correct GitHub username
- Verify the repository was created on GitHub

### "Authentication failed" error
- Use a Personal Access Token instead of password
- Make sure the token has `repo` scope checked
- Token might have expired - generate a new one

### "Remote origin already exists"
If you already added a remote:
```bash
# Check current remote
git remote -v

# Remove existing remote
git remote remove origin

# Add correct remote
git remote add origin https://github.com/yourusername/portfolio-redesign.git
```

### "Branch main does not exist"
```bash
# Check current branch
git branch

# If you're on 'master', rename it
git branch -M main
```

---

## Next Steps After Repository is Created

1. ✅ **Push code to GitHub** (you just did this!)
2. 🔄 **Connect to Netlify/Vercel** for deployment
3. 🌐 **Set up custom domain** (optional)
4. 📝 **Update README.md** with project description
5. 🔔 **Enable GitHub Actions** (if you want CI/CD)

---

## What Files Are Being Committed?

Your `.gitignore` file tells Git to ignore:
- ❌ `node_modules/` - Dependencies (too large, can be reinstalled)
- ❌ `build/` - Build output (generated automatically)
- ❌ `.env.local` - Environment variables (may contain secrets)
- ❌ `.DS_Store` - macOS system files

✅ Everything else will be committed (your source code, images, config files, etc.)

---

## Need Help?

- GitHub Docs: https://docs.github.com/en/get-started
- Git Basics: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics

