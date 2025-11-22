# Fix: Mail Opens But Doesn't Compose Email

## The Problem:
Mail app opens when you click mailto links, but it doesn't open a new compose window with the email address pre-filled.

## Common Causes:

### 1. Mail App Needs Email Account Setup

Mail app needs at least one email account configured to compose emails.

**To Fix:**
1. **Open Mail app** (should already be open)
2. Go to **Mail → Add Account** (or **Settings → Accounts**)
3. **Add an email account:**
   - Gmail
   - iCloud
   - Outlook
   - Any email account you have
4. **Complete the setup** (just needs one account)
5. **Test again:**
   ```bash
   open "mailto:john.cheung75@gmail.com"
   ```

### 2. Mail Preferences Setting

1. **Open Mail app**
2. Go to **Mail → Settings** (or **Preferences**)
3. Click **Composing** tab
4. Make sure:
   - **"Always compose in plain text"** is unchecked (if you want rich text)
   - Or leave it checked if you prefer plain text
5. Close Settings
6. **Test again**

### 3. Reset Mailto Handler

Sometimes the handler needs to be reset. Try:

1. **Quit Mail app** completely:
   - Click Mail in menu bar → Quit Mail
   - Or press `Cmd + Q`

2. **Restart Mail app**

3. **Set Mail as default again:**
   - Mail → Settings → General
   - Make sure Mail is selected as **Default email reader**

4. **Test again:**
   ```bash
   open "mailto:john.cheung75@gmail.com"
   ```

### 4. Alternative: Use System Default Handler

Try setting it through System Settings:

1. **Open System Settings**
2. Search for **"default apps"** or **"email"**
3. Set **Mail** as default email client
4. **Restart your Mac** (sometimes needed)
5. **Test again**

---

## Quick Test:

Run this in Terminal:
```bash
open "mailto:john.cheung75@gmail.com?subject=Test&body=Hello%20World"
```

**What should happen:**
- Mail app opens
- **New compose window opens**
- To: john.cheung75@gmail.com
- Subject: Test
- Body: Hello World

**If Mail opens but no compose window:**
- You need to add an email account to Mail first (Step 1 above)

---

## Step-by-Step: Add Email Account to Mail

### For Gmail:
1. Open Mail app
2. **Mail → Add Account** (or **Settings → Accounts → +**)
3. Select **Google**
4. Click **Continue**
5. Sign in with your Gmail account
6. Click **Allow** to give Mail access
7. Select what you want to sync (Mail, Contacts, etc.)
8. Click **Done**

### For iCloud:
1. Open Mail app
2. **Mail → Add Account**
3. Select **iCloud**
4. Sign in with Apple ID
5. Enable **Mail**
6. Click **Done**

### For Other Email:
1. Open Mail app
2. **Mail → Add Account**
3. Select your email provider
4. Follow setup instructions

---

## After Adding Email Account:

1. **Test with Terminal:**
   ```bash
   open "mailto:john.cheung75@gmail.com"
   ```
   Should now open compose window with email pre-filled! ✅

2. **Test HTML file:**
   - Open `/tmp/test-mailto.html` in browser
   - Click "Test Email" link
   - Should open compose window! ✅

3. **Test your React portfolio:**
   - Refresh your portfolio site
   - Click "Contact Me" links
   - Should open compose window! ✅

---

## Most Likely Fix:

**You need to add at least one email account to Mail app.** Mail can't compose emails without an account configured.

**Quick steps:**
1. Mail → Add Account
2. Add Gmail or any email account
3. Complete setup
4. Test again - should work! ✅

Let me know if you've added an email account and if the compose window opens now!

