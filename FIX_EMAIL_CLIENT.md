# Fix: Mailto Links Not Working

## The Problem:
Your Mac doesn't have a default email client configured for mailto links.

## Solution: Install and Configure an Email Client

### Option 1: Use Mail App (Built-in, Recommended)

1. **Check if Mail app is installed:**
   - Open Finder
   - Go to Applications folder
   - Look for "Mail" app
   - If it's there → Skip to Step 4
   - If it's NOT there → Go to Step 2

2. **Install Mail app:**
   - Go to App Store
   - Search for "Mail"
   - Install the Mail app

3. **Open Mail app:**
   - Click on Mail app in Applications
   - It will ask you to set up an email account
   - **You can skip setup for now** - we just need the app installed

4. **Set Mail as default email client:**
   - Open Mail app
   - Go to Mail → Settings (or Mail → Preferences)
   - Go to "General" tab
   - Make sure Mail is selected as default email reader

5. **Set mailto handler:**
   - Open System Settings (gear icon)
   - Go to Desktop & Dock
   - Scroll down and look for "Default email reader" or similar
   - Select "Mail"

### Option 2: Use Gmail (Browser-based)

If you prefer Gmail:

1. **Install Gmail app:**
   - Go to App Store
   - Search for "Gmail"
   - Install Gmail app

2. **Set Gmail as default:**
   - Open System Settings
   - Go to Desktop & Dock
   - Set Gmail as default email reader

### Option 3: Use Outlook

If you have Outlook:

1. **Install Outlook** (if not already installed)
2. **Set as default email client** in System Settings

---

## After Installing Email Client:

### Test if it works:

1. **Open Terminal** and run:
   ```bash
   open "mailto:john.cheung75@gmail.com"
   ```

2. **Your email client should open** with a new email to john.cheung75@gmail.com

3. **Test the HTML file again:**
   - Open `/tmp/test-mailto.html`
   - Click the "Test Email" link
   - Email client should open now

4. **Test your React app:**
   - Refresh your portfolio site
   - Click "Contact Me" links
   - They should work now!

---

## Quick Setup for Mail App:

If Mail app is installed but not configured:

1. Open Mail app
2. It will ask to add an email account - you can:
   - **Add your email** (Gmail, Outlook, etc.)
   - OR **Skip for now** (mailto links will still work)

3. Go to Mail → Settings → General
4. Make sure Mail is set as default email reader

---

## Verify It's Working:

Run this command in Terminal:
```bash
open "mailto:test@example.com"
```

**If email client opens** → You're all set! ✅
**If nothing happens** → Email client not configured yet

---

## Need Help?

Once you install and configure an email client, mailto links will work everywhere:
- Your React portfolio
- Any website
- Any application

Let me know when you've installed an email client and we can test again!

