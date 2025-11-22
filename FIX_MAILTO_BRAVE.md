# Fix: Configure Mailto Links in Brave Browser

## Brave Browser Mailto Configuration

Brave is based on Chromium, so it uses similar settings to Chrome.

---

## Method 1: Protocol Handlers Settings (Recommended)

### Step 1: Open Protocol Handlers Settings
1. **Open Brave browser**
2. In the address bar, type: `brave://settings/handlers`
   - Or paste this: `brave://settings/handlers`
3. Press **Enter**

### Step 2: Enable Protocol Handlers
1. Look for **"Protocol handlers"** section
2. Make sure **"Allow sites to ask to become default handlers for protocols"** is **ENABLED** (toggle ON)
3. Scroll down to see the list of protocol handlers

### Step 3: Configure Mailto Handler
1. Look for **"mailto"** in the protocol handlers list
2. If you see it, set it to **"Allow"** or **"Ask"**
3. If you DON'T see it in the list yet, continue to Step 4

### Step 4: Visit a Site with Mailto Link
1. Go to any website with a mailto link (like your portfolio)
2. Brave should ask: **"Allow [site] to open mailto: links?"**
3. Click **"Allow"** or **"Always allow"**
4. Now mailto links should work!

---

## Method 2: Site Settings (Alternative)

### Step 1: Open Site Settings
1. In Brave address bar, type: `brave://settings/content/handlers`
2. Press **Enter**

### Step 2: Configure Handlers
1. Look for protocol handler settings
2. Enable protocol handlers if not already enabled
3. Test a mailto link - Brave should prompt you

---

## Method 3: Through Browser Settings Menu

### Step 1: Open Brave Settings
1. Click **Brave menu** (three lines ☰ in top right)
2. Click **Settings**
   - Or press `Cmd + ,` (Mac) or `Ctrl + ,` (Windows)

### Step 2: Privacy and Security
1. Click **Privacy and security** in left sidebar
2. Click **Site settings** or **Additional permissions**
3. Look for **Protocol handlers** or **URL handlers**
4. Enable **"Allow sites to ask to become default handlers for protocols"**

---

## Method 4: Direct URL (Quick Test)

1. Open Brave
2. Go to: `brave://settings/handlers`
3. Enable protocol handlers
4. **Restart Brave browser**
5. Visit your portfolio site: http://localhost:3000
6. Click "Contact Me" link
7. Brave should ask permission - click **"Allow"**

---

## After Configuration:

### Test It:
1. **Restart Brave browser** (important!)
2. Go to http://localhost:3000
3. Click **"Contact Me"** links
4. **Brave should ask:** "Allow localhost:3000 to open mailto: links?"
5. Click **"Allow"** or **"Always allow"**
6. **Mail app should open!** ✅

---

## If Brave Still Won't Handle Mailto:

### Check Brave Shields:
1. Click the **Brave Shield icon** (lion icon) in address bar
2. Make sure Shields aren't blocking anything
3. Try disabling Shields temporarily to test if that's the issue

### Check Brave Privacy Settings:
1. Brave → Settings → Privacy and security
2. Make sure nothing is blocking protocol handlers
3. Check if any privacy settings are interfering

### Alternative: Use Default Browser Settings:
Since Brave might not have mailto handler, try setting it at the system level:
1. **Open System Settings** (Mac) or **Control Panel** (Windows)
2. Set **default email client** to Mail app
3. Test mailto links again

---

## Quick Test:

1. **Open Brave**
2. **Go to:** `brave://settings/handlers`
3. **Enable:** "Allow sites to ask to become default handlers for protocols"
4. **Restart Brave**
5. **Go to:** http://localhost:3000
6. **Click "Contact Me"**
7. **Brave should prompt** - click "Allow"
8. **Mail should open!** ✅

---

## Troubleshooting:

### If protocol handlers page is blank:
- Brave might need an update
- Try visiting a site with mailto link first (it will prompt)

### If nothing happens:
- Make sure Mail app has an email account configured
- Test in Terminal: `open "mailto:john.cheung75@gmail.com"`
- If that works, it's a Brave configuration issue

### If Brave prompts but Mail doesn't open:
- Mail app needs an email account configured
- Go to Mail → Settings → Accounts
- Add at least one email account

---

**Try Method 1 first (brave://settings/handlers) - that's the quickest way!**

