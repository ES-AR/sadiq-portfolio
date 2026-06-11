# 📋 Quick Reference

## Essential Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Check code quality

# Installation
npm install              # Install dependencies
npm ci                   # Clean install (for CI/CD)
```

## Project Paths

| Path | Purpose |
|------|---------|
| `app/` | Next.js App Router (pages, layouts) |
| `components/` | Reusable React components |
| `styles/` | Global CSS and tailwind |
| `public/` | Static assets |
| `package.json` | Dependencies & scripts |

## Component Files

| Component | Path | Purpose |
|-----------|------|---------|
| Hero | `components/Hero.tsx` | Landing section |
| About | `components/About.tsx` | Bio & info |
| Projects | `components/Projects.tsx` | Portfolio items |
| Skills | `components/Skills.tsx` | Skills grid |
| Footer | `components/Footer.tsx` | Bottom section |

## Customization Hotspots

| File | Change |
|------|--------|
| `components/Hero.tsx` | Name, title, links |
| `components/About.tsx` | Bio, experience |
| `components/Projects.tsx` | Add your projects |
| `components/Skills.tsx` | Edit skills list |
| `components/Footer.tsx` | Footer text, links |
| `app/layout.tsx` | Meta tags, SEO |
| `tailwind.config.js` | Colors, fonts, theme |

## Deployment

### Quick Deploy to Vercel
```bash
npm i -g vercel
vercel
# Follow prompts
```

### Git-based Deploy
1. Push to GitHub
2. Connect repo in Vercel dashboard
3. Auto-deploys on push to main

## Micro-interactions Powered By

- **Framer Motion** - All animations
- **Tailwind CSS** - Responsive design
- **Next.js** - Optimization & SSR

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers

## File Structure Summary

```
sadiq-portfolio/
├── 📄 Configuration
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── vercel.json
├── 🎨 Code
│   ├── app/
│   ├── components/
│   └── styles/
├── 📦 Public Assets
│   └── public/
├── 📚 Docs
│   ├── README.md
│   ├── SETUP_GUIDE.md
│   └── VERCEL_DEPLOYMENT.md
└── 🔧 CI/CD
    └── .github/workflows/
```

## Key Features Included

- ✅ Framer Motion animations
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Vercel ready
- ✅ TypeScript support
- ✅ Tailwind CSS
- ✅ GitHub Actions CI/CD
- ✅ Environment config
- ✅ Dark mode ready
- ✅ Performance optimized

## Environment Variables

No required variables. Optional:
- `NEXT_PUBLIC_SITE_URL` - Your domain

Set in Vercel dashboard → Settings → Environment Variables

## Performance Tips

1. Compress images before adding to `public/`
2. Use next/image for images
3. Monitor Core Web Vitals in Vercel dashboard
4. Enable caching headers
5. Use CDN (included with Vercel)

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Dependencies error | `rm -rf node_modules && npm i` |
| Build fails | `npm run build -- --debug` |
| Animations lag | Check browser DevTools Performance |
| Images not showing | Verify paths in `public/` folder |

## Next Steps After Setup

1. [ ] Customize content in components
2. [ ] Add project images to `public/`
3. [ ] Update favicon
4. [ ] Test locally: `npm run dev`
5. [ ] Push to GitHub
6. [ ] Deploy to Vercel
7. [ ] Set custom domain
8. [ ] Monitor analytics

## Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Docs](https://vercel.com/docs)
- [React Icons](https://react-icons.github.io/react-icons/)

---

**Pro Tip:** Keep this guide handy for quick reference!
