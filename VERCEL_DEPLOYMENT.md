# Vercel Build & Development Settings

## Build command
The build command is automatically detected as:
```
npm run build
```

## Start command  
The start command is automatically detected as:
```
npm start
```

## Environment variables
No environment variables are required for basic functionality.

Optional variables:
- `NEXT_PUBLIC_SITE_URL` - Your production URL

## Node version
This project uses Node.js 18.x (specified in package.json)

## Installation
Dependencies are installed via npm:
```
npm ci
```

## Deployment Notes

1. **First Deployment**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect this is a Next.js project
   - Click "Deploy"

2. **Auto-deployments**
   - Every push to main branch triggers automatic deployment
   - Preview deployments for pull requests

3. **Custom Domain**
   - Add your domain in Vercel project settings
   - Point your DNS to Vercel nameservers

## Troubleshooting

**Build fails with dependency errors:**
- Clear Vercel cache and rebuild
- Ensure Node version is 18 or higher

**Animations not working:**
- Check browser support for CSS animations
- Verify Framer Motion is installed correctly

**Images not loading:**
- Check public folder permissions
- Verify image paths are correct

For more info: https://vercel.com/docs
