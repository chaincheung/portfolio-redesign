# Step-by-Step: Fix Mailto Links

## The Issue:
Mail app is installed but mailto links aren't opening it. This needs to be fixed manually.

## Solution: Set Mail as Default Through Mail App

### Step 1: Open Mail App
1. **Press `Cmd + Space`** to open Spotlight
2. Type **"Mail"** and press **Enter**
   - OR go to **Applications** folder and double-click **Mail**

### Step 2: Open Mail Settings
1. In Mail app, look at the **menu bar** at the top
2. Click **Mail** (in menu bar, top left)
3. Click **Settings** (or **Preferences**)
   - Shortcut: `Cmd + ,` (Command + Comma)

### Step 3: Set Default Email Reader
1. You'll see a window with tabs at the top
2. Click the **General** tab (leftmost)
3. Look for a dropdown that says **"Default email reader"** or **"Default email client"**
4. Select **Mail** from the dropdown (if not already selected)
5. Close the Settings window

### Step 4: Test It
Open Terminal and run:
```bash
open "mailto:john.cheung75@gmail.com"
```

**Mail app should open with a new email!** ✅

---

## Alternative: System Settings (if Mail Settings doesn't work)

### For macOS Ventura/Sonoma:
1. Click **Apple menu** (🍎) → **System Settings**
2. In search bar at top, type: **"default apps"** or **"email"**
3. Look for **Email** or **Email client** option
4. Select **Mail**

### For macOS Monterey or earlier:
1. Click **Apple menu** → **System Preferences**
2. Click **General**
3. Look for **"Default email reader"**
4. Select **Mail**

---

## If Nothing Works:

Try this Terminal command to force-set Mail:
```bash
defaults write com.apple.LaunchServices/com.apple.launchservices.secure LSHandlers -array-add '<dict><key>LSHandlerURLScheme</key><string>mailto</string><key>LSHandlerRoleAll</key><string>com.apple.mail</string></dict>'
```

Then restart your Mac or log out and back in.

---

## After Setting:

1. **Test with Terminal:**
   ```bash
   open "mailto:john.cheung75@gmail.com"
   ```
   Mail should open ✅

2. **Test HTML file:**
   - Open `/tmp/test-mailto.html` in browser
   - Click "Test Email" link
   - Mail should open ✅

3. **Test your React portfolio:**
   - Refresh your portfolio site
   - Click "Contact Me" links
   - Mail should open ✅

---

**Try Step 1-3 first (Mail → Settings → General). That's the easiest and most reliable method!**

Let me know if Mail opens when you test it!

