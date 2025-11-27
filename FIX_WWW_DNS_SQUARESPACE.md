# Fix www.johncheung.design DNS Error

## Problem
- ✅ `johncheung.design` - DNS working (resolves to Netlify IPs)
- ❌ `www.johncheung.design` - DNS not resolving (CNAME record missing)

## Domain Info
- **Registrar**: Squarespace Domains
- **DNS Provider**: Netlify DNS (managed by Netlify)

## Solution: Add www CNAME Record

Since you're using **Netlify DNS**, you need to add the CNAME record in Netlify, not Squarespace.

### Step 1: Add www Subdomain in Netlify
1. Go to **Netlify Dashboard** → Your site
2. Go to **Domain settings**
3. Look for **"Add domain alias"** button (bottom left)
4. Click it
5. Enter: `www.johncheung.design`
6. Click **"Verify"** or **"Add"**

### Step 2: Netlify Will Auto-Configure
Netlify should automatically:
- Create the CNAME record pointing to your Netlify site
- Set up redirect from www to root domain
- Configure SSL certificate

### Step 3: Wait for DNS Propagation
- Status will show: "Netlify DNS propagating..." (spinning icon)
- Usually takes **1-2 hours**, can take up to 48 hours
- The status will change to "Active" when ready

### Step 4: Verify DNS Record
After adding, check if CNAME is created:

```bash
dig www.johncheung.design CNAME +short
```

Should return: `jcux.netlify.app` or similar Netlify domain

## Alternative: If Netlify Doesn't Auto-Create

If Netlify doesn't automatically create the DNS record, you may need to:

1. **Check Netlify DNS settings:**
   - Go to **Domain settings** → Click on `johncheung.design`
   - Look for **"DNS records"** or **"DNS configuration"**
   - Check if www CNAME exists

2. **Manually add in Netlify (if possible):**
   - Some Netlify plans allow manual DNS record management
   - Add CNAME: `www` → `jcux.netlify.app`

3. **Or use external DNS:**
   - If Netlify DNS doesn't support manual records
   - Switch to Squarespace DNS or another provider
   - Add CNAME record there

## Quick Test

After adding www subdomain in Netlify:

1. **Wait 10-15 minutes** for initial propagation
2. **Test DNS:**
   ```bash
   dig www.johncheung.design CNAME +short
   ```
3. **If it returns `jcux.netlify.app`**, DNS is working!
4. **Visit**: `https://www.johncheung.design` (should redirect to `johncheung.design`)

## Current Status

Based on your Netlify dashboard screenshot:
- `johncheung.design` = ✅ Active (Netlify DNS)
- `www.johncheung.design` = ⏳ Netlify DNS propagating...

The www subdomain is already added in Netlify, but DNS is still propagating. This is normal and can take 1-48 hours.

## What to Do Now

**Option 1: Wait for Propagation** (Recommended)
- The www subdomain is already configured in Netlify
- Just wait for DNS to propagate (1-48 hours)
- Check status in Netlify Domain settings

**Option 2: Access Root Domain**
- Use `https://johncheung.design` directly (without www)
- This should work right now since root domain DNS is active

**Option 3: Check DNS Propagation Status**
- Visit: https://www.whatsmydns.net
- Enter: `www.johncheung.design`
- Check if CNAME record is visible globally

## Expected Timeline

- **Immediate**: Root domain (`johncheung.design`) should work
- **1-2 hours**: www subdomain DNS should propagate
- **24-48 hours**: Full global DNS propagation

---

**Action**: Since www is already added in Netlify (showing "propagating"), you just need to **wait for DNS propagation**. In the meantime, use `johncheung.design` (without www) to access your site.

