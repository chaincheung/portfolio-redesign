# Step-by-Step Guide: Linking React Portfolio from Webflow

## Detailed Instructions for Adding Your React Portfolio to Your Webflow Site

---

## Prerequisites
✅ Your React app is deployed (on Netlify, Vercel, etc.)
✅ You have the URL to your React app (e.g., `your-portfolio.netlify.app` or `portfolio.johncheung.design`)
✅ You have access to edit your Webflow project

---

## Method 1: Simple Button/Link Redirect (Recommended)

This method adds a button or text link on your Webflow page that redirects users to your React portfolio.

### Step 1: Open Your Webflow Project

1. Go to [webflow.com](https://webflow.com)
2. **Sign in** to your account (top-right corner)
3. Click on your **Dashboard** (or your project name if you're already in the dashboard)
4. **Find your project** in the list of projects
5. Click on the project to **open it in the Webflow Designer**

---

### Step 2: Navigate to the Page Where You Want to Add the Portfolio Link

1. Look at the **left sidebar** - you'll see a **Pages panel**
2. In the Pages panel, you'll see a list of all pages in your site:
   - Home
   - About
   - Contact
   - etc.
3. **Click on the page** where you want users to access the portfolio
   - Common choices: **Home** page, **Work** page, or **Portfolio** page
   - For this example, we'll use the **Home** page

---

### Step 3: Choose Where to Place the Link/Button

You have several options for placement:

**Option A: Add to Navigation Menu**
- If you want it in your site's navigation (header)
- Users can click from any page

**Option B: Add a Hero Section Button**
- If you have a hero section on your home page
- Large, prominent button

**Option C: Add a Section Button**
- In a dedicated "Work" or "Portfolio" section
- Standalone section with a button

**Option D: Add to Footer**
- In the site footer
- Available on all pages

Let's start with **Option A: Navigation Menu** (most common):

---

### Step 4: Add Portfolio Link to Navigation Menu

#### Part A: Find Your Navigation Component

1. Look at the **top of your page** - you should see your navigation bar (header)
2. **Click on the navigation bar** to select it
   - You might see it highlighted with a blue outline
   - In the left sidebar, you'll see "Navbar" or "Nav Menu" selected

#### Part B: Add a New Nav Link

1. Inside the navigation bar, look for existing nav links (Home, About, Contact, etc.)
2. **Right-click** on an existing nav link, OR
3. Click the **"+" (Add Element)** button in the top-left toolbar
4. From the dropdown, select **"Nav Link"**
   - This creates a new navigation link element

#### Part C: Edit the Nav Link Text

1. **Click on the new nav link** you just created
2. You'll see it highlighted with a blue outline
3. In the **right sidebar**, look for the **"Settings"** panel (gear icon) or **"Text"** panel
4. Find the text field showing the link text (it might say "Link" or "New Link")
5. **Double-click the text** on the canvas, OR
6. In the **right sidebar**, find the **text input field** and type:
   - `Portfolio` or `My Work` or `View Portfolio`
   - Press **Enter** or click outside to save

#### Part D: Set the Link URL (Redirect to React App)

1. With the nav link still selected, look at the **right sidebar**
2. Find the **"Element Settings"** panel (usually shows when an element is selected)
3. Look for **"Link Settings"** or **"Element Settings"** section
4. Find the field that says **"Link"** or **"URL"** or **"Href"**
5. **Click on this field** to edit it
6. In the **dropdown or input field**, you'll see options:
   - **Pages** (to link to another Webflow page)
   - **Sections** (to link to a section on the same page)
   - **External Link** or **Custom URL** ← **SELECT THIS**
7. **Click "External Link"** or **"Custom URL"** option
8. A text field will appear - **paste your React app URL**:
   - Example: `https://your-portfolio.netlify.app`
   - Example: `https://portfolio.johncheung.design`
   - Make sure to include `https://` at the beginning
9. Press **Enter** or click outside to save

#### Part E: Configure Link Behavior (Optional but Recommended)

1. With the link still selected, in the **right sidebar**, find **"Link Settings"**
2. Look for **"Open in New Tab"** checkbox
3. **Check this box** if you want the portfolio to open in a new tab
   - Recommended: **YES** - keeps users on your Webflow site in the original tab
   - Users can easily come back to your main site
4. If you leave it unchecked, it will navigate away from your Webflow site

#### Part F: Style the Nav Link (Optional)

1. With the nav link selected, look at the **right sidebar** for **"Style"** panel
2. You can customize:
   - **Font** - make it match your other nav links
   - **Font size** - usually same size as other nav links
   - **Color** - match your site's color scheme
   - **Spacing** - add margin if needed
3. **Compare with other nav links** - it should look consistent
4. Click on another nav link to see its styles, then apply similar styles to your new link

#### Part G: Position the Nav Link

1. **Drag the nav link** to position it in your navigation bar
2. Common positions:
   - Between "About" and "Contact"
   - After "Contact" (last item)
   - Before "Contact" (second to last)
3. Make sure it's **aligned** with other nav links
4. Check on **mobile view** (see Step 9 below)

---

### Step 5: Preview Your Changes

1. Click the **"Preview"** button in the **top-right corner** of Webflow
   - It's usually next to the "Publish" button
   - Or press **"P"** on your keyboard
2. Your site will open in a **new browser tab** in preview mode
3. **Test the portfolio link**:
   - Hover over the "Portfolio" link - you should see your React app URL in the bottom-left of the browser
   - Click the link - it should redirect to your React portfolio
   - If you checked "Open in New Tab", it should open in a new tab
4. **Navigate around** - make sure the link is visible and works correctly
5. Close the preview tab when done

---

### Step 6: Check Mobile/Responsive View

1. In Webflow Designer, look at the **top-center toolbar**
2. You'll see device icons:
   - 📱 **Mobile** (usually 479px and below)
   - 📱 **Tablet** (usually 768px and below)
   - 💻 **Desktop** (usually 1024px and above)
3. **Click the Mobile icon** to switch to mobile view
4. Check that your **navigation menu** still shows the Portfolio link
   - It might be in a hamburger menu (☰) on mobile
   - Click the hamburger menu to see if Portfolio link is there
5. **Test the link on mobile view** too
6. **Switch back to Desktop view** when done (click the Desktop icon)

---

### Step 7: Publish Your Changes

1. Once you're happy with the link:
   - **Click the "Publish" button** in the top-right corner
   - Or press **"Ctrl+Shift+P"** (Windows) or **"Cmd+Shift+P"** (Mac)
2. A popup will appear - **choose where to publish**:
   - **Webflow Hosting** (if you're using Webflow's hosting)
   - **Custom Domain** (if you have your own domain)
   - **Staging** (if you want to test first)
3. Click **"Publish"** or **"Publish to Staging"**
4. Wait for the publish to complete
5. **Visit your live site** and test the Portfolio link one more time

---

## Method 2: Add Portfolio Link in Hero Section

If you want a large, prominent button in your hero section:

### Step 1: Navigate to Your Home Page Hero Section

1. Open your Webflow project
2. Go to the **Home** page (or the page with your hero section)
3. **Scroll to the top** - you should see your hero section
4. **Click on the hero section** to select it

### Step 2: Add a Button Element

1. Click the **"+" (Add Element)** button in the top-left toolbar
2. From the dropdown, select **"Button"**
   - This adds a button to your page
   - It might be placed somewhere random - we'll position it next

### Step 3: Position the Button

1. **Click and drag the button** to where you want it in the hero section
2. Common positions:
   - Below your hero headline
   - Next to another button
   - Centered below the hero text

### Step 4: Edit Button Text

1. **Double-click the button text** on the canvas
2. Or select the button and edit the text in the right sidebar
3. Type: **"View My Work"** or **"See My Portfolio"** or **"Explore Portfolio"**

### Step 5: Link Button to React App

1. With the button selected, look at the **right sidebar**
2. Find **"Button Settings"** or **"Element Settings"**
3. Look for **"Link"** or **"URL"** field
4. Click on it and select **"External Link"** or **"Custom URL"**
5. **Paste your React app URL**: `https://your-portfolio.netlify.app`
6. Optionally check **"Open in New Tab"**

### Step 6: Style the Button

1. With the button selected, use the **right sidebar Style panel** to customize:
   - **Background color**
   - **Text color**
   - **Font size**
   - **Padding**
   - **Border radius** (rounded corners)
   - **Hover effects**
2. Make it match your site's design system

---

## Method 3: Embed React App in Webflow Page (via iframe)

If you want your React portfolio embedded directly in a Webflow page:

### Step 1: Create a New Page or Navigate to Existing Page

1. In the **Pages panel** (left sidebar), right-click and select **"Add New Page"**
2. Name it **"Portfolio"** or **"My Work"**
3. OR use an existing page

### Step 2: Add Embed Element

1. On the page, click **"+" (Add Element)** in the top-left toolbar
2. Scroll down and find **"Embed"** or **"HTML Embed"**
3. **Click on "Embed"** to add it to your page

### Step 3: Resize the Embed Element

1. **Click on the embed element** you just added
2. You'll see resize handles (small squares on the edges)
3. **Drag the corners** to make it fill the page:
   - Drag to full width (left edge to right edge)
   - Drag to full height (or set a specific height)

### Step 4: Add iframe Code

1. **Double-click the embed element** OR
2. Click on it and look at the **right sidebar** for **"Embed Settings"**
3. A code editor window will appear
4. **Paste this code** (replace with your React app URL):

```html
<iframe 
  src="https://your-portfolio.netlify.app" 
  width="100%" 
  height="100vh" 
  frameborder="0"
  style="min-height: 100vh; border: none; display: block;">
</iframe>
```

5. **Replace `https://your-portfolio.netlify.app`** with your actual React app URL
6. **Click outside** or press **"Ctrl+Enter"** to save

### Step 5: Configure iframe Settings

1. With the embed element selected, check the **right sidebar**
2. Make sure:
   - **Width**: 100%
   - **Height**: Auto or 100vh (viewport height)
   - The element spans the full page

### Step 6: Test and Publish

1. **Preview** your page (click Preview button)
2. The React app should appear embedded in the Webflow page
3. Test navigation within the embedded app
4. **Publish** when ready

---

## Method 4: Add Portfolio Link in Footer

### Step 1: Find Your Footer

1. Scroll to the **bottom of any page**
2. You should see your footer section
3. **Click on the footer** to select it

### Step 2: Add a Text Link

1. Click **"+" (Add Element)**
2. Select **"Text Link"** or **"Link Block"**
3. Position it in your footer (usually with other footer links)

### Step 3: Edit and Link

1. **Double-click the text** and type: "Portfolio" or "My Work"
2. **Select the text link**
3. In **right sidebar**, find **"Link Settings"**
4. Click **"External Link"** and paste your React app URL
5. **Style it** to match other footer links

---

## Troubleshooting

### Link Doesn't Work
- ✅ Check that you pasted the full URL with `https://`
- ✅ Test the React app URL directly in browser first
- ✅ Make sure you selected "External Link" not "Pages"

### Link Opens in Same Tab (Want New Tab)
- ✅ Select the link
- ✅ In right sidebar, find "Link Settings"
- ✅ Check "Open in New Tab" checkbox

### Link Styling Doesn't Match
- ✅ Click on another nav link
- ✅ In Style panel, note the font, size, color
- ✅ Apply same styles to your Portfolio link

### Mobile Menu Doesn't Show Link
- ✅ Switch to Mobile view (top toolbar)
- ✅ Click the hamburger menu icon
- ✅ Check if Portfolio link is in the mobile menu
- ✅ If not, make sure the link is inside the nav menu component

---

## Next Steps After Adding Link

1. ✅ **Test on live site** - Visit your published site and test the link
2. ✅ **Test on mobile** - Use your phone to visit the site and test
3. ✅ **Test on different browsers** - Chrome, Safari, Firefox
4. ✅ **Add to multiple pages** - Consider adding Portfolio link to:
   - Navigation (header)
   - Footer
   - Home page CTA section
5. ✅ **Monitor analytics** - Track how many users click the Portfolio link

---

## Pro Tips

- **Consistency**: Make sure Portfolio link styling matches other nav links
- **Accessibility**: Add alt text if using an icon, ensure good contrast
- **Mobile-first**: Always test on mobile - many users will be on mobile
- **Speed**: Your React app should load fast - optimize if needed
- **SEO**: Consider adding the Portfolio page to your sitemap

---

## Need Help?

If you get stuck:
- Webflow University: https://university.webflow.com
- Webflow Community: https://forum.webflow.com
- Webflow Support: Check your dashboard for support options

