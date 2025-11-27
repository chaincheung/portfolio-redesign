# Fix DNS Error for www.johncheung.design

## Problem Identified
✅ `johncheung.design` - DNS resolves correctly (points to Netlify)
❌ `www.johncheung.design` - DNS not resolving (causing error)

The error shows: "www.johncheung.design's DNS address could not be found"

## Solution: Configure www Subdomain DNS

### Step 1: Check Current DNS Status in Netlify
1. Go to Netlify Dashboard → Your site → **Domain settings**
2. Look at `www.johncheung.design`
3. Check the status - it should show "Netlify DNS propagating..." (spinning icon)

### Step 2: Verify DNS Records Needed
The www subdomain needs a **CNAME record** pointing to your Netlify site.

**Required DNS Record:**
- **Type**: CNAME
- **Name**: `www`
- **Value**: `jcux.netlify.app` (or your Netlify site domain)
- **TTL**: 600 (or default)

### Step 3: Add CNAME Record in Your Domain Provider

#### If Using Netlify DNS (Recommended)
1. In Netlify → **Domain settings** → Click on `www.johncheung.design`
2. Netlify should automatically create the CNAME record
3. Wait for DNS propagation (can take 1-48 hours, usually 1-2 hours)

#### If Using External DNS Provider
You need to add a CNAME record manually:

**GoDaddy:**
1. Log into GoDaddy
2. Go to **DNS Management** for `johncheung.design`
3. Click **"Add"** to create new record
4. **Type**: CNAME
5. **Name**: `www`
6. **Value**: `jcux.netlify.app`
7. **TTL**: 600
8. **Save**

**Namecheap:**
1. Log into Namecheap
2. Go to **Domain List** → Click **"Manage"** next to `johncheung.design`
3. Go to **"Advanced DNS"** tab
4. Click **"Add New Record"**
5. **Type**: CNAME Record
6. **Host**: `www`
7. **Value**: `jcux.netlify.app`
8. **TTL**: Automatic
9. **Save**

**Cloudflare:**
1. Log into Cloudflare
2. Select `johncheung.design`
3. Go to **DNS** tab
4. Click **"Add record"**
5. **Type**: CNAME
6. **Name**: `www`
7. **Target**: `jcux.netlify.app`
8. **Proxy status**: Gray cloud (DNS only) - NOT orange
9. **TTL**: Auto
10. **Save**

**Google Domains:**
1. Log into Google Domains
2. Click on `johncheung.design`
3. Go to **DNS** tab
4. Scroll to **"Custom resource records"**
5. Click **"Manage custom records"**
6. Click **"Add new record"**
7. **Name**: `www`
8. **Type**: CNAME
9. **Data**: `jcux.netlify.app`
10. **TTL**: 3600
11. Click **"Add"**

### Step 4: Verify DNS Propagation
After adding the CNAME record, check if it's propagating:

**Check in terminal:**
```bash
dig www.johncheung.design +short
```

Should return: `jcux.netlify.app` or Netlify IP addresses

**Or use online tool:**
- Visit: https://www.whatsmydns.net
- Enter: `www.johncheung.design`
- Check if CNAME record is visible

### Step 5: Wait for Propagation
- DNS changes can take **1-48 hours** to propagate
- Usually takes **1-2 hours** in most cases
- Be patient - it will work once DNS propagates

## Quick Fix: Use Root Domain Only

While waiting for www DNS to propagate, you can:

1. **Access the site directly**: `https://johncheung.design` (without www)
2. **Set up redirect in Netlify**: Netlify should automatically redirect www to root domain once DNS is configured

## Verify Netlify Configuration

1. In Netlify → **Domain settings**
2. Make sure both domains are listed:
   - `johncheung.design` (Primary - should be Active ✅)
   - `www.johncheung.design` (should show "Redirects automatically to primary domain")

3. If www is not listed:
   - Click **"Add domain alias"**
   - Enter: `www.johncheung.design`
   - Netlify will provide DNS instructions

## Expected Result

Once DNS propagates:
- `johncheung.design` → Works ✅
- `www.johncheung.design` → Redirects to `johncheung.design` ✅

## Current Status Check

Run this to check current DNS:
```bash
dig www.johncheung.design CNAME +short
```

If it returns nothing or an error, the CNAME record is missing and needs to be added.

---

**Next Step**: Add CNAME record for `www` subdomain in your domain provider, pointing to `jcux.netlify.app`

