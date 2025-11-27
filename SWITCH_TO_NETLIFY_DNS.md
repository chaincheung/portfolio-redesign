# Switch to Netlify DNS to Fix Verification

## Current Problem
- **Nameservers**: Using NS1 (`dns1.p03.nsone.net`) - External DNS
- **Netlify verification**: Fails because it expects Netlify DNS or properly configured external DNS
- **Result**: Can't provision SSL certificate

## Solution: Switch to Netlify DNS

### Step 1: Get Netlify Nameservers
1. Go to **Netlify Dashboard** → Your site
2. Go to **Domain settings**
3. Click on `johncheung.design`
4. Look for **"Nameservers"** or **"DNS"** section
5. You should see nameservers like:
   - `ns1.netlify.com`
   - `ns2.netlify.com`
   - (Netlify might have 2-4 nameservers)

**Or check in Netlify Domain settings:**
- Look for "Use Netlify DNS" option
- It will show you the nameservers to use

### Step 2: Update Nameservers in Squarespace Domains
Since your domain is registered with Squarespace:

1. **Log into Squarespace Domains:**
   - Go to: https://domains.squarespace.com
   - Or: Squarespace account → Domains

2. **Find your domain:**
   - Click on `johncheung.design`

3. **Go to DNS/Nameserver settings:**
   - Look for **"Nameservers"** or **"DNS Settings"**
   - Click **"Edit"** or **"Change"**

4. **Change to Netlify nameservers:**
   - Select **"Custom nameservers"** or **"Use custom nameservers"**
   - Enter Netlify's nameservers (from Step 1):
     - `ns1.netlify.com`
     - `ns2.netlify.com`
     - (Add all nameservers Netlify provides)
   - **Save**

5. **Wait for propagation:**
   - Nameserver changes take 1-24 hours
   - Usually 1-2 hours

### Step 3: Verify Nameservers Changed
After 1-2 hours, check:
```bash
dig johncheung.design NS +short
```

Should return Netlify nameservers (not NS1):
- `ns1.netlify.com`
- `ns2.netlify.com`
- etc.

### Step 4: Netlify Will Auto-Configure
Once nameservers propagate:
- Netlify will automatically detect the change
- Netlify will automatically configure DNS records
- Netlify will automatically provision SSL certificate
- Domain status will change to "Active"

### Step 5: Verify in Netlify
1. Go to Netlify → Domain settings
2. Click on `johncheung.design`
3. Status should change to:
   - **"Netlify DNS"** (instead of "External DNS")
   - **"Active"** with green checkmark
   - SSL certificate should auto-provision

## Alternative: Keep External DNS (NS1)

If you prefer to keep NS1 DNS, you need to configure DNS records correctly:

### Configure A Records in NS1
1. Log into NS1 dashboard
2. Find `johncheung.design` zone
3. Add/Update A records:
   - `@` → `75.2.60.5`
   - `@` → `75.2.60.6`
   - `@` → `75.2.60.7`
   - `@` → `75.2.60.8`

4. Or add CNAME:
   - `@` → `jcux.netlify.app`

5. Wait for propagation
6. Retry certificate renewal in Netlify

**But switching to Netlify DNS is easier** - Netlify manages everything automatically.

## Why Switch to Netlify DNS?

**Benefits:**
- ✅ Netlify automatically manages DNS
- ✅ Automatic SSL certificate provisioning
- ✅ Easier to verify and maintain
- ✅ No manual DNS record configuration needed
- ✅ Netlify can verify domain ownership automatically

**Downsides:**
- ⏳ Takes 1-24 hours for nameserver changes to propagate
- 🔄 Need to update nameservers in domain registrar

## Timeline

**After changing nameservers:**
- **1-2 hours**: Nameservers start propagating
- **2-4 hours**: Most DNS servers updated
- **4-24 hours**: Full global propagation
- **Once propagated**: Netlify auto-configures everything (5-10 minutes)

**Total time**: Usually 2-4 hours, maximum 24-48 hours

## Check Progress

### Check Nameserver Propagation
```bash
dig johncheung.design NS +short
```

When it shows Netlify nameservers, propagation is complete.

### Check in Netlify
1. Go to Domain settings
2. Check if status changed to "Netlify DNS"
3. Check if SSL certificate status changed

---

**Recommended Action**: Switch to Netlify DNS by updating nameservers in Squarespace Domains. This is the easiest solution and will fix the verification issue automatically.

