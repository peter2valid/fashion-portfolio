# 🚀 Hope Portfolio - Deployment Guide

## ✅ Pre-Deployment Checklist

### Local Development Working
- [x] Development server runs successfully
- [x] All routes working (/, /admin, /admin/dashboard)
- [x] Social media links functional
- [x] Animations smooth
- [x] Responsive on all devices
- [x] Admin login working
- [x] Images loading correctly

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel?**
- Automatic HTTPS
- Global CDN
- Zero configuration
- Free tier available
- Perfect for React/Vite

**Steps:**

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Build the Project**
```bash
cd /home/peter/Downloads/hope-portfolio
npm run build
```

3. **Deploy**
```bash
vercel
```

4. **Follow Prompts:**
- Set up and deploy? **Y**
- Which scope? **Select your account**
- Link to existing project? **N**
- Project name? **hope-portfolio**
- Directory? **./dist**
- Override settings? **N**

5. **Production Deployment**
```bash
vercel --prod
```

**Your site will be live at:** `https://hope-portfolio.vercel.app`

---

### Option 2: Netlify

**Why Netlify?**
- Drag and drop deployment
- Form handling
- Continuous deployment
- Free tier with custom domain

**Steps:**

1. **Build the Project**
```bash
npm run build
```

2. **Option A: Netlify CLI**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

3. **Option B: Drag & Drop**
- Go to https://app.netlify.com/drop
- Drag the `dist` folder
- Done!

**Site Settings:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `18`

---

### Option 3: GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**
```json
{
  "homepage": "https://yourusername.github.io/hope-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

---

## 🔧 Environment Variables

### For Sanity Write Operations

Create `.env` file:
```env
VITE_SANITY_TOKEN=your_sanity_write_token_here
```

### Get Sanity Token:
1. Go to https://www.sanity.io/manage
2. Select your project (khc2znf3)
3. Go to API settings
4. Create new token with Editor permissions
5. Copy and paste into `.env`

### Configure on Deployment Platform:

**Vercel:**
```bash
vercel env add VITE_SANITY_TOKEN
```

**Netlify:**
- Site settings → Build & deploy → Environment
- Add: `VITE_SANITY_TOKEN`

---

## 🎨 Custom Domain Setup

### Vercel

1. Go to your project dashboard
2. Click "Domains"
3. Add your domain: `hopentinyari.com`
4. Follow DNS configuration instructions

**DNS Settings:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Netlify

1. Go to Domain settings
2. Add custom domain
3. Update DNS:

```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

---

## 🗄️ Sanity CMS Setup

### 1. Create Sanity Project (if not done)

```bash
npm create sanity@latest
```

Options:
- Project name: Hope Portfolio CMS
- Dataset: production
- Template: Clean project

### 2. Configure Schemas

Add schemas from `BUILD_COMPLETE.md` to your Sanity Studio.

### 3. Deploy Sanity Studio

```bash
cd your-sanity-project
sanity deploy
```

Your studio will be at: `https://hope-portfolio-cms.sanity.studio/`

### 4. Add Content

1. Open your Sanity Studio
2. Add projects, videos, gallery images, team members
3. Changes appear instantly on your site!

---

## 🔒 Security Enhancements

### For Production

1. **Update Admin Password**
   
   Edit `src/components/AdminLogin.jsx`:
   ```javascript
   const ADMIN_CREDENTIALS = {
     username: 'your_username',
     password: 'strong_password_here', // Use strong password
   };
   ```

2. **Add Backend Authentication** (Recommended)
   - Use Firebase Auth
   - Use Auth0
   - Build custom Node.js backend

3. **Protect Sanity Token**
   - Never commit `.env` to Git
   - Use environment variables on deployment platform
   - Rotate tokens regularly

4. **Add CORS Rules**
   
   In Sanity dashboard, set allowed origins to your domain only.

---

## 📊 Analytics Setup

### Google Analytics

1. Get tracking ID from https://analytics.google.com

2. Add to `index.html`:
```html
<head>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>
</head>
```

---

## 🚀 Performance Optimization

### Before Deployment

1. **Optimize Images**
```bash
# Install sharp for image optimization
npm install sharp
```

2. **Enable Compression**
   
   Already handled by Vite and deployment platforms.

3. **Check Bundle Size**
```bash
npm run build
# Check dist/ folder size
```

4. **Test Performance**
   - Use Lighthouse in Chrome DevTools
   - Aim for 90+ score

---

## ✅ Post-Deployment Checklist

After deploying, verify:

- [ ] Homepage loads correctly
- [ ] All images display
- [ ] Social media links work
- [ ] Video embeds work (YouTube/TikTok)
- [ ] Gallery lightbox functions
- [ ] Team member links work
- [ ] Admin login accessible
- [ ] Admin dashboard works
- [ ] Mobile responsive
- [ ] Navigation smooth
- [ ] Animations working
- [ ] Custom domain (if configured)
- [ ] HTTPS enabled
- [ ] Analytics tracking

---

## 🐛 Common Deployment Issues

### Issue: 404 on Refresh

**Solution:** Configure SPA redirects

**Vercel:** Create `vercel.json`
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Netlify:** Create `public/_redirects`
```
/*  /index.html  200
```

### Issue: Environment Variables Not Working

**Solution:**
- Ensure variables start with `VITE_`
- Rebuild after adding variables
- Check platform-specific syntax

### Issue: Images Not Loading

**Solution:**
- Verify images in `public/images/`
- Check image paths (use `/images/...` not `./images/...`)
- Ensure Sanity images have correct project ID

---

## 📱 Social Media Integration

### Share Buttons (Optional)

Add to components for easy sharing:

```javascript
const shareUrl = window.location.href;
const shareText = "Check out Hope Ntinyari's Portfolio";

// Twitter
https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}

// Facebook
https://www.facebook.com/sharer/sharer.php?u=${shareUrl}

// LinkedIn
https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}
```

---

## 📞 Support & Maintenance

### Regular Updates

1. **Update Dependencies** (Monthly)
```bash
npm outdated
npm update
```

2. **Security Patches**
```bash
npm audit
npm audit fix
```

3. **Backup Content**
   - Export Sanity data regularly
   - Keep local image backups

---

## 🎯 Next Steps After Deployment

1. **Add Content via Sanity**
   - Upload real projects
   - Add runway videos
   - Fill gallery

2. **SEO Optimization**
   - Add meta tags
   - Create sitemap
   - Submit to Google Search Console

3. **Connect Social Media**
   - Link from Instagram bio
   - Share on TikTok
   - Add to WhatsApp Status

4. **Monitor Performance**
   - Check Google Analytics
   - Review user behavior
   - Optimize based on data

---

## 🌟 Success!

Your portfolio is now live and accessible worldwide!

**Share your portfolio:**
- Instagram bio link
- TikTok profile
- Email signature
- Business cards
- Modeling agencies

---

**Need Help?**
- Check BUILD_COMPLETE.md for technical details
- Review README.md for features
- Contact via social media

---

**Built with ❤️ and ready to showcase your talent to the world!**

🚀 **Go live and shine!**

