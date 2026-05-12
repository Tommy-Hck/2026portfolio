# Spatial Developer Portfolio

A modern, animated portfolio website built for spatial computing professionals. Features a stunning starry night sky background with smooth animations throughout.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)

---

## ✨ Features

- 🌟 **Animated Starry Background** - 200 twinkling stars with randomized animations
- 🎨 **Modern Design** - Clean, professional layout with smooth gradients
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Smooth Animations** - Motion-powered animations with staggered effects
- 🎯 **Easy to Customize** - Well-organized code with detailed comments
- 🏷️ **Technology Badges** - Brand-colored badges for technical skills
- 📧 **Contact Section** - Email and location information cards

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- pnpm (or npm/yarn)

### Installation

#### Option 1: Clone an existing repository

1. **Clone the repository**
   ```bash
   # Replace with your actual repository URL
   git clone https://github.com/your-username/spatial-portfolio.git
   cd spatial-portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # OR if you don't have pnpm:
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm run dev
   # OR
   npm run dev
   ```

4. **Preview**
   - The app will be running (check your Figma Make preview)

#### Option 2: Create your own repository from scratch

1. **Initialize Git in your project**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Spatial developer portfolio"
   ```

2. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com) and click "New repository"
   - Name it (e.g., "spatial-portfolio")
   - Don't initialize with README (you already have one)

3. **Push to GitHub**
   ```bash
   # Replace USERNAME and REPO_NAME with yours
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

4. **Install and run**
   ```bash
   pnpm install
   pnpm run dev
   ```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── App.tsx                    # Main app component
│   └── components/
│       ├── StarryBackground.tsx   # Animated star field
│       ├── Hero.tsx               # Introduction section
│       ├── Projects.tsx           # Featured projects showcase
│       ├── Skills.tsx             # Technical skills badges
│       └── Contact.tsx            # Contact information
├── styles/
│   ├── theme.css                  # Design system tokens
│   └── fonts.css                  # Font imports
└── imports/                       # Assets and images
```

---

## 🎨 Sections Overview

### 1. Hero Section
- Main introduction with professional title
- Call-to-action buttons (Email, View Projects)
- Social media links (GitHub, LinkedIn)
- Fade-in animation on page load

### 2. Projects Section
Features 4 sample projects:
- **Digital Twin Platform** - Real-time 3D visualization with Three.js
- **Geospatial Analytics Dashboard** - Interactive mapping with Mapbox
- **AR Visualization Engine** - WebXR-based augmented reality
- **Point Cloud Processor** - High-performance LiDAR processing

Each project includes:
- Gradient icon background
- Description and tech stack
- Staggered animation on scroll

### 3. Skills Section
Organized into 4 categories:
- **3D & Spatial** - Three.js, WebGL, WebGPU, Unity, etc.
- **Mapping & GIS** - Mapbox, PostGIS, QGIS, etc.
- **Development** - TypeScript, React, Python, Rust, etc.
- **Data & Cloud** - PostgreSQL, MongoDB, AWS, Azure, etc.

Skills displayed as brand-colored badges with hover effects.

### 4. Contact Section
- Email contact card
- Location information
- Download resume button
- Hover animations on all elements

---

## 🛠️ Customization Guide

### Change Your Information

#### Update Hero Section
**File:** `src/app/components/Hero.tsx`

```typescript
// Change your title
<h1 className="mb-4">Your Name</h1>

// Change your subtitle
<h2 className="mb-6 text-zinc-400">
  Your Professional Title
</h2>

// Update description
<p className="text-lg mb-8 text-zinc-300 max-w-2xl">
  Your professional bio and expertise...
</p>

// Update email
<a href="mailto:your.email@example.com">

// Update social links
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourusername">
```

#### Add/Edit Projects
**File:** `src/app/components/Projects.tsx`

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Your project description...",
    icon: Box, // Choose from: Box, Map, Eye, Boxes
    tags: ["Tech1", "Tech2", "Tech3"],
    gradient: "from-blue-500 to-cyan-500" // Tailwind gradient
  },
  // Add more projects...
];
```

Available gradient options:
- `from-blue-500 to-cyan-500` (Blue to Cyan)
- `from-purple-500 to-pink-500` (Purple to Pink)
- `from-orange-500 to-red-500` (Orange to Red)
- `from-green-500 to-emerald-500` (Green to Emerald)

#### Customize Skills
**File:** `src/app/components/Skills.tsx`

```typescript
const skillCategories = [
  {
    title: "Your Category",
    skills: [
      { name: "Skill Name", color: "bg-blue-600", textColor: "text-white" },
      // Add more skills...
    ]
  },
  // Add more categories...
];
```

Common Tailwind colors:
- `bg-blue-600` (Blue)
- `bg-green-600` (Green)
- `bg-red-600` (Red)
- `bg-purple-600` (Purple)
- `bg-orange-600` (Orange)
- `bg-yellow-600` (Yellow)

#### Update Contact Information
**File:** `src/app/components/Contact.tsx`

```typescript
// Update email
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>

// Update location
<p className="text-zinc-400">Your City, State</p>
```

### Adjust Star Count
**File:** `src/app/components/StarryBackground.tsx`

```typescript
// Change the number of stars (default: 200)
for (let i = 0; i < 200; i++) {
  // Change 200 to your desired number
}
```

### Modify Colors
**File:** `src/styles/theme.css`

Update the theme file to change global colors, or modify individual component Tailwind classes.

---

## 🎯 Technologies Used

### Core
- **React 18.3.1** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server

### Styling
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Motion (Framer Motion)** - Animation library

### Icons
- **Lucide React** - Beautiful icon library

---

## 📝 Git Commit Strategy

Follow the commit guide for clean git history:

```bash
# Example commit workflow
git add src/app/components/StarryBackground.tsx
git commit -m "feat: add animated starry background component"

git add src/app/components/Hero.tsx
git commit -m "feat: add hero section with introduction"
```
---

## 🎨 Design Philosophy

- **Spatial Theme** - Night sky background represents the spatial computing domain
- **Clean & Professional** - Minimal design with focus on content
- **Smooth Animations** - Subtle animations that enhance UX without distraction
- **Brand Colors** - Technology badges use recognizable brand colors
- **Responsive First** - Mobile-friendly design that scales beautifully

---

## 🚀 Deployment

### Build for Production

```bash
# Note: This is a Figma Make project
# Standard vite build may not work as expected
# Deploy through Figma Make's deployment options
```
---

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🐛 Troubleshooting

### Stars not appearing?
- Check browser console for errors
- Ensure `StarryBackground` is imported in `App.tsx`

### Animations not working?
- Verify Motion library is installed: `pnpm install motion`
- Check that `initial`, `animate`, and `transition` props are correctly set

### Styles not applying?
- Ensure Tailwind CSS is properly configured
- Check `theme.css` is being imported
- Verify class names are valid Tailwind utilities

---

## 📧 Contact & Support

If you have questions or need help customizing this portfolio:

- Review the detailed comments in each component
- Experiment with small changes and observe the results

---

## 🌟 Showcase

Built with this template? Share your portfolio! Open an issue with your link to be featured here.

---

**Made with ❤️ for spatial computing professionals**

Start customizing and make this portfolio truly yours! 🚀
