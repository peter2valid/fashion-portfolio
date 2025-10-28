# 🔧 Runtime Error Fix - "process is not defined"

## ✅ Issue Resolved

**Error:** `Uncaught ReferenceError: process is not defined`  
**Location:** `src/lib/sanity.js`  
**Status:** **FIXED** ✅

---

## 🐛 What Was Wrong

The Sanity client configuration was using Node.js syntax:

```javascript
token: process.env.VITE_SANITY_TOKEN  // ❌ This doesn't work in browser
```

**Problem:** 
- `process.env` is a Node.js global variable
- Vite runs in the browser where `process` doesn't exist
- This caused a runtime error preventing the app from loading

---

## ✅ The Fix

Changed to Vite's environment variable syntax:

```javascript
token: import.meta.env.VITE_SANITY_TOKEN  // ✅ Vite browser-compatible syntax
```

### Updated File: `src/lib/sanity.js`

**Before:**
```javascript
export const client = createClient({
  projectId: 'khc2znf3',
  dataset: 'production',
  apiVersion: '2023-10-27',
  useCdn: true,
  token: process.env.VITE_SANITY_TOKEN, // ❌ WRONG
});
```

**After:**
```javascript
export const client = createClient({
  projectId: 'khc2znf3',
  dataset: 'production',
  apiVersion: '2023-10-27',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN, // ✅ CORRECT
});
```

---

## 🎯 Vite Environment Variables

### Correct Syntax

In **Vite** projects (not Node.js), always use:

```javascript
import.meta.env.VITE_YOUR_VARIABLE
```

**NOT:**
```javascript
process.env.VITE_YOUR_VARIABLE  // ❌ This is Node.js only
```

### Environment Variable Rules

1. **Must start with `VITE_`** to be exposed to the browser
2. **Use `import.meta.env`** not `process.env`
3. **Create `.env` file** in project root for local development

**Example `.env` file:**
```env
VITE_SANITY_TOKEN=your_token_here
VITE_SANITY_PROJECT_ID=khc2znf3
VITE_API_URL=https://api.example.com
```

---

## ✅ Verification

After the fix:

- ✅ Server starts without errors
- ✅ Page loads correctly at http://localhost:5173
- ✅ No console errors
- ✅ All components render properly
- ✅ Sanity client configured correctly

---

## 🔍 How to Avoid This in Future

### Quick Reference Card

| Environment | Syntax | Use Case |
|-------------|--------|----------|
| **Vite (Browser)** | `import.meta.env.VITE_*` | ✅ React, Vue, Svelte with Vite |
| **Node.js** | `process.env.*` | ✅ Backend, scripts, SSR |
| **Create React App** | `process.env.REACT_APP_*` | ✅ CRA projects only |
| **Next.js** | `process.env.NEXT_PUBLIC_*` | ✅ Next.js client-side |

### For This Project (Vite + React)

**Always use:**
```javascript
import.meta.env.VITE_VARIABLE_NAME
```

**Never use:**
```javascript
process.env.VARIABLE_NAME  // ❌ Won't work in browser
```

---

## 🚀 Current Status

**✅ ALL SYSTEMS WORKING**

- Development server: **RUNNING** ✅
- Page loading: **SUCCESS** ✅
- Sanity client: **CONFIGURED** ✅
- No runtime errors: **CONFIRMED** ✅

**URL:** http://localhost:5173

---

## 📝 Additional Notes

### About the Token

The `VITE_SANITY_TOKEN` is **optional** and only needed for:
- Write operations (creating/updating content)
- Admin dashboard functionality
- Uploading images to Sanity

**For read-only operations (viewing content):**
- Token is NOT required
- App works fine without it
- Fallback content displays if Sanity is not configured

### Security Note

**Never commit `.env` files to Git!**

Add to `.gitignore`:
```
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

---

## 🎯 Summary

**What happened:**
- Used Node.js syntax (`process.env`) in a browser environment

**What we did:**
- Changed to Vite syntax (`import.meta.env`)

**Result:**
- ✅ Error fixed
- ✅ App running smoothly
- ✅ Ready for presentation!

---

**Fixed on:** October 28, 2025  
**Fix applied to:** `src/lib/sanity.js`  
**Status:** **RESOLVED** ✅

---

**🔥 Your portfolio is now error-free and ready to showcase!**

