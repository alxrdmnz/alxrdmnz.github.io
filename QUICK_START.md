# Quick Start Guide 🚀

## What's Been Built

A modern, professional personal portfolio website featuring:
- ✅ Hero section with your stats (12+ years experience, $370M+ results, 13+ countries)
- ✅ About section with education and specializations
- ✅ Experience timeline with all your roles at Nike/Converse, Liberty Mutual, etc.
- ✅ Skills & Certifications showcase
- ✅ Awards & Recognition section
- ✅ Contact form with mailto integration
- ✅ Dark/Light mode toggle
- ✅ Fully responsive mobile design
- ✅ Smooth scrolling navigation
- ✅ Modern minimalist aesthetic

## Immediate Next Steps

### 1. Preview Locally (Recommended)

```bash
npm start
```

This opens the site at http://localhost:3000 so you can see it in action!

### 2. Deploy to GitHub Pages

When you're ready to make it live:

```bash
npm run deploy
```

Then configure GitHub Pages:
- Go to: https://github.com/alxrdmnz/alxrdmnz.github.io/settings/pages
- Set Source to: `gh-pages` branch
- Your site will be live at: https://alxrdmnz.github.io

## Customization Tips

### Adding Your Resume PDF

1. Add your PDF file to `/public/resume.pdf`
2. Update the download button in `src/components/Hero.js`:

```javascript
const handleDownloadResume = () => {
  window.open('/resume.pdf', '_blank');
};
```

### Updating Your Photo (Optional)

1. Add your photo to `/public/profile.jpg`
2. In `src/components/Hero.js` or `About.js`, add an `<img>` tag

### Changing Colors

Edit `src/index.css` and modify the CSS variables:

```css
:root {
  --accent: #2563eb;  /* Change to your preferred color */
}
```

### Adding More Content

All content is in the component files under `src/components/`:
- `Hero.js` - Main introduction
- `About.js` - About section
- `Experience.js` - Work history
- `Skills.js` - Technical skills
- `Awards.js` - Recognition
- `Contact.js` - Contact form

## Project Commands

```bash
npm start          # Run development server
npm run build      # Build for production
npm run deploy     # Deploy to GitHub Pages
npm test           # Run tests (if added)
```

## Key Features Built-In

1. **Theme Persistence**: Your theme choice (light/dark) is saved in browser localStorage
2. **Smooth Navigation**: Click any nav link for smooth scrolling
3. **Mobile Responsive**: Looks great on all devices
4. **Contact Form**: Uses mailto: protocol (opens user's email client)
5. **Fast Loading**: Optimized build with code splitting

## Support Links

- [React Documentation](https://react.dev)
- [GitHub Pages Guide](https://docs.github.com/en/pages)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

**Need Help?** Check `DEPLOYMENT.md` for detailed deployment instructions or `README.md` for full documentation.

**Ready to go live?** Run `npm start` to preview, then `npm run deploy` when ready! 🎉
