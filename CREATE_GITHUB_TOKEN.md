# How to Create a GitHub Personal Access Token

## Quick Steps:

1. **Go to GitHub Token Settings:**
   - Open: https://github.com/settings/tokens
   - Or: GitHub.com → Your Profile Picture → Settings → Developer settings → Personal access tokens → Tokens (classic)

2. **Generate New Token:**
   - Click **"Generate new token"** button
   - Select **"Generate new token (classic)"**

3. **Configure Token:**
   - **Note**: Type "Portfolio Project" (or any name)
   - **Expiration**: 
     - Choose "90 days" (recommended for security)
     - Or "No expiration" (less secure but convenient)
   - **Select scopes**: 
     - ✅ Check the box for **"repo"** (this gives full control of private repositories)
     - This automatically checks all sub-options under "repo"

4. **Generate Token:**
   - Scroll to bottom
   - Click **"Generate token"** (green button)

5. **Copy Token Immediately:**
   - ⚠️ **IMPORTANT:** Copy the token NOW - you won't be able to see it again!
   - It will look like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - Save it somewhere safe (password manager, notes app)

6. **Use Token:**
   - When Git asks for password, paste this token instead
   - Username: `chaincheung`
   - Password: `[paste your token here]`

## Security Note:
- Never share your token publicly
- If you commit it by accident, regenerate a new token immediately
- Treat it like a password

