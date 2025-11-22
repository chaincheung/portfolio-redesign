# Netlify DNS Verification Guide

## Your Domain is Pending DNS Verification - Here's How to Fix It

When your domain shows "Pending DNS verification" on Netlify, it means you need to configure DNS records with your domain provider to point to Netlify.

---

## Step-by-Step DNS Setup

### Step 1: Get DNS Instructions from Netlify

1. **Go to Netlify** → Your site → **Domain settings**
2. **Find your domain** in the list (the one showing "Pending DNS verification")
3. **Click on your domain** or look for **"DNS configuration"** or **"DNS records"**
4. **Netlify will show you DNS instructions** - you'll see:
   - **A record** values (usually 4 IP addresses)
   - **CNAME record** value (usually your site's Netlify domain)
   - **Nameservers** (if you're using Netlify DNS)

5. **Copy or write down these values** - you'll need them!

**What you'll typically see:**
```
A Record:    75.2.60.5
A Record:    75.2.60.6
A Record:    75.2.60.7
A Record:    75.2.60.8

CNAME:       your-site.netlify.app
```

OR

**Nameservers:**
```
ns1.netlify.com
ns2.netlify.com
```

---

### Step 2: Identify Your Domain Provider

Where did you buy your domain? Common providers:

- **GoDaddy** - godaddy.com
- **Namecheap** - namecheap.com
- **Google Domains** - domains.google.com
- **Cloudflare** - cloudflare.com
- **Name.com** - name.com
- **Hover** - hover.com
- **Others** - Check your email for where you bought it

---

### Step 3: Log Into Your Domain Provider

1. Go to your domain provider's website
2. **Sign in** to your account
3. **Navigate to "Domain Management"** or **"My Domains"**
4. **Find your domain** in the list
5. **Click on your domain** to manage it

---

### Step 4: Configure DNS Records

You have **two options** - choose one:

---

## Option A: Use A Records + CNAME (Recommended for Subdomain)

This is for subdomains like `portfolio.johncheung.design`

### GoDaddy DNS Setup

1. **In GoDaddy**, click on your domain
2. Go to **"DNS"** tab (or "DNS Management")
3. **Find DNS records section** - you'll see existing records
4. **Add/Edit A Records**:

   **For each A record Netlify provided:**
   - Click **"Add"** or **"Edit"** (if A record already exists)
   - **Type**: A
   - **Name**: `@` or leave blank (for root domain) OR `portfolio` (for subdomain)
   - **Value**: `75.2.60.5` (one of Netlify's IP addresses)
   - **TTL**: `600` (or default)
   - **Save**

   **Repeat for each A record:**
   - A record 1: `75.2.60.5`
   - A record 2: `75.2.60.6`
   - A record 3: `75.2.60.7`
   - A record 4: `75.2.60.8`

5. **Add CNAME record** (for subdomain):
   - Click **"Add"**
   - **Type**: CNAME
   - **Name**: `portfolio` (or your subdomain name)
   - **Value**: `your-site.netlify.app` (from Netlify)
   - **TTL**: `600` (or default)
   - **Save**

6. **Delete old conflicting records** (if any):
   - If you see old A records pointing elsewhere, delete them
   - If you see old CNAME records, delete them (unless needed)

7. **Save all changes**

### Namecheap DNS Setup

1. **In Namecheap**, go to **"Domain List"**
2. **Click "Manage"** next to your domain
3. Go to **"Advanced DNS"** tab
4. **Find "Host Records"** section

5. **Add A Records**:
   - Click **"Add New Record"**
   - **Type**: A Record
   - **Host**: `@` (for root) OR `portfolio` (for subdomain)
   - **Value**: `75.2.60.5` (first Netlify IP)
   - **TTL**: Automatic
   - **Save**
   - **Repeat** for all 4 A records

6. **Add CNAME Record** (for subdomain):
   - Click **"Add New Record"**
   - **Type**: CNAME Record
   - **Host**: `portfolio` (your subdomain)
   - **Value**: `your-site.netlify.app`
   - **TTL**: Automatic
   - **Save**

7. **Remove conflicting records** if any

### Google Domains DNS Setup

1. **In Google Domains**, click on your domain
2. Go to **"DNS"** tab
3. **Scroll to "Custom resource records"**

4. **Add A Records**:
   - Click **"Manage custom records"**
   - Click **"Add new record"**
   - **Name**: `@` or `portfolio`
   - **Type**: A
   - **Data**: `75.2.60.5` (one of Netlify IPs)
   - **TTL**: `3600`
   - Click **"Add"**
   - **Repeat** for all 4 A records

5. **Add CNAME Record** (for subdomain):
   - Click **"Add new record"**
   - **Name**: `portfolio`
   - **Type**: CNAME
   - **Data**: `your-site.netlify.app`
   - **TTL**: `3600`
   - Click **"Add"**

### Cloudflare DNS Setup

1. **In Cloudflare**, select your domain
2. Go to **"DNS"** tab
3. **Find "DNS records"** section

4. **Add A Records**:
   - Click **"Add record"**
   - **Type**: A
   - **Name**: `@` or `portfolio`
   - **IPv4 address**: `75.2.60.5`
   - **Proxy status**: Gray cloud (DNS only) - NOT orange
   - **TTL**: Auto
   - **Save**
   - **Repeat** for all 4 A records

5. **Add CNAME Record**:
   - Click **"Add record"**
   - **Type**: CNAME
   - **Name**: `portfolio`
   - **Target**: `your-site.netlify.app`
   - **Proxy status**: Gray cloud (DNS only)
   - **TTL**: Auto
   - **Save**

---

## Option B: Change Nameservers (Recommended for Root Domain)

This is for root domains like `johncheung.design` (not subdomain)

### Steps:

1. **In Netlify Domain settings**, you'll see nameservers:
   ```
   ns1.netlify.com
   ns2.netlify.com
   ```

2. **Copy these nameservers**

3. **Go to your domain provider**

4. **Find "Nameservers" or "DNS Settings"**

5. **Change to Netlify nameservers**:
   - **GoDaddy**: Domain → DNS → Nameservers → Change → Custom → Enter Netlify nameservers
   - **Namecheap**: Domain List → Manage → Nameservers → Custom DNS → Enter Netlify nameservers
   - **Google Domains**: DNS → Name servers → Use custom name servers → Enter Netlify nameservers

6. **Save changes**

7. **Wait for propagation** (can take up to 48 hours)

---

## Step 5: Wait for DNS Propagation

After adding DNS records:

1. **DNS changes take time to propagate**:
   - Can take **5 minutes to 48 hours**
   - Usually takes **1-2 hours** in most cases

2. **Don't panic** if it doesn't work immediately!

3. **Check DNS propagation**:
   - Use online tools like:
     - `whatsmydns.net`
     - `dnschecker.org`
   - Enter your domain and check if A records/CNAME point to Netlify IPs

4. **Netlify will automatically verify** once DNS propagates:
   - Go back to Netlify → Domain settings
   - Status should change from "Pending" to "Active" or "Verified"

---

## Step 6: Verify in Netlify

1. **Go back to Netlify** → Your site → Domain settings
2. **Check your domain status**:
   - ✅ **"Active"** or **"Verified"** - Success!
   - ⏳ **"Pending"** - Still waiting for DNS
   - ❌ **"Failed"** - DNS records incorrect

3. **If still pending after 24 hours**:
   - Double-check DNS records are correct
   - Make sure you deleted old conflicting records
   - Verify TTL isn't too long (should be 600-3600)

---

## Troubleshooting

### "Still pending after several hours"

**Check:**
- ✅ DNS records are correct (match Netlify exactly)
- ✅ TTL is reasonable (600-3600)
- ✅ No conflicting old records
- ✅ Used correct record types (A vs CNAME)
- ✅ Nameservers are correct (if using Option B)

**Try:**
- Clear your browser cache
- Check DNS propagation with online tools
- Wait a bit longer (can take up to 48 hours)

### "DNS verification failed"

**Common mistakes:**
- ❌ Wrong IP addresses (not Netlify's IPs)
- ❌ Wrong CNAME value (not your Netlify app domain)
- ❌ Wrong record type (A vs CNAME confusion)
- ❌ Old conflicting records still present
- ❌ TTL too long (should be 600-3600)

**Fix:**
- Double-check Netlify's DNS instructions
- Remove old records
- Re-add records correctly

### "Can't find DNS settings in domain provider"

**Try:**
- Look for "DNS Management"
- Look for "DNS Records"
- Look for "Advanced DNS"
- Check domain provider's help/docs
- Contact domain provider support

---

## Quick Checklist

- [ ] Got DNS instructions from Netlify
- [ ] Identified domain provider
- [ ] Logged into domain provider
- [ ] Added A records (4 IP addresses from Netlify)
- [ ] Added CNAME record (for subdomain)
- [ ] OR Changed nameservers (for root domain)
- [ ] Removed old conflicting records
- [ ] Saved all changes
- [ ] Waited for DNS propagation (1-48 hours)
- [ ] Verified status in Netlify changed to "Active"

---

## Common Netlify IP Addresses

If you need them, Netlify's IP addresses are typically:
- `75.2.60.5`
- `75.2.60.6`
- `75.2.60.7`
- `75.2.60.8`

**BUT:** Always use the IPs Netlify shows you in Domain settings - they may differ!

---

## Need Help?

If you're still stuck:
1. Take a screenshot of Netlify's DNS instructions
2. Take a screenshot of your domain provider's DNS settings
3. Check Netlify's docs: https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/
4. Contact Netlify support: support@netlify.com

