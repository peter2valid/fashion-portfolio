# Hope Ntinyari Portfolio

A **professional, animated, fully editable fashion portfolio website** built with React, Vite, Tailwind CSS, Framer Motion, and Sanity CMS integration.

![Portfolio Status](https://img.shields.io/badge/status-live-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.1-06B6D4)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.12.16-FF0055)

---

## 🌟 Features

### ✨ Homepage Sections

- **Hero Section** - Animated signature name, professional subtitle, social media buttons (WhatsApp, Instagram, TikTok)
- **Projects Portfolio** - Dynamic grid fetching from Sanity CMS, hover animations, auto-updates
- **Runway Videos** - TikTok & YouTube embeds with play button overlay
- **Meet The Team** - Clickable team cards with social links, grayscale-to-color hover effect
- **Gallery** - Full lightbox functionality with keyboard navigation
- **Responsive Navbar** - Fixed navigation with scroll effect, social icons
- **Footer** - Social links, quick navigation, copyright info

### 🔐 Admin Features

- **Admin Login** (`/admin`) - Simple authentication system
- **Admin Dashboard** (`/admin/dashboard`) - Full content management
  - Add new projects
  - Upload runway videos (YouTube/TikTok)
  - Upload gallery photos
  - Quick links to Sanity Studio

### 🎨 Design

- **Colors:** Deep red (#a32117), Cream background (#efefef), Black text
- **Fonts:** Bodoni Moda (headlines), Great Vibes (signature), Inter (body)
- **Animations:** Smooth Framer Motion effects throughout
- **Responsive:** Mobile-first, works on all devices

---

## 📋 Prerequisites

- **Node.js** 16.x or higher
- **npm** or **yarn**

Check your installation:
```bash
node --version
npm --version
```

---

## 🚀 Quick Start

### 1. Navigate to Project
```bash
cd /home/peter/Downloads/hope-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

This installs:
- React & React DOM
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- Sanity Client
- All dev dependencies

### 3. Start Development Server
```bash
npm run dev
```

### 4. Open in Browser
**Visit:** http://localhost:5173

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 🗂️ Project Structure

```
hope-portfolio/
├── public/
│   └── images/           # Static images (hero, projects, team)
├── src/
│   ├── components/       # React components
│   │   ├── HeroSection.jsx
│   │   ├── Projects.jsx
│   │   ├── VideoShowcase.jsx
│   │   ├── MeetTheTeam.jsx
│   │   ├── Gallery.jsx
│   │   ├── UpdatedNavbar.jsx
│   │   ├── UpdatedFooter.jsx
│   │   ├── AdminLogin.jsx
│   │   └── AdminDashboard.jsx
│   ├── lib/
│   │   └── sanity.js     # Sanity client configuration
│   ├── data/
│   │   └── sanityData.js # Data fetching functions
│   ├── App.jsx           # Main app with routing
│   ├── main.jsx          # React entry point
│   └── index.css         # Tailwind & global styles
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

---

## 🔑 Admin Access

### Login Credentials
- **URL:** http://localhost:5173/admin
- **Username:** `hope`
- **Password:** `hope2025`

### Dashboard
After login, you'll be redirected to: http://localhost:5173/admin/dashboard

**Features:**
- Add new projects with images
- Add video URLs (YouTube/TikTok)
- Upload gallery photos
- Quick access to Sanity Studio

---

## 🗄️ Sanity CMS Integration

### Configuration

The project connects to Sanity with:
- **Project ID:** `khc2znf3`
- **Dataset:** `production`
- **API Version:** `2023-10-27`

### Required Schemas

Create these schemas in your Sanity Studio:

#### 1. Project Schema
```javascript
{
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'client', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'date', type: 'date' },
    { name: 'image', type: 'image' }
  ]
}
```

#### 2. Video Schema
```javascript
{
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'url', type: 'url' }
  ]
}
```

#### 3. Gallery Schema
```javascript
{
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    { name: 'image', type: 'image' }
  ]
}
```

#### 4. Team Schema
```javascript
{
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'role', type: 'string' },
    { name: 'image', type: 'image' },
    { 
      name: 'socialLinks',
      type: 'object',
      fields: [
        { name: 'instagram', type: 'url' },
        { name: 'website', type: 'url' },
        { name: 'twitter', type: 'url' }
      ]
    },
    { name: 'order', type: 'number' }
  ]
}
```

### Fallback Content

The site works **immediately** even without Sanity configured. It uses fallback data from local images.

---

## 📱 Social Media Links

All social buttons link to:

- **Instagram:** https://www.instagram.com/ntinyari.hope
- **TikTok:** https://www.tiktok.com/@ntinyarihope
- **WhatsApp:** https://wa.me/254792822887

These links appear in:
- Hero section buttons
- Navbar icons
- Footer social links

---

## 🎨 Customization

### Update Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  fashionRed: '#a32117',   // Your brand red
  creamBg: '#efefef',      // Background color
  textBlack: '#0a0a0a',    // Text color
}
```

### Update Fonts

Fonts are loaded from Google Fonts in `src/index.css`:
- Bodoni Moda (headings)
- Great Vibes (signature)
- Inter (body text)

### Update Content

1. **With Sanity:** Add content via Sanity Studio
2. **Without Sanity:** Edit fallback data in component files

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### Environment Variables

If using Sanity write operations, add:

```
VITE_SANITY_TOKEN=your_token_here
```

---

## ✨ Key Features Details

### Animations (Framer Motion)

- Scroll-triggered reveals
- Hover effects on all cards
- Smooth page transitions
- Interactive button animations

### Lightbox Gallery

- Click any image to view full-size
- Navigate with arrow buttons or keyboard
- Close with X button or Escape key
- Shows current image number

### Video Embeds

- Supports YouTube and TikTok
- Auto-detects video platform
- Shows thumbnail with play button
- Click to play inline

### Responsive Design

- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- 4K: 1536px+

---

## 🐛 Troubleshooting

### Port Already in Use

Vite will automatically try the next available port.

### Dependencies Issues

```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Build Errors

Ensure Node.js version is 16.x or higher:
```bash
node --version
```

---

## 📚 Technologies Used

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18.2.0 | UI library |
| Vite | 4.4.9 | Build tool |
| Tailwind CSS | 3.4.1 | Styling |
| Framer Motion | 10.12.16 | Animations |
| React Router DOM | 6.x | Routing |
| @sanity/client | Latest | CMS integration |
| @sanity/image-url | Latest | Image optimization |
| PostCSS | 8.4.24 | CSS processing |
| Autoprefixer | 10.4.16 | CSS vendor prefixes |

---

## 📖 Documentation

- **BUILD_COMPLETE.md** - Detailed build documentation
- **QUICKSTART.md** - Quick start guide
- **FIXES.md** - Configuration fixes applied

---

## 🔒 Security Notes

### Admin Authentication

The current admin system uses:
- Simple username/password check
- localStorage for session
- Client-side route protection

**For Production:**
- Implement proper backend authentication
- Use JWT tokens
- Add password hashing
- Enable 2FA

---

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 📝 License

This project is private and proprietary.

---

## 👤 Author

**Hope Ntinyari**

- Instagram: [@ntinyari.hope](https://www.instagram.com/ntinyari.hope)
- TikTok: [@ntinyarihope](https://www.tiktok.com/@ntinyarihope)
- WhatsApp: [+254792822887](https://wa.me/254792822887)

---

## 🤝 Contributing

This is a personal portfolio project. For any suggestions or issues, please contact Hope directly.

---

## 🙏 Acknowledgments

- Design inspiration from modern fashion portfolios
- Fonts from Google Fonts
- Icons from Heroicons
- CMS powered by Sanity.io

---

## 📞 Support

For technical support or questions:
- Open an issue in the repository
- Contact via social media links above

---

**Built with ❤️ using React, Tailwind CSS, Framer Motion, and Sanity CMS**

---

### ⚡ Current Status

✅ **LIVE AND RUNNING**

**Local URL:** http://localhost:5173  
**Admin URL:** http://localhost:5173/admin

---

**Last Updated:** October 28, 2025
