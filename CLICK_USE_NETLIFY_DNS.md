# Click "Use Netlify DNS" Button

## What You're Seeing

The **"Use Netlify DNS"** button in the DNS Zones section means:
- ❌ Domain is currently using **External DNS** (NS1)
- ✅ You need to switch to **Netlify DNS**

## What to Do

### Step 1: Click "Use Netlify DNS" Button
1. **Click the teal/cyan "Use Netlify DNS" button** in the top right
2. Netlify will switch the domain to use Netlify DNS
3. This will give you the correct Netlify nameservers

### Step 2: Get the New Nameservers
After clicking "Use Netlify DNS":
1. Netlify will show you the **correct nameservers**
2. They should be: `ns1.netlify.com`, `ns2.netlify.com`, etc.
3. **NOT** the NS1 nameservers (`dns1.p03.nsone.net`, etc.)

### Step 3: Update Nameservers in Squarespace
1. **Go back to Squarespace Domains**
2. **Delete the current NS1 nameservers:**
   - `dns1.p03.nsone.net`
   - `dns2.p03.nsone.net`
   - `dns3.p03.nsone.net`
   - `dns4.p03.nsone.net`

3. **Add the NEW Netlify nameservers:**
   - `ns1.netlify.com`
   - `ns2.netlify.com`
   - (Add all that Netlify shows - usually 2-4)

4. **Click "UPDATE NAMESERVERS"** in Squarespace

### Step 4: Wait for Propagation
- Wait 1-24 hours for nameserver changes to propagate
- Netlify will automatically detect the change
- SSL certificate will auto-provision
- Domain will become "Active"

## Why This is Important

**Current situation:**
- Domain is using External DNS (NS1)
- Netlify can't fully manage the domain
- SSL certificate can't provision properly

**After switching:**
- Domain uses Netlify DNS
- Netlify fully manages DNS
- SSL certificate auto-provisions
- Everything works automatically

## Expected Result

After clicking "Use Netlify DNS":
1. Button will disappear or change
2. Domain status will show "Netlify DNS"
3. You'll see the correct Netlify nameservers
4. Update those in Squarespace
5. Wait for propagation
6. Everything will work!

---

**Action Required**: Click the "Use Netlify DNS" button in Netlify, then update the nameservers in Squarespace to the new Netlify nameservers it shows you.

