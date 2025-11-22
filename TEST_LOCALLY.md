# Test Mailto Changes Locally

## Your Development Server:

The server should be starting up now. It will automatically open in your browser.

**URL:** http://localhost:3000

## What to Test:

### 1. Navigation Menu "Contact Me" Link:
1. Click the **hamburger menu** (☰) in the top right
2. Click **"Contact Me"** in the menu
3. **Mail app should open** with a new compose window
4. **To field should be:** john.cheung75@gmail.com

### 2. Contact Section "Contact Me" Link:
1. Scroll down to the **"Let's Work Together"** section
2. Click the **"Contact Me"** link (with envelope icon ✉)
3. **Mail app should open** with a new compose window
4. **To field should be:** john.cheung75@gmail.com

### 3. Contact Form "Send Message" Button:
1. Fill out the contact form:
   - **Name:** Your name
   - **Email:** Your email
   - **Message:** Test message
2. Click **"Send Message"** button
3. **Mail app should open** with a new compose window
4. **Should have:**
   - **To:** john.cheung75@gmail.com
   - **Subject:** Contact Form Submission from [Your Name]
   - **Body:** Name, Email, and Message pre-filled

---

## If Browser Doesn't Open Automatically:

**Manually open:**
1. Open your browser (Chrome, Safari, Firefox)
2. Go to: **http://localhost:3000**
3. Test the links above

---

## What Should Happen:

✅ **Mail app opens** when you click Contact Me links
✅ **New compose window opens** with email pre-filled
✅ **Contact form** pre-fills email with form data

---

## If It Doesn't Work:

1. **Make sure Mail app has an email account configured**
   - Mail → Settings → Accounts
   - Should have at least one account

2. **Test mailto directly:**
   ```bash
   open "mailto:john.cheung75@gmail.com"
   ```
   If this doesn't open compose window, Mail isn't fully set up yet

3. **Check browser console for errors:**
   - Open browser DevTools (F12 or Cmd+Option+I)
   - Go to Console tab
   - Look for any red error messages

---

## Quick Test Checklist:

- [ ] Development server running at http://localhost:3000
- [ ] Navigation "Contact Me" opens Mail with email pre-filled
- [ ] Contact section "Contact Me" opens Mail with email pre-filled
- [ ] Contact form "Send Message" opens Mail with form data pre-filled
- [ ] All links show `mailto:john.cheung75@gmail.com` on hover

Once all these work locally, they'll work on your live site after Netlify deploys!

---

**Your server is starting - check http://localhost:3000 in a few seconds!**

