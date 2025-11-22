# Where to Test Your Changes

## Option 1: Test Locally (Quick - Before Deployment)

Test on your computer before deploying to Netlify.

### Steps:

1. **Open Terminal**
   - Press `Cmd + Space`
   - Type "Terminal" and press Enter

2. **Navigate to Your Project**
   ```bash
   cd /Users/johncheung/Documents/portfolio_redesign
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```

4. **Your Browser Will Open Automatically**
   - Usually opens to: http://localhost:3000
   - If not, manually go to: http://localhost:3000

5. **Test Your Changes:**
   - Click "Contact Me" links
   - Fill out the contact form and click "Send Message"
   - Test everything you changed

6. **Stop the Server**
   - Press `Ctrl + C` in Terminal when done testing

---

## Option 2: Test on Netlify (Live Site - After Deployment)

Test on your live website after Netlify deploys your changes.

### Steps:

1. **Check Netlify Deployment Status**
   - Go to: https://app.netlify.com
   - Click on your site
   - Go to **"Deploys"** tab (left sidebar)
   - Look for latest deployment (should say "Fix Send Message button..." or similar)
   - Wait for it to say **"Published"** (usually 2-5 minutes)

2. **Get Your Site URL**
   - On Netlify dashboard, look at the top of the page
   - You'll see your site URL, something like:
     - `https://your-site-name.netlify.app`
     - Or your custom domain if you set one up

3. **Test Your Changes:**
   - Open your site URL in a browser
   - Click "Contact Me" links
   - Fill out the contact form and click "Send Message"
   - Test everything you changed

---

## What to Test

### Contact Me Links:
- [ ] Click "Contact Me" in navigation menu → Should open email client
- [ ] Click "Contact Me" in contact section → Should open email client

### Contact Form:
- [ ] Fill in Name field
- [ ] Fill in Email field
- [ ] Fill in Message field
- [ ] Click "Send Message" button
- [ ] Email client should open with:
  - To: john.cheung75@gmail.com
  - Subject: "Contact Form Submission from [Your Name]"
  - Body: All form data pre-filled

---

## Troubleshooting

### Local Testing:
- **"npm start" not working?**
  - Make sure you're in the right folder: `/Users/johncheung/Documents/portfolio_redesign`
  - Try: `npm install` first, then `npm start`

- **Port 3000 already in use?**
  - Terminal will ask if you want to use a different port (say yes)
  - Or stop the other process using port 3000

### Netlify Testing:
- **Can't see deployment?**
  - Make sure you pushed changes to GitHub
  - Check GitHub to confirm your commits are there
  - Netlify should auto-deploy when you push to GitHub

- **Deployment failed?**
  - Check Netlify → Deploys tab → Click on failed deployment
  - Look at build logs to see what went wrong

### Email Links Not Working:
- **Nothing happens when clicking?**
  - Make sure you have an email client installed (Mail, Outlook, etc.)
  - Check browser settings (some browsers block mailto links)
  - Try a different browser

- **Email client doesn't open?**
  - System might not have a default email client set
  - On Mac: System Settings → Desktop & Dock → Check default apps

---

## Quick Reference

### Test Locally:
```bash
cd /Users/johncheung/Documents/portfolio_redesign
npm start
```
Then open: http://localhost:3000

### Test on Netlify:
1. Wait for deployment: https://app.netlify.com → Your site → Deploys
2. Visit your site URL (shown on Netlify dashboard)
3. Test everything!

---

## Which Should I Use?

- **Test Locally First** → Quick feedback, test before deploying
- **Test on Netlify** → See how it works on live site, test actual deployment

You can do both! Test locally first, then test on Netlify after deployment.

