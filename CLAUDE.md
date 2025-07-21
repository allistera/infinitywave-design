# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a static HTML/CSS/JavaScript website. Use these commands for development:

- **Start development server**: `npm run dev` (uses live-server for auto-reload)
- **Start simple server**: `npm start` (uses Python's built-in HTTP server on port 8000)

No build process, linting, or testing framework is currently configured.

## Project Structure

This is a modern, responsive website for InfinityWave Design & Architecture Company built with vanilla HTML, CSS, and JavaScript:

```
├── index.html          # Homepage with hero, about, services preview
├── projects.html       # Portfolio page with filterable project grid
├── services.html       # Detailed services with pricing
├── contact.html        # Contact form and business information
├── styles.css          # Complete stylesheet with responsive design
├── script.js           # Interactive functionality
└── package.json        # Development dependencies and scripts
```

## Architecture & Patterns

### CSS Architecture
- **Reset and base styles** at the top of styles.css
- **Component-based styling** with modular sections (navbar, hero, services, etc.)
- **Mobile-first responsive design** with breakpoints at 768px and 480px
- **CSS Grid and Flexbox** for layouts
- **CSS custom properties** used for consistent gradients and colors
- **Hover effects and animations** throughout

### JavaScript Architecture
- **Single script.js file** contains all interactive functionality
- **Event delegation** and modern DOM manipulation
- **Modular functions** for different page features:
  - Mobile navigation toggle
  - Project filtering (projects.html)
  - Contact form handling (contact.html)
  - Smooth scrolling and animations
  - Parallax effects for hero shapes

### Key Interactive Features
- **Mobile navigation** with hamburger menu
- **Project filtering** by category (residential, commercial, interior, sustainable)
- **Contact form validation** with simulated submission
- **Scroll-based animations** using Intersection Observer
- **Counter animations** for statistics
- **Parallax effects** for geometric shapes

### Design System
- **Typography**: Inter font family with consistent weight scale
- **Color scheme**: Blue/purple gradients (#667eea to #764ba2) as primary
- **Spacing**: Consistent padding/margin using rem units
- **Border radius**: 8px for buttons, 15px+ for cards and sections
- **Shadows**: Subtle box-shadows for depth and hover effects

### Page-Specific Functionality
- **index.html**: Hero animations, statistics counter, service preview
- **projects.html**: Filterable project grid with category buttons
- **services.html**: Detailed service descriptions with process steps
- **contact.html**: Form validation, contact information display

## Development Notes

- Uses **placeholder images** with gradient backgrounds for visual content
- **Form submissions** are simulated (contact form shows alert, doesn't actually send)
- **No external dependencies** beyond Google Fonts
- **Accessibility considerations**: Semantic HTML, proper form labels, keyboard navigation
- **Performance optimized**: Efficient CSS selectors, debounced scroll events