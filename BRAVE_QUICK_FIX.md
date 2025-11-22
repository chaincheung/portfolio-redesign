# Quick Fix: Brave Browser Mailto Links

## Current Situation:
You're seeing the test file at `file:///private/tmp/test-mailto-browser.html` and the mailto link doesn't work there either.

**This confirms it's a Brave browser configuration issue.**

---

## Fix Brave Browser - 3 Simple Steps:

### Step 1: Open Brave Protocol Handlers Settings
1. In Brave browser, click the **address bar** (where URLs go)
2. Type: `brave://settings/handlers`
3. Press **Enter**

**This will open Brave's protocol handlers settings page.**

### Step 2: Enable Protocol Handlers
1. On the settings page, look for: **"Allow sites to ask to become default handlers for protocols"**
2. **Turn this ON** (toggle should be enabled/blue)

### Step 3: Test Again
1. **Close Brave completely** (Brave menu → Quit Brave, or `Cmd + Q`)
2. **Reopen Brave**
3. **Go back to:** `file:///private/tmp/test-mailto-browser.html`
4. **Click the "Click Me - Mailto Link"** button
5. **Brave should ask:** "Allow this site to open mailto: links?"
6. **Click "Allow"**
7. **Mail app should open!** ✅

---

## Then Test Your Portfolio:

After mailto works in the test file:

1. **Go to:** http://localhost:3000
2. **Click "Contact Me"** links
3. **Should work now!** ✅

---

## If Brave Still Doesn't Ask Permission:

### Alternative Method:
1. **Open Brave**
2. Go to: `brave://settings/content/handlers`
3. Look for protocol handler settings
4. Enable them if disabled
5. **Restart Brave**
6. Test again

### Or Check System Default:
1. **Open System Settings** (Mac)
2. **Desktop & Dock**
3. Make sure Mail is set as default email client
4. **Restart your Mac**
5. Test again

---

## Quick Checklist:

- [ ] Opened `brave://settings/handlers` in Brave
- [ ] Enabled "Allow sites to ask to become default handlers for protocols"
- [ ] Closed and reopened Brave
- [ ] Tested mailto link in test file
- [ ] Brave asked permission - clicked "Allow"
- [ ] Mail app opened! ✅
- [ ] Tested portfolio Contact Me links - worked! ✅

---

**Do Step 1-3 first, then test the link in the test file. If Brave asks permission when you click it, you're on the right track!**

