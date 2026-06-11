# 🎨 Sadiq Ridwan Abubakar - Portfolio

A modern, animated portfolio website built with Next.js, React, Framer Motion, and Tailwind CSS. Optimized for Vercel deployment.

## ✨ Features

- **Micro-interactions**: Smooth animations and transitions using Framer Motion
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Next.js 14 with server-side rendering
- **SEO Ready**: Meta tags, OpenGraph, and Twitter Card support
- **Vercel Ready**: Pre-configured for seamless Vercel deployment
- **Dark Mode Ready**: Easy to extend with dark mode support
- **Accessible**: Semantic HTML and ARIA labels

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone or extract the project
cd sadiq-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
sadiq-portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── manifest.ts        # PWA manifest
├── components/            # React components
│   ├── Hero.tsx          # Hero section with animations
│   ├── About.tsx         # About section
│   ├── Projects.tsx      # Projects showcase
│   ├── Skills.tsx        # Skills grid
│   └── Footer.tsx        # Footer with CTA
├── styles/               # Global styles
│   └── globals.css       # Tailwind and custom styles
├── public/               # Static assets
├── package.json          # Dependencies
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vercel.json          # Vercel deployment config
```

## 🎬 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🛠 Technologies Used

- **Next.js 14** - React framework with SSR
- **React 18** - UI library
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **React Icons** - Icon library

## 🎨 Customization

### Update Your Information

Edit `app/page.tsx` and component files to update:
- Name and title
- Bio and descriptions
- Project details
- Social links
- Email address

### Colors and Styling

Modify `tailwind.config.js` to customize:
- Color schemes
- Typography
- Spacing
- Animations

### Add Your Projects

Update the `projects` array in `components/Projects.tsx` with your actual projects.

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and configure build settings
5. Click Deploy

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Environment Variables

Create a `.env.local` file (already in `.gitignore`):

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📱 Micro-interactions

The portfolio includes smooth animations for:
- Page sections fade-in on scroll
- Button hover and tap effects
- Card elevation on hover
- Smooth badge scaling
- Scroll indicator animation
- Staggered list animations

All powered by Framer Motion for optimal performance.

## 🔍 SEO

The portfolio includes:
- Dynamic meta tags
- OpenGraph support
- Twitter Card support
- Sitemap ready
- Schema.org structured data

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sadiq Ridwan Abubakar**
- LinkedIn: [linkedin.com/in/sadiq-ridwan-abubakar-b6a1621b9](https://www.linkedin.com/in/sadiq-ridwan-abubakar-b6a1621b9)

## 🤝 Support

For issues or questions, please open an issue in the repository.

---

Made with ❤️ and React
