# How to Set Apple Mail as Default Email Reader

## Method 1: Through Mail App Settings (Easiest)

### Step 1: Open Mail App
1. Open **Finder**
2. Go to **Applications** folder
3. Double-click **Mail** app to open it

### Step 2: Open Mail Settings
1. In Mail app, click **Mail** in the menu bar (top left)
2. Click **Settings** (or **Preferences** if you see that instead)
   - Keyboard shortcut: `Cmd + ,` (Command + Comma)

### Step 3: Set Default Email Reader
1. Click on **General** tab (if not already selected)
2. Look for **"Default email reader"** or **"Default email client"** dropdown
3. Select **Mail** from the dropdown (if not already selected)
4. Close the Settings window

---

## Method 2: Through System Settings (Alternative)

### Step 1: Open System Settings
1. Click **Apple menu** (🍎 icon in top left)
2. Click **System Settings** (or **System Preferences** on older Macs)

### Step 2: Find Default Apps
1. Click **Desktop & Dock** in the left sidebar
2. Scroll down to find **"Default web browser"** section
   - Note: Email client setting might be in a different location depending on macOS version

**OR**

### Alternative Location (macOS Ventura/Sonoma):
1. In System Settings, click **Default apps** or search for "default"
2. Look for **"Email client"** or **"Default email reader"**
3. Select **Mail**

**OR**

### For Older macOS Versions:
1. Go to **System Preferences** → **General**
2. Look for **"Default web browser"** and **"Default email reader"**
3. Set email reader to **Mail**

---

## Method 3: Quick Terminal Command

Open Terminal and run:
```bash
defaults write com.apple.LaunchServices/com.apple.launchservices.secure LSHandlers -array-add '{LSHandlerURLScheme=mailto;LSHandlerRoleAll=com.apple.mail}'
```

Then restart your Mac or log out and back in for the change to take effect.

---

## Method 4: Set via Default Apps in System Settings (Most Reliable)

### For macOS Ventura (13) or Sonoma (14):
1. Click **Apple menu** (🍎) → **System Settings**
2. In the search bar at top, type **"default apps"**
3. Look for **Email** or **Email client**
4. Select **Mail**

### For macOS Monterey (12) or earlier:
1. Click **Apple menu** → **System Preferences**
2. Click **General**
3. Look for **"Default email reader"**
4. Select **Mail**

---

## Verify It's Working

### Test 1: Terminal Command
Open Terminal and run:
```bash
open "mailto:john.cheung75@gmail.com"
```

**What should happen:**
- Mail app opens
- New email window appears
- `john.cheung75@gmail.com` is in the "To" field

**If this works** → ✅ Success! Mail is now your default email reader

### Test 2: Test HTML File
1. Open `/tmp/test-mailto.html` in your browser
2. Click the "Test Email" link
3. Mail app should open

### Test 3: Your React App
1. Go to your portfolio site
2. Click "Contact Me" links
3. Mail app should open now! ✅

---

## Troubleshooting

### If Mail app won't open:
- Make sure Mail is installed: Check Applications folder
- If not installed: Go to App Store → Search "Mail" → Install

### If settings don't save:
- Try Method 1 (through Mail app Settings) - most reliable
- Or try Method 3 (Terminal command) - always works

### If nothing happens after setting:
- Restart your Mac
- Or log out and log back in
- Then test again

---

## Quick Checklist

- [ ] Mail app is installed (check Applications folder)
- [ ] Opened Mail app at least once
- [ ] Set Mail as default in Mail → Settings → General
- [ ] OR set in System Settings
- [ ] Tested with: `open "mailto:john.cheung75@gmail.com"` in Terminal
- [ ] Mail app opens when testing ✅

Once Mail opens when you run that Terminal command, you're all set!

