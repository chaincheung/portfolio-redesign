# Troubleshooting Mailto Links Not Working

## If mailto links don't work in Chrome OR Firefox:

This means it's likely a **system configuration issue**, not a code issue.

## Quick Test:

1. **Open this test file in your browser:**
   - File path: `/tmp/test-mailto.html`
   - Or open it with: `open /tmp/test-mailto.html` in Terminal
   - Try clicking the link in that file
   - **If THAT doesn't work** → System configuration issue
   - **If THAT works** → Something in our React app is blocking it

## Fix System Configuration (Mac):

### Step 1: Check if you have an email client installed

1. **Do you have Mail app?**
   - Open Applications folder
   - Look for "Mail" app
   - If not installed: Install it from App Store

2. **Do you have Gmail/Outlook/other email app?**
   - Check if any email app is installed

### Step 2: Set default email client

1. **Open System Settings** (gear icon in Dock)
2. Go to **Desktop & Dock**
3. Scroll down to **Default web browser** section
4. Check if there's an email client option

**OR**

1. Open **Mail app** (if installed)
2. Mail → Settings → General
3. Make sure Mail is set as default email reader

### Step 3: Test mailto link manually

Open Terminal and run:
```bash
open "mailto:john.cheung75@gmail.com"
```

**If this works** → Email client opens (system is configured correctly)
**If this doesn't work** → You need to set up an email client first

### Step 4: Browser Settings

**Chrome:**
1. Chrome → Settings → Privacy and security → Site settings
2. Look for "Additional permissions"
3. Make sure "Protocol handlers" are allowed

**Firefox:**
1. Firefox → Preferences → General
2. Scroll down to "Applications"
3. Search for "mailto"
4. Set it to "Use Mail" or your email client

## If the test file works but React app doesn't:

Then something in our code is blocking it. Let me know and I'll fix it!

## Quick System Test Command:

Run this in Terminal:
```bash
open "mailto:john.cheung75@gmail.com"
```

**What should happen:**
- Email client (Mail, Outlook, etc.) opens
- New email window opens with `john.cheung75@gmail.com` in To field

**If nothing happens:**
- No email client is set up
- You need to install and configure an email client first

