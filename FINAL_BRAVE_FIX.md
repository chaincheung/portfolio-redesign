# Final Fix: Brave Browser Opening Empty Page for Mailto

## The Problem:
Brave is opening a new tab/page when you click mailto links instead of launching Mail app. This means Brave isn't properly configured to handle mailto protocol.

## The Solution:

### Step 1: Check Brave Handler Settings

1. **Open Brave**
2. **Go to:** `brave://settings/handlers` (paste in address bar)
3. Look for **"mailto"** in the protocol handlers list
4. **Check what it's set to:**
   - If it says **"Ask"** → Good, but Brave needs to actually ask
   - If it says **"Block"** → Change to **"Allow"** or **"Ask"**
   - If it's not in the list → Go to Step 2

### Step 2: Check System Default Email Client

1. **Open System Settings** (Mac)
2. **Go to:** Desktop & Dock
3. **Make sure Mail app is set** as default email client
4. **OR** try this in Terminal:
   ```bash
   defaults write com.apple.LaunchServices/com.apple.launchservices.secure LSHandlers -array-add '<dict><key>LSHandlerURLScheme</key><string>mailto</string><key>LSHandlerRoleAll</key><string>com.apple.mail</string></dict>'
   ```
5. **Restart your Mac** (or log out/in)

### Step 3: Test Direct Mailto

1. **Open Terminal**
2. **Run:** `open "mailto:john.cheung75@gmail.com"`
3. **Does Mail app open?**
   - **If YES** → System is configured, Brave just needs permission
   - **If NO** → Mail app needs configuration first

### Step 4: Configure Brave Properly

**Option A: Visit a site and allow permission**
1. Go to your **live Netlify site** (not localhost)
2. Click "Contact Me"
3. Brave should ask: "Allow [site] to open mailto: links?"
4. Click **"Always allow"** (not just "Allow")

**Option B: Manually set in Brave settings**
1. Go to: `brave://settings/content/handlers`
2. Add mailto handler
3. Set it to use Mail app

### Step 5: If Still Not Working

**Reset Brave handlers:**
1. Go to: `brave://settings/handlers`
2. Clear any mailto entries
3. Restart Brave
4. Visit your site again
5. Click Contact Me
6. When Brave asks, click **"Always allow"**

---

## Quick Test:

1. **Close Brave completely** (Cmd+Q)
2. **Reopen Brave**
3. **Visit your live site** (Netlify URL)
4. **Click "Contact Me"**
5. **Brave should ask permission** → Click "Always allow"
6. **Mail app should open!** ✅

---

## The Code is Correct:

The mailto links are implemented correctly:
- Simple `<a href="mailto:john.cheung75@gmail.com">` 
- Direct `window.location.href = 'mailto:...'`

The issue is **100% browser configuration** - Brave needs to be configured to handle mailto protocol and ask/allow permission when you click the links.

---

**Try visiting your LIVE Netlify site and clicking Contact Me there - Brave should prompt for permission on a real domain.**

