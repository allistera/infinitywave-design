# InfinityWave Design & Architecture

A modern, responsive website for InfinityWave Design & Architecture Company, Scotland's premier residential design studio specializing in custom homes, renovations, interior design, and sustainable living solutions.

## 🏗️ About

InfinityWave Design creates personalized living spaces that perfectly balance beauty, functionality, and unique lifestyle needs. Based in Livingston, Scotland, we specialize in crafting dream homes that reflect our clients' vision through innovative architectural design.

## 🚀 Features

- **Modern Responsive Design** - Mobile-first approach with breakpoints at 768px and 480px
- **Interactive Navigation** - Smooth hamburger menu for mobile devices
- **Project Portfolio** - Filterable project gallery by category (residential, commercial, interior, sustainable)
- **Contact Integration** - Interactive contact form with validation and integrated map
- **Performance Optimized** - Vanilla HTML, CSS, and JavaScript for fast loading
- **Accessibility Focused** - Semantic HTML, proper form labels, and keyboard navigation

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Google Fonts (Inter family)
- **Maps**: Leaflet.js for interactive location display
- **Development**: Live-server for local development
- **Design System**: Custom CSS with gradients, animations, and modern UI patterns

## 📁 Project Structure

```
infinitywave-design/
├── index.html          # Homepage with hero, about, services preview
├── projects.html       # Portfolio page with filterable project grid
├── services.html       # Detailed services with pricing information
├── contact.html        # Contact form and business information
├── styles.css          # Complete stylesheet with responsive design
├── script.js           # Interactive functionality and animations
├── images/             # Logo and visual assets
│   └── logo.png        # Company logo
├── package.json        # Development dependencies and scripts
├── CLAUDE.md          # Development guidelines for Claude Code
└── README.md          # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary Gradient**: #667eea → #764ba2 (Blue to Purple)
- **Text**: #333 (Dark Gray)
- **Secondary Text**: #666 (Medium Gray)
- **Background**: #ffffff (White)

### Typography
- **Font Family**: Inter (300, 400, 500, 600, 700 weights)
- **H1**: 3.5rem (Desktop) → 2rem (Mobile)
- **H2**: 2.5rem (Desktop) → 2rem (Tablet)
- **Body**: 1rem base with 1.6 line-height

### Components
- **Buttons**: 8px border-radius with gradient backgrounds
- **Cards**: 15px+ border-radius with subtle shadows
- **Navigation**: Fixed header with backdrop blur
- **Forms**: Validated inputs with smooth transitions

## 🚀 Development

### Prerequisites
- Node.js (for development server)
- Git for version control

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/allistera/infinitywave-design.git
   cd infinitywave-design
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   This uses live-server with auto-reload on file changes.

4. **Alternative simple server**
   ```bash
   npm start
   ```
   Uses Python's built-in HTTP server on port 8000.

### Development Commands

- `npm run dev` - Start live-server with auto-reload
- `npm start` - Start Python HTTP server on port 8000

## 📱 Pages Overview

### Homepage (`index.html`)
- Hero section with call-to-action buttons
- Company overview and statistics
- Services preview grid
- Contact call-to-action

### Projects (`projects.html`)
- Filterable project portfolio
- Categories: Residential, Commercial, Interior, Sustainable
- Responsive grid layout with project details

### Services (`services.html`)
- Detailed service descriptions
- Process steps and methodology
- Pricing and consultation information

### Contact (`contact.html`)
- Contact form with validation
- Business information and hours
- Interactive map showing location in Livingston, Scotland

## 🎯 Key Features

### Interactive Elements
- **Mobile Navigation**: Hamburger menu with smooth animations
- **Project Filtering**: Dynamic category filtering with smooth transitions
- **Form Validation**: Real-time validation with user feedback
- **Scroll Animations**: Intersection Observer for element animations
- **Counter Animations**: Animated statistics on homepage
- **Parallax Effects**: Subtle geometric shape animations

### Responsive Design
- **Mobile-first approach** with progressive enhancement
- **Flexible grid systems** using CSS Grid and Flexbox
- **Optimized images** and assets for different screen sizes
- **Touch-friendly** navigation and interactive elements

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Contact Information

- **Email**: hello@infinitywave.design
- **Phone**: (555) 123-4567
- **Location**: Livingston, Scotland
- **Website**: [infinitywave.design](https://infinitywave.design)

## 📄 License

© 2024 InfinityWave Design. All rights reserved.

## 🤝 Contributing

This is a client website project. For suggestions or issues, please contact the development team.

---

*Built with ❤️ for creating infinite possibilities through innovative design.*