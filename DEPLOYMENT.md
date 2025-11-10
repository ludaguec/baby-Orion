# Orion AI Dashboard - Deployment Guide

## 🚀 Quick Start

This is a complete Next.js 14 application ready for deployment on Vercel.

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 📦 Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - What's your project's name? `orion-ai-dashboard`
   - In which directory is your code located? `./`
   - Want to override the settings? `N`

### Method 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository (or drag & drop the ZIP file)
4. Vercel will auto-detect Next.js settings:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
5. Click "Deploy"

## 🎨 Features

- **Dark-themed ChatGPT-like interface**
- **Interactive AI chat** with mock responses
- **Business intelligence insights** with KPI cards
- **Responsive sidebar navigation**
- **Three main views:**
  - Dashboard (Chat + Insights)
  - Insights (KPI Cards only)
  - Settings (Configuration options)

## 🛠 Tech Stack

- **Framework:** Next.js 14.2.5
- **Styling:** Tailwind CSS 3.4
- **Language:** JavaScript (no TypeScript)
- **Deployment:** Optimized for Vercel

## 📊 Mock Data

The app includes pre-configured mock AI responses for common business queries:
- Revenue analysis
- Customer growth metrics
- Conversion rate insights
- Sales performance
- Marketing ROI

Try asking questions like:
- "Why is revenue down?"
- "How is customer growth?"
- "What's our conversion rate?"

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `jsconfig.json` - JavaScript path aliases

## 📁 Project Structure

```
orion-ai-dashboard/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Main page component
│   └── globals.css        # Global styles
├── components/
│   ├── Sidebar.js         # Navigation sidebar
│   ├── ChatArea.js        # AI chat interface
│   └── InsightCards.js    # KPI cards
├── public/                # Static assets
├── package.json           # Dependencies
└── Configuration files
```

## 🌟 Live Demo

After deployment, your app will be available at:
`https://your-project-name.vercel.app`

## 💡 Customization

To customize the app:
1. Edit mock responses in `components/ChatArea.js`
2. Modify KPI cards in `components/InsightCards.js`
3. Adjust styling in `app/globals.css` or component files
4. Update branding in `components/Sidebar.js`

## 🐛 Troubleshooting

If build fails:
- Ensure Node.js version is 18.x or higher
- Clear cache: `rm -rf .next node_modules && npm install`
- Check for syntax errors in `.js` files

## 📝 Notes

- No external API calls required
- All responses are mock data
- Optimized for Vercel's edge network
- Zero configuration needed for deployment
