# 🧪 Testing Guide - Local Gallery & Video Sections

## Quick Start

```bash
cd /home/peter/Desktop/Final\ product\ of\ fushion/hope-portfolio
npm run dev
```

Then open your browser to: `http://localhost:5173`

---

## ✅ Test Checklist

### 1. Gallery Section (Scroll to #gallery)

**Visual Tests:**
- [ ] Section title "Gallery" displays in red with starbursts on both sides
- [ ] Subtitle appears below: "A visual journey through fashion and elegance"
- [ ] Grid shows 18 images in responsive layout:
  - Desktop: 3 columns
  - Tablet: 2 columns  
  - Mobile: 1 column
- [ ] Each image has proper aspect ratio (3:4 portrait)
- [ ] Background gradient from cream to white

**Animation Tests:**
- [ ] Images fade in one by one (stagger effect) on scroll
- [ ] Hover on any image:
  - Image zooms in smoothly
  - Red glow shadow appears
  - "View Image" text fades in
  - Red border appears
- [ ] Animations are smooth (no lag)

**Lightbox Tests:**
- [ ] Click any image → opens fullscreen lightbox
- [ ] Image displays centered with dark background
- [ ] Counter shows "X / 18" at bottom
- [ ] Navigation arrows visible on left/right
- [ ] Close button (×) visible at top-right
- [ ] Click arrows → navigates between images
- [ ] Press → key → goes to next image
- [ ] Press ← key → goes to previous image
- [ ] Press Escape → closes lightbox
- [ ] Click background → closes lightbox
- [ ] Image transition is smooth with spring animation

---

### 2. Video Section (Scroll to #videos)

**Visual Tests:**
- [ ] Section title "Watch Hope in Action" displays in red with starbursts
- [ ] Subtitle appears: "Behind the scenes and runway moments"
- [ ] Grid shows video cards in responsive layout:
  - Desktop: 3 columns
  - Tablet: 2 columns
  - Mobile: 1 column
- [ ] Each video card has:
  - Thumbnail or gradient background
  - Play button in center (white circle with red icon)
  - Title overlay at bottom
  - Description text
- [ ] White background for section

**Animation Tests:**
- [ ] Video cards fade in one by one (stagger effect)
- [ ] Hover on any video card:
  - Card scales up slightly
  - Red shadow glow appears
  - Play button scales up
  - Darker overlay appears
- [ ] Play button has smooth pulse/hover animation

**Interaction Tests:**
- [ ] Click play button → video loads and plays inline
- [ ] Close button (×) appears when video is playing
- [ ] Click close button → stops video and returns to thumbnail
- [ ] Video embeds work (YouTube/TikTok)
- [ ] Multiple videos can be played

**Call-to-Action Tests:**
- [ ] Social buttons appear below videos:
  - "Follow on TikTok" (black background)
  - "Follow on Instagram" (gradient purple-pink)
- [ ] Hover buttons → scale up slightly
- [ ] Click buttons → opens correct social media links in new tab

---

### 3. Responsive Tests

**Desktop (>1024px):**
- [ ] Gallery: 3 columns, spacious layout
- [ ] Videos: 3 columns
- [ ] Lightbox arrows far from edges
- [ ] Text sizes are large and readable

**Tablet (768px - 1024px):**
- [ ] Gallery: 2 columns
- [ ] Videos: 2 columns
- [ ] Layout still comfortable
- [ ] Text sizes medium

**Mobile (<768px):**
- [ ] Gallery: 1 column
- [ ] Videos: 1 column
- [ ] Images fill width appropriately
- [ ] Text sizes smaller but readable
- [ ] Touch interactions work smoothly
- [ ] Lightbox arrows accessible

---

### 4. Performance Tests

- [ ] Page loads quickly (< 3 seconds)
- [ ] Images lazy load (don't all load at once)
- [ ] Scroll is smooth
- [ ] Animations don't cause lag
- [ ] No console errors in DevTools (F12)
- [ ] No missing images (check for broken image icons)

---

### 5. Integration Tests

**Navigation:**
- [ ] Navbar "Gallery" link scrolls to gallery section
- [ ] Navbar "Videos" link scrolls to video section
- [ ] Footer "Gallery" link works
- [ ] Smooth scroll behavior

**Between Sections:**
- [ ] Gallery section appears after Projects
- [ ] Video section appears before Gallery
- [ ] Thank You section appears after Gallery
- [ ] No layout breaks between sections
- [ ] Consistent spacing throughout

---

## 🐛 Common Issues & Fixes

### Issue: Images not loading
**Fix:** 
- Check that images exist in `/public/images/Gallery/1.jpg` through `18.jpg`
- Check browser console for 404 errors
- Ensure image file names are exactly `1.jpg`, `2.jpg`, etc. (lowercase)

### Issue: Videos not playing
**Fix:**
- Update video IDs in `VideoGallery.jsx`
- Check that YouTube/TikTok URLs are correct
- Test with known working video IDs first

### Issue: Animations laggy
**Fix:**
- Check CPU usage
- Reduce number of simultaneous animations
- Enable hardware acceleration in browser

### Issue: Lightbox not opening
**Fix:**
- Check browser console for JavaScript errors
- Ensure Framer Motion is installed: `npm install framer-motion`
- Clear browser cache

---

## 📊 Expected Results

✅ **Gallery Section:**
- 18 images displayed in responsive grid
- Smooth stagger entrance animation
- Interactive hover effects
- Fully functional lightbox with keyboard navigation
- No Sanity dependency (100% local)

✅ **Video Section:**
- Video cards with play functionality
- Smooth animations on scroll and hover
- Working video embeds (YouTube/TikTok)
- Social media call-to-action buttons
- No Sanity dependency (100% local)

✅ **Overall:**
- Fast loading times
- Smooth animations
- Professional appearance
- Mobile-friendly
- No console errors

---

## 🎬 Demo Flow

1. **Load Homepage** → See Hero section
2. **Scroll down** → Pass through About, Vision, Mission, Projects
3. **Reach Videos** → Watch cards fade in with stagger
4. **Hover a video** → See scale + red shadow
5. **Click play** → Video plays inline
6. **Close video** → Returns to thumbnail
7. **Scroll to Gallery** → See images fade in
8. **Hover image** → See zoom + red glow + "View Image"
9. **Click image** → Opens lightbox
10. **Use arrows** → Navigate between images
11. **Press Escape** → Closes lightbox
12. **Scroll to Thank You** → See elegant closing section

---

## 🚨 Critical Paths to Test

1. **Image Click Flow:**
   - Click image → Lightbox opens → Navigate → Close
   
2. **Video Play Flow:**
   - Click play → Video loads → Watch → Close

3. **Mobile Experience:**
   - Open on mobile → Scroll through all sections → Test touch interactions

4. **Performance:**
   - Hard refresh (Ctrl+Shift+R) → Monitor load time

---

**If all checkboxes pass:** ✅ Gallery & Video sections are working perfectly!

**If any fail:** Check console errors and refer to "Common Issues & Fixes" above.

---

Ready to test? Run `npm run dev` and go through this checklist! 🚀


