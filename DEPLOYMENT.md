# Deployment Guide

## Quick Start - Deploy to GitHub Pages

### 1. First Time Setup

If this is your first time deploying, follow these steps:

```bash
# Install dependencies (if not already done)
npm install

# Deploy to GitHub Pages
npm run deploy
```

This will:
- Build your React application
- Create/update the `gh-pages` branch
- Push the build to GitHub Pages

### 2. Configure GitHub Pages

After running `npm run deploy`, you need to configure GitHub to serve your site:

1. Go to your repository on GitHub: https://github.com/alxrdmnz/alxrdmnz.github.io
2. Click on **Settings** (top right)
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

Your site will be live at: **https://alxrdmnz.github.io**

### 3. Future Deployments

Whenever you make changes and want to update the live site:

```bash
# Make your changes to the code
# Then deploy
npm run deploy
```

The site will automatically update within a few minutes.

## Local Development

To run the site locally while developing:

```bash
# Start development server
npm start
```

This opens the site at `http://localhost:3000` with hot reloading enabled.

## Important Notes

- **Build Folder**: The `/build` folder is automatically generated and should not be committed (it's in `.gitignore`)
- **Homepage URL**: The `homepage` field in `package.json` is set to `https://alxrdmnz.github.io` - this ensures all assets load correctly on GitHub Pages
- **First Deployment**: After first deployment, it may take 5-10 minutes for GitHub Pages to build and serve your site
- **Subsequent Deployments**: Updates typically appear within 1-2 minutes

## Troubleshooting

### Site Not Loading / 404 Error
- Make sure the `gh-pages` branch was created (check branches on GitHub)
- Verify GitHub Pages settings point to `gh-pages` branch
- Wait 5-10 minutes after first deployment

### Assets Not Loading
- Check that `homepage` in `package.json` matches your GitHub Pages URL
- Ensure you ran `npm run deploy` (not just `npm run build`)

### Changes Not Appearing
- Make sure you committed your changes before running `npm run deploy`
- Clear your browser cache
- Wait a few minutes for GitHub Pages to update

## Custom Domain (Optional)

If you want to use a custom domain:

1. Create a `CNAME` file in the `/public` directory with your domain name
2. Update the `homepage` field in `package.json` to your custom domain
3. Configure your domain's DNS settings to point to GitHub Pages
4. Deploy as usual with `npm run deploy`

See GitHub's documentation for detailed custom domain setup:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
