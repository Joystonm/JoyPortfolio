# The Interactive Studio - Joy Portfolio

A next-generation personal portfolio website designed as an immersive, interactive studio experience with cinematic animations and modern web technologies.

## 🚀 Features

- **Cinematic Hero Section** with floating particles and animated text reveals
- **Interactive Skills Section** with category filters and animated progress bars
- **Project Showcase** with glassmorphism cards and detailed modals
- **Animated Timeline** with GSAP scroll-triggered animations
- **Creative Playground** with interactive UI experiments
- **Contact Form** with EmailJS integration
- **Custom Cursor** with magnetic hover effects
- **Smooth Scrolling** powered by Lenis
- **Dark/Light Theme** toggle with smooth transitions
- **Responsive Design** for all devices
- **SEO Optimized** with meta tags and OG images

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Advanced animations and transitions
- **GSAP** - Professional scroll-triggered animations
- **Lenis** - Smooth scrolling experience
- **Tailwind CSS** - Utility-first styling
- **EmailJS** - Contact form functionality
- **Lucide React** - Beautiful icons

## 🎨 Design Features

- **Glassmorphism UI** with backdrop blur effects
- **Gradient Text** and accent colors
- **Floating Particles** and ambient animations
- **Magnetic Interactions** and hover effects
- **Scroll-aware Navbar** that hides/shows intelligently
- **Staggered Animations** for enhanced visual hierarchy

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/joy-portfolio.git
   cd joy-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env` file and update with your EmailJS credentials
   - Sign up at [EmailJS](https://www.emailjs.com/) for contact form functionality

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## ⚙️ Configuration

### EmailJS Setup
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create email template with variables: `from_name`, `from_email`, `message`, `to_name`
4. Update `.env` file with your credentials

### Customization
- Update personal information in `/src/data/` files
- Modify colors in `tailwind.config.js`
- Replace placeholder content with your own projects and skills
- Update social links and contact information

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── layout/          # Layout components (Navbar, Footer)
│   └── sections/        # Page sections (Hero, About, etc.)
├── hooks/               # Custom React hooks
├── animations/          # Animation configurations
├── styles/              # Global styles and CSS
├── data/                # Static data (projects, skills, etc.)
├── pages/               # Page components
├── utils/               # Utility functions
└── assets/              # Static assets
```

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: Lazy loading and modern formats
- **Accessibility**: WCAG 2.1 AA compliant

## 🚀 Deployment

The project is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for amazing animations
- [GSAP](https://greensock.com/gsap/) for professional scroll animations
- [Lenis](https://github.com/studio-freight/lenis) for smooth scrolling
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling

---

**Built with ❤️ by Joy**
