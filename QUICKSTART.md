# ⚡ Quick Start Guide

## 🎯 Get Started in 3 Minutes

### Option 1: Automated Setup (Windows)
```bash
# Double-click setup.bat
# or run in terminal:
setup.bat
```

### Option 2: Manual Setup

1. **Install Dependencies**
```bash
npm install
```

2. **Start Development Server**
```bash
npm run dev
```

3. **Open in Browser**
```
http://localhost:5173
```

---

## 🎨 What You'll See

### Homepage
- 12 premium properties with GPS coordinates
- Advanced search and filtering
- Grid/List view toggle
- Dark/Light mode

### Features to Try
1. **Search**: Type "Miami" or "Villa"
2. **Filter**: Adjust price slider, select cities
3. **Favorites**: Click heart icon on any property
4. **Details**: Click any property card
5. **Theme**: Toggle dark/light mode in navbar
6. **Views**: Switch between grid and list

---

## 📱 Test on Mobile
```bash
# Find your local IP
ipconfig

# Access from mobile
http://YOUR_IP:5173
```

---

## 🚀 Deploy in 2 Minutes

### Easiest: Vercel
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Alternative: Netlify
```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=dist
```

---

## 📦 Build for Production
```bash
npm run build
# Output in 'dist' folder
```

---

## 🔧 Customize

### Change Colors
Edit `tailwind.config.js` → `theme.extend.colors`

### Add Properties
Edit `public/properties.json`

### Modify Styles
Edit `src/index.css`

---

## 📖 Full Documentation
- README.md - Complete project documentation
- DEPLOYMENT_GUIDE.md - Detailed deployment instructions

---

## 🐛 Common Issues

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Build errors?**
```bash
rm -rf node_modules
npm install
npm run build
```

---

## 🎉 You're Ready!

Your Property Rental Dashboard is ready to use. Start exploring, customizing, and deploying!

**Need help?** Check the full README.md or DEPLOYMENT_GUIDE.md
