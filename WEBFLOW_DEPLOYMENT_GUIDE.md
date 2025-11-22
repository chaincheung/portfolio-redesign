# Webflow Deployment Guide for React Portfolio Redesign

## Overview
Since Webflow doesn't natively support React applications, you have several options to deploy your React redesign. Choose the approach that best fits your needs.

---

## Option 1: Host React Separately + Link from Webflow (Recommended)

This approach keeps your React app on its own domain/subdomain while linking from your Webflow site.

### Steps:

#### 1. Build Your React App
```bash
cd /Users/johncheung/Documents/portfolio_redesign
npm install
npm run build
```

This creates optimized static files in the `build/` folder.

#### 2. Deploy to Netlify or Vercel

**Netlify:**
1. Go to [netlify.com](https://netlify.com)
2. Sign up/login
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub/GitLab repo (or drag & drop the `build/` folder)
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Your site will be live at `your-site.netlify.app`
7. Add a custom domain if desired

**Vercel:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click "New Project"
4. Import your repository
5. Framework preset: Create React App
6. Build settings:
   - Build command: `npm run build`
   - Output directory: `build`
7. Deploy!

#### 3. Link from Webflow

In your Webflow project:
1. Go to the page where you want the portfolio to appear
2. Add a link/button that redirects to your React app URL
3. Or use Webflow's **Custom Code** embed:

```html
<!-- Add to page settings → Custom Code → <head> -->
<script>
  // Redirect to React portfolio
  window.location.href = "https://your-react-app.netlify.app";
</script>
```

Or create a dedicated subdomain:
- Webflow: `www.johncheung.design` (main site)
- React app: `portfolio.johncheung.design` (portfolio)

---

## Option 2: Embed React App in Webflow via iframe

Embed your React app directly in a Webflow page.

### Steps:

1. **Deploy React app** (same as Option 1, steps 1-2)
2. **In Webflow:**
   - Go to your page
   - Add an **Embed** element (from the add panel)
   - Paste this code:

```html
<iframe 
  src="https://your-react-app.netlify.app" 
  width="100%" 
  height="100vh" 
  frameborder="0"
  style="min-height: 100vh; border: none;">
</iframe>
```

**Pros:**
- Everything in one place
- Easy to embed

**Cons:**
- SEO limitations
- URL doesn't change when navigating
- Slightly slower performance

---

## Option 3: Rebuild in Webflow (Full Rebuild)

If you want everything native in Webflow, you'd need to rebuild using Webflow's visual tools.

### Steps:

1. **Create new Webflow project** for the portfolio pages
2. **Copy the design structure:**
   - Hero section
   - Portfolio sections
   - Project detail pages
   - Contact form

3. **Use Webflow CMS Collections** for projects:
   - Create "Projects" collection with fields:
     - Title, Subtitle, Category
     - Hero Image
     - Description
     - Sections (rich text or custom fields)
   
4. **Benefits:**
   - Fully integrated with Webflow
   - Easy content management
   - Better CMS features
   - Native animations

5. **Drawbacks:**
   - Time consuming (rebuild everything)
   - Lose React component structure
   - Need to recreate all interactions

---

## Option 4: Hybrid Approach

Keep Webflow for your main site, host React portfolio separately.

### Structure:
```
www.johncheung.design (Webflow)
├── /about
├── /contact
└── Link to → portfolio.johncheung.design (React)
```

### Steps:

1. **Set up subdomain** in your DNS:
   - Add CNAME record: `portfolio` → `your-netlify-app.netlify.app`
   
2. **In Netlify/Vercel:**
   - Add custom domain: `portfolio.johncheung.design`

3. **Update React routing** to work with subdomain:
   - Already configured with `_redirects` for Netlify ✅
   - Already configured with `vercel.json` for Vercel ✅

4. **Style consistency:**
   - Match colors, fonts, and styling between Webflow and React
   - Consider creating a shared design system

---

## Recommended: Option 1 or 4 (Hybrid)

### Why?
- ✅ Keeps your React codebase intact
- ✅ Easy to update and deploy
- ✅ Best performance
- ✅ Full React functionality
- ✅ Can use custom domain

---

## Quick Start Checklist

- [ ] Build React app: `npm run build`
- [ ] Deploy to Netlify or Vercel
- [ ] Test the deployed React app
- [ ] Set up custom domain (if desired)
- [ ] Update Webflow site with links to React app
- [ ] Test all links and navigation
- [ ] Update any hardcoded URLs in React app
- [ ] Test on mobile devices

---

## Environment Variables (if needed)

If you add contact form email service later, create `.env` file:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Add to `.gitignore`:
```
.env
.env.local
.env.production
```

---

## Notes

- Your `_redirects` file is already set up for SPA routing ✅
- Your `vercel.json` is already configured ✅
- Build output goes to `build/` folder ✅
- Make sure all image paths use `/images/...` (absolute from public folder)

---

## Questions to Consider

1. Do you want the portfolio integrated into your main Webflow site or separate?
2. Do you need Webflow CMS features for managing projects?
3. How often will you update the portfolio content?
4. Do you prefer maintaining React code or rebuilding in Webflow?

---

## Next Steps

Once deployed, you can:
- Update Webflow navigation to link to React portfolio
- Add analytics tracking to React app
- Set up form handling for contact form (EmailJS, Formspree, etc.)
- Optimize images and assets
- Add meta tags for SEO

