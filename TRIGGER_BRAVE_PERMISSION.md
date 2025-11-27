# Trigger Brave Permission Request

## The Issue:
Even though "Sites can ask to handle protocols" is enabled, Brave needs to actually ASK you for permission when you click a mailto link.

## How to Get Brave to Ask Permission:

### Step 1: Visit Your Site
1. **Go to:** http://localhost:3000 (or your live Netlify site)
2. Make sure you're on the actual site, not a local file

### Step 2: Click Contact Me
1. **Click any "Contact Me" link** on the site
2. **Brave should pop up a prompt** asking:
   - "Allow localhost:3000 to open mailto: links?"
   - OR "Allow this site to open mailto: links?"

### Step 3: Click "Allow"
1. Click **"Allow"** or **"Always allow"**
2. Mail app should open!

---

## If Brave Still Doesn't Ask:

### Force Permission Request:

1. **Open Brave DevTools** (F12 or Cmd+Option+I)
2. Go to **Console** tab
3. Type this command and press Enter:
   ```javascript
   window.location.href = 'mailto:john.cheung75@gmail.com';
   ```
4. Brave should ask for permission

### Check if Permission is Already Set:

1. Go to: `brave://settings/content/handlers`
2. Look for "mailto" in the list
3. If you see localhost or your site, make sure it's set to "Allow"

---

## Test on Live Site:

Sometimes localhost doesn't trigger permission properly. Try:

1. **Wait for Netlify deployment** to finish
2. **Go to your live Netlify site**
3. **Click "Contact Me"**
4. **Brave should ask permission** on the live site
5. **Click "Allow"**
6. **Should work!** ✅

---

**Try clicking Contact Me on your live site (Netlify) - Brave is more likely to prompt there than on localhost.**

