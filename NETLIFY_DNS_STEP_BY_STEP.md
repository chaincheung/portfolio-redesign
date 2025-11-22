# Step-by-Step Guide: Set Up Netlify DNS for Your Domain

## Complete Guide to Using Netlify DNS (Nameservers)

This guide walks you through using **Netlify DNS** - where Netlify manages all your DNS records instead of your domain provider.

---

## Overview: What is Netlify DNS?

**Netlify DNS** means:
- You change your domain's **nameservers** to point to Netlify
- Netlify manages all DNS records for your domain
- Easier to manage DNS in one place
- Good for root domains (e.g., `johncheung.design`)

**Alternative:** Keep DNS at your domain provider and add A/CNAME records (we'll cover both options)

---

## Part 1: Get Nameservers from Netlify (5 minutes)

### Step 1: Go to Netlify Domain Settings

1. **Open your browser** and go to [app.netlify.com](https://app.netlify.com)
2. **Sign in** to your Netlify account (top-right corner)
3. **Click on your site** in the dashboard list
   - This opens your site's settings
4. **Look at the left sidebar** - you'll see a menu
5. **Click on "Domain settings"** (or "Domain management")
   - It's usually under "Site configuration" or directly in the menu

### Step 2: Find Your Domain

1. **In Domain settings**, you'll see a list of domains:
   - Your Netlify domain (e.g., `your-site.netlify.app`)
   - Any custom domains you've added
2. **Find your custom domain** (the one showing "Pending DNS verification")
   - It might show as: `johncheung.design` or `portfolio.johncheung.design`
   - Status might say: "Pending DNS verification"
3. **Click on your domain** to view its details

### Step 3: View DNS Configuration Options

1. **After clicking your domain**, you'll see domain details
2. **Look for DNS configuration options**:
   - You might see tabs like: "DNS", "SSL", "HTTPS"
   - Click on **"DNS"** tab or **"DNS Configuration"**
3. **You'll see two options**:
   - **Option A**: Add DNS records (use your current DNS provider)
   - **Option B**: Use Netlify DNS (change nameservers) ← **This is what we want!**

### Step 4: Choose Netlify DNS

1. **Look for "Use Netlify DNS"** or **"Change to Netlify DNS"** button
   - It might be a button, link, or toggle
   - Usually labeled: "Set up Netlify DNS" or "Change to Netlify DNS"
2. **Click on it** - Netlify will show you nameservers

### Step 5: Copy Nameservers from Netlify

1. **Netlify will display nameservers** - you'll see something like:
   ```
   ns1.netlify.com
   ns2.netlify.com
   ```
   Or might show:
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```

2. **Copy these nameservers** - you'll need them!
   - Write them down
   - Or copy to a text editor/notes app
   - **Important:** Get the exact nameservers Netlify shows you (they might differ!)

3. **You'll see 2-4 nameservers** depending on Netlify's configuration
   - Copy ALL of them

**Example of what you'll see:**
```
Nameservers for johncheung.design:

1. ns1.netlify.com
2. ns2.netlify.com
```

**Or:**
```
Nameservers:
• dns1.p01.nsone.net
• dns2.p01.nsone.net
• dns3.p01.nsone.net
• dns4.p01.nsone.net
```

**Keep these nameservers handy** - you'll paste them into your domain provider next!

---

## Part 2: Change Nameservers at Your Domain Provider (15 minutes)

Now we need to tell your domain provider to use Netlify's nameservers instead of theirs.

### Step 1: Identify Your Domain Provider

**Where did you buy your domain?** Check your email or records.

Common providers:
- **GoDaddy** - godaddy.com
- **Namecheap** - namecheap.com
- **Google Domains** - domains.google.com
- **Cloudflare** - cloudflare.com
- **Name.com** - name.com
- **Hover** - hover.com
- **Bluehost** - bluehost.com
- **Others** - Check your purchase email

### Step 2: Log Into Your Domain Provider

1. **Go to your domain provider's website**
   - Example: godaddy.com, namecheap.com, etc.
2. **Click "Sign In"** (usually top-right)
3. **Enter your username/email and password**
4. **Click "Sign In"**

---

## Step-by-Step for Common Providers

### GoDaddy: Change Nameservers

#### Step 1: Access Domain Settings

1. **After signing in to GoDaddy**, you'll see your dashboard
2. **Look at the top menu** - find "My Products" or "Products"
3. **Click "My Products"** (or "Products")
4. **You'll see a list** - find "Domains" section
5. **Find your domain** in the list (e.g., `johncheung.design`)
6. **Click on your domain** - a dropdown menu appears
7. **Click "DNS"** from the dropdown
   - OR click "Manage DNS" button next to your domain

#### Step 2: Find Nameservers Section

1. **You'll see DNS Management page** with several sections:
   - Records
   - Nameservers
   - etc.
2. **Scroll down** or look for **"Nameservers"** section
   - It might be at the top or bottom of the page
   - Might be in a separate tab

#### Step 3: Change Nameservers

1. **Click on "Nameservers"** section or tab
2. **You'll see current nameservers** - probably GoDaddy's (like `ns1.domaincontrol.com`)
3. **Look for "Change"** button or **"Edit"** button - click it
4. **Select "Custom"** (not "Default")
   - You might see options like:
     - Default
     - Custom
     - I'll use my own nameservers
   - Select **"Custom"** or **"I'll use my own nameservers"**

#### Step 4: Enter Netlify Nameservers

1. **Nameserver input fields will appear** (usually 2-4 fields)
2. **Enter Netlify's nameservers** one by one:
   - **Nameserver 1**: Paste `ns1.netlify.com` (or what Netlify gave you)
   - **Nameserver 2**: Paste `ns2.netlify.com` (or what Netlify gave you)
   - **Nameserver 3**: (if provided) Paste `ns3.netlify.com`
   - **Nameserver 4**: (if provided) Paste `ns4.netlify.com`

3. **Make sure they match exactly** what Netlify showed you
4. **Don't include** `http://` or `https://` - just the nameserver address

#### Step 5: Save Changes

1. **Review the nameservers** - make sure they're correct
2. **Click "Save"** button (usually bottom of the form)
3. **Confirm the change** if prompted
   - GoDaddy might ask you to confirm
   - Click "Yes" or "Confirm"
4. **Wait for confirmation** - you'll see "Nameservers updated successfully"

#### Step 6: Verify Change

1. **After saving**, check the Nameservers section again
2. **You should see** Netlify's nameservers listed:
   - `ns1.netlify.com`
   - `ns2.netlify.com`
   - etc.
3. **If you still see GoDaddy's nameservers**, the change didn't save - try again

---

### Namecheap: Change Nameservers

#### Step 1: Access Domain Settings

1. **After signing in to Namecheap**, go to **"Domain List"** (left sidebar)
2. **Or click "My Account"** → **"Domain List"**
3. **Find your domain** in the list
4. **Click "Manage"** button next to your domain

#### Step 2: Find Nameservers Section

1. **Domain management page opens** with several tabs
2. **Click on "Nameservers"** tab
   - It's usually one of the tabs at the top

#### Step 3: Change to Custom Nameservers

1. **You'll see nameserver options**:
   - **Namecheap BasicDNS** (default)
   - **Custom DNS** ← **Select this!**
2. **Select "Custom DNS"** option
   - Radio button or dropdown - select "Custom DNS"

#### Step 4: Enter Netlify Nameservers

1. **Nameserver input fields appear** (usually 2 fields)
2. **Enter Netlify's nameservers**:
   - **First nameserver**: `ns1.netlify.com`
   - **Second nameserver**: `ns2.netlify.com`
   - **Third nameserver** (if field exists): Leave blank or enter third if Netlify provided it
   - **Fourth nameserver** (if field exists): Leave blank or enter fourth if Netlify provided it

3. **Make sure they're correct** - check against what Netlify showed you

#### Step 5: Save Changes

1. **Click the checkmark** (✓) button or **"Save"** button
   - Usually appears after entering nameservers
2. **Wait for confirmation** - Namecheap will save the changes
3. **You'll see** "Nameservers updated successfully" message

#### Step 6: Verify Change

1. **Refresh the page**
2. **Check the Nameservers tab** again
3. **You should see** Netlify's nameservers listed
4. **Status should say** "Custom DNS" instead of "Namecheap BasicDNS"

---

### Google Domains: Change Nameservers

#### Step 1: Access Domain Settings

1. **After signing in to Google Domains**, you'll see your dashboard
2. **Click on your domain** in the list
3. **Domain settings page opens**

#### Step 2: Find Nameservers Section

1. **Look at the left sidebar** - find **"DNS"** option
2. **Click "DNS"** - DNS management page opens
3. **Scroll down** to find **"Name servers"** section
   - It's usually near the bottom of the DNS page

#### Step 3: Edit Nameservers

1. **In the "Name servers" section**, you'll see current nameservers
   - Probably Google's nameservers (like `ns-cloud-d1.googledomains.com`)
2. **Click the pencil icon** (✏️) or **"Edit"** button
   - Usually next to "Name servers" heading

#### Step 4: Enter Netlify Nameservers

1. **Nameserver input fields appear**
2. **You'll see fields for nameservers** - usually 4 fields
3. **Clear existing nameservers** if any
4. **Enter Netlify's nameservers**:
   - **Name server 1**: `ns1.netlify.com`
   - **Name server 2**: `ns2.netlify.com`
   - **Name server 3**: Leave blank or enter if Netlify provided 3
   - **Name server 4**: Leave blank or enter if Netlify provided 4

5. **Double-check** they match what Netlify showed you exactly

#### Step 5: Save Changes

1. **Click "Save"** button at the bottom
2. **Google might ask you to confirm** - click "Confirm" or "Save"
3. **Wait for confirmation** - you'll see a success message

#### Step 6: Verify Change

1. **Refresh the page**
2. **Check "Name servers" section** again
3. **You should see** Netlify's nameservers listed
4. **Status should show** "Custom name servers" or similar

---

### Cloudflare: Change Nameservers

**Note:** If your domain is on Cloudflare, you might want to use Cloudflare DNS instead of Netlify DNS. But if you want to use Netlify DNS:

#### Step 1: Access Domain Settings

1. **After signing in to Cloudflare**, select your domain
2. **Domain overview page opens**

#### Step 2: Find Nameservers Section

1. **Look at the right sidebar** - find **"Nameservers"** section
   - Usually shows current nameservers
2. **Or go to** Domain settings → **"Overview"** tab
3. **Nameservers are usually displayed prominently** at the top

#### Step 3: Edit Nameservers

1. **You'll see current Cloudflare nameservers** (like `bella.ns.cloudflare.com`)
2. **Click "Change nameservers"** or **"Edit"** button
3. **Note:** Cloudflare manages DNS, so changing nameservers means leaving Cloudflare DNS

#### Step 4: Enter Netlify Nameservers

1. **Nameserver input fields appear**
2. **Enter Netlify's nameservers**:
   - Clear Cloudflare nameservers
   - Enter: `ns1.netlify.com`, `ns2.netlify.com`, etc.

#### Step 5: Save Changes

1. **Click "Save"** or **"Update nameservers"**
2. **Confirm** if prompted
3. **Wait for confirmation**

---

## Part 3: Wait for DNS Propagation (1-48 hours)

After changing nameservers, you need to wait for the changes to propagate worldwide.

### Step 1: Understand DNS Propagation

1. **DNS changes take time** to spread across the internet
2. **Can take anywhere from 5 minutes to 48 hours**
3. **Usually takes 1-2 hours** in most cases
4. **This is normal** - don't panic if it doesn't work immediately!

### Step 2: Check DNS Propagation (Optional)

You can check if your nameserver changes are propagating:

1. **Go to** [whatsmydns.net](https://www.whatsmydns.net)
2. **Enter your domain** (e.g., `johncheung.design`)
3. **Select "NS" (Nameserver)** from the dropdown
4. **Click "Search"**
5. **You'll see a world map** showing DNS servers around the world
6. **Green dots** = Netlify nameservers (good!)
7. **Red/orange dots** = Old nameservers (still propagating)

**Other tools:**
- [dnschecker.org](https://dnschecker.org) - Similar tool
- Enter domain → Select "NS" → Check propagation

### Step 3: What to Expect

1. **Immediately after changing nameservers:**
   - Your domain provider shows new nameservers
   - But internet hasn't updated yet

2. **After 1-2 hours:**
   - Most DNS servers worldwide have updated
   - Your site might start working

3. **After 24-48 hours:**
   - All DNS servers worldwide should be updated
   - Your site should definitely work

4. **During this time:**
   - Old DNS records might still work
   - New DNS records are propagating
   - Mixed results are normal

---

## Part 4: Verify in Netlify (Check Status)

After changing nameservers and waiting, check if Netlify recognizes the change.

### Step 1: Go Back to Netlify

1. **Go to** [app.netlify.com](https://app.netlify.com)
2. **Click on your site**
3. **Go to "Domain settings"** (left sidebar)

### Step 2: Check Domain Status

1. **Find your domain** in the list
2. **Look at the status** - it should say one of:
   - ✅ **"Active"** - Success! DNS is working
   - ✅ **"Verified"** - Success! DNS is working
   - ⏳ **"Pending DNS verification"** - Still waiting
   - ❌ **"DNS verification failed"** - Something wrong

### Step 3: If Status is "Active" or "Verified"

**Congratulations!** Your DNS is set up correctly!

- ✅ Domain is verified
- ✅ Site should be accessible via your custom domain
- ✅ SSL certificate will be issued automatically (takes a few minutes)
- ✅ HTTPS will be enabled

**Test your site:**
1. Visit your domain in a browser: `https://johncheung.design`
2. It should load your Netlify site!

### Step 4: If Status is Still "Pending"

1. **Check the time** - How long since you changed nameservers?
   - **Less than 1 hour**: Normal, keep waiting
   - **More than 2 hours**: Check nameservers are correct
   - **More than 24 hours**: Something might be wrong

2. **Double-check nameservers**:
   - Go back to your domain provider
   - Verify nameservers match exactly what Netlify showed
   - Make sure you saved the changes

3. **Check DNS propagation** (see Part 3, Step 2):
   - Use whatsmydns.net or dnschecker.org
   - See if Netlify nameservers are propagating

4. **Wait longer** if less than 24 hours - propagation takes time!

### Step 5: If Status is "DNS Verification Failed"

Something is wrong - troubleshoot:

1. **Check nameservers are correct**:
   - Go to domain provider
   - Verify they match Netlify exactly
   - Make sure no typos

2. **Check if nameservers changed**:
   - At domain provider, verify they show Netlify nameservers
   - If they still show old nameservers, the change didn't save

3. **Try refreshing** in Netlify:
   - Click "Retry verification" or "Refresh" button (if available)

4. **Contact support**:
   - Netlify support: support@netlify.com
   - Or domain provider support

---

## Part 5: Configure DNS Records in Netlify (If Needed)

After nameservers are changed and verified, you might need to configure DNS records in Netlify.

### Step 1: Go to Netlify DNS Settings

1. **In Netlify** → Your site → **Domain settings**
2. **Click on your domain**
3. **Go to "DNS"** tab or **"DNS Configuration"**

### Step 2: Check Existing DNS Records

1. **You'll see DNS records** Netlify has automatically created
2. **Usually includes**:
   - A record pointing to Netlify IPs
   - CNAME records
   - etc.

### Step 3: Add Custom DNS Records (If Needed)

If you need custom DNS records:

1. **Click "Add DNS record"** or **"Add record"** button
2. **Select record type**:
   - **A Record** - Points to IP address
   - **CNAME** - Points to another domain
   - **MX** - Email records
   - **TXT** - Text records
   - etc.

3. **Fill in record details**:
   - **Name**: `@` for root, or subdomain name
   - **Value**: IP address or domain
   - **TTL**: 3600 (or default)

4. **Save the record**

5. **DNS propagates quickly** with Netlify DNS (usually instant to a few minutes)

---

## Troubleshooting Common Issues

### Issue: "Nameservers didn't change at domain provider"

**Solution:**
- Make sure you clicked "Save" after entering nameservers
- Some providers require confirmation - check for confirmation emails
- Try logging out and back in to domain provider
- Contact domain provider support if change isn't saving

### Issue: "Still pending after 24+ hours"

**Solution:**
- Double-check nameservers match exactly (no typos)
- Verify change saved at domain provider
- Check DNS propagation tools (whatsmydns.net)
- Try "Retry verification" in Netlify
- Contact Netlify support

### Issue: "Site not loading after nameserver change"

**Solution:**
- Wait longer - DNS propagation can take time
- Clear browser cache
- Try incognito/private browsing mode
- Check DNS propagation status
- Verify site is deployed in Netlify
- Check Netlify domain status is "Active"

### Issue: "Lost email after changing nameservers"

**Solution:**
- If you had email set up before, you need to add MX records in Netlify
- Add MX records for your email provider in Netlify DNS
- Contact your email provider for correct MX record values

---

## Quick Reference Checklist

- [ ] Got nameservers from Netlify Domain settings
- [ ] Copied nameservers exactly (2-4 nameservers)
- [ ] Logged into domain provider
- [ ] Found Nameservers section
- [ ] Changed to Custom/Custom DNS option
- [ ] Entered Netlify nameservers in all fields
- [ ] Saved changes at domain provider
- [ ] Verified nameservers changed at provider
- [ ] Waited for DNS propagation (1-48 hours)
- [ ] Checked domain status in Netlify
- [ ] Status shows "Active" or "Verified" ✅

---

## Next Steps After DNS is Active

Once your domain shows "Active" in Netlify:

1. **SSL Certificate** - Netlify will automatically issue SSL certificate
2. **HTTPS Enabled** - Site will have HTTPS (takes a few minutes)
3. **Test Your Site** - Visit your custom domain in browser
4. **Update Links** - Update any hardcoded URLs in your React app
5. **Set as Primary** - In Netlify, set your custom domain as primary (if desired)

---

## Need Help?

If you get stuck:
1. Take screenshots of:
   - Netlify nameservers
   - Your domain provider's nameserver settings
2. Check Netlify docs: https://docs.netlify.com/domains-https/custom-domains/set-up-netlify-dns/
3. Contact Netlify support: support@netlify.com

