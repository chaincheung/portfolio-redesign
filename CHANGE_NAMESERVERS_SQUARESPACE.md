# Change Nameservers to Netlify in Squarespace

## Current Status
- **Current nameservers**: NS1 (dns1.p03.nsone.net, etc.)
- **Need to change to**: Netlify nameservers

## Step 1: Get Netlify Nameservers

You need to get the exact Netlify nameservers from your Netlify dashboard:

1. **Go to Netlify Dashboard** → Your site
2. **Domain settings** → Click on `johncheung.design`
3. **Look for one of these:**
   - **"Nameservers"** section (will list them)
   - **"Use Netlify DNS"** option (click it to see nameservers)
   - **"DNS configuration"** section
   - Or look for text like: "To use Netlify DNS, point your nameservers to:"

**Netlify nameservers are typically:**
- `ns1.netlify.com`
- `ns2.netlify.com`
- Sometimes 3-4 nameservers total

**If you can't find them in Domain settings:**
- Try clicking "Use Netlify DNS" or "Switch to Netlify DNS"
- Or check the DNS setup navigator in Netlify
- Or contact Netlify support

## Step 2: Change Nameservers in Squarespace

In the Squarespace interface you're looking at:

### Option A: Delete and Add New Nameservers

1. **Delete the current NS1 nameservers:**
   - Click the red trash can icon next to each nameserver
   - Delete all 4: `dns1.p03.nsone.net`, `dns2.p03.nsone.net`, `dns3.p03.nsone.net`, `dns4.p03.nsone.net`

2. **Add Netlify nameservers:**
   - Look for an **"Add nameserver"** or **"+"** button
   - Add each Netlify nameserver one by one:
     - `ns1.netlify.com`
     - `ns2.netlify.com`
     - (Add all that Netlify provides - usually 2-4)

3. **Click "UPDATE NAMESERVERS"** button at the bottom
4. **Confirm the change**

### Option B: If There's an "Add Nameserver" Field

1. **Delete all current NS1 nameservers** (red trash icons)
2. **Type or paste Netlify nameservers** in the add field:
   - `ns1.netlify.com`
   - `ns2.netlify.com`
   - (Add all provided by Netlify)
3. **Click "UPDATE NAMESERVERS"**

## Step 3: Verify the Change

After clicking "UPDATE NAMESERVERS":
1. **Squarespace should confirm** the change
2. **You might receive an email** confirmation
3. **Wait 5-10 minutes**, then check:
   ```bash
   dig johncheung.design NS +short
   ```
   Should start showing Netlify nameservers (though full propagation takes 1-24 hours)

## Important Notes

### Don't Use "USE SQUARESPACE NAMESERVERS" Button
- That button sets nameservers to Squarespace's
- We need Netlify's nameservers instead
- Ignore that button

### You Need at Least 2 Nameservers
- Netlify typically provides 2-4 nameservers
- Add all of them that Netlify gives you
- Squarespace requires at least 2

### After Changing Nameservers
- **Wait 1-24 hours** for propagation
- Netlify will automatically detect the change
- Netlify will configure DNS automatically
- SSL certificate will auto-provision
- Domain will become "Active" in Netlify

## What Netlify Nameservers Look Like

They should be something like:
- `ns1.netlify.com`
- `ns2.netlify.com`
- `ns3.netlify.com` (if provided)
- `ns4.netlify.com` (if provided)

**NOT:**
- `dns1.p03.nsone.net` (current - NS1)
- `squarespace.com` nameservers
- Any other provider

## Timeline After Change

- **Immediate**: Squarespace processes the change (5-15 minutes)
- **30 min - 2 hours**: Some DNS servers start updating
- **2-4 hours**: Most DNS servers updated
- **4-24 hours**: Full global propagation
- **After propagation**: Netlify auto-configures (5-10 minutes)

## If You Can't Find Netlify Nameservers

**In Netlify Dashboard:**
1. Go to **Domain settings** → `johncheung.design`
2. Look for **"DNS"** or **"Nameservers"** tab/section
3. Or click **"Use Netlify DNS"** - it will show nameservers
4. Or use **"DNS setup navigator"** - it will guide you

**If still can't find:**
- Contact Netlify support
- Or check Netlify documentation
- The nameservers are definitely available in Domain settings

---

**Action Required**: 
1. Get Netlify nameservers from Netlify Domain settings
2. Delete all NS1 nameservers in Squarespace
3. Add Netlify nameservers
4. Click "UPDATE NAMESERVERS"
5. Wait for propagation (1-24 hours)

Once nameservers are changed and propagated, everything will work automatically!

