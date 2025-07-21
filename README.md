# Deepak Sekar Babu's Digital Canvas

A modern, professional portfolio web application for Deepak Sekarbabu. Showcases skills, experience, projects, and contact information with a beautiful, responsive UI.

---

## Project Overview

This project is a personal portfolio website built to highlight software development expertise, technical skills, and professional achievements. It features smooth navigation, dark mode, and a clean, accessible design.

---

## Features

- Responsive, mobile-friendly layout
- Hero section with profile and social links
- About, Experience, Skills, Education, and Projects sections
- Contact form with EmailJS integration and toast notifications
- Dark/light mode toggle
- Modern UI components (shadcn-ui)
- Built with React, TypeScript, Tailwind CSS, and Vite
- Environment-based configuration for sensitive data

---

## Folder Structure

```
src/
  components/      # UI and section components (Hero, About, Projects, etc.)
  hooks/           # Custom React hooks
  pages/           # Page-level components (Index, NotFound)
  lib/             # Utility functions
  index.css        # Tailwind and custom styles
  main.tsx         # App entry point
.env.example      # Example environment variables
```

---

## Getting Started

### Prerequisites

- Node.js (v16 or later) & npm (v7 or later)
- [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) (recommended for Node.js version management)
- EmailJS account (for contact form functionality)

### Installation

1. **Clone the repository**

   ```sh
   git clone <YOUR_GIT_URL>
   cd sekars-digital-canvas
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to a new file called `.env`
   - Fill in your EmailJS credentials and other configuration:

     ```
     # EmailJS Configuration
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     VITE_EMAILJS_SERVICE_ID=your_service_id_here
     VITE_EMAILJS_TEMPLATE_ID=your_template_id_here

     # Contact Information
     VITE_CONTACT_EMAIL=your.email@example.com
     VITE_PHONE_NUMBER=+1234567890
     VITE_WHATSAPP_NUMBER=+1234567890
     VITE_LOCATION=Your Location
     VITE_LINKEDIN_URL=your_linkedin_username
     VITE_GITHUB_URL=your_github_username
     VITE_RESUME_PATH=/path/to/your/resume.pdf
     ```

4. **Start the development server**

   ```sh
   npm run dev
   ```

5. **Open your browser** and visit `http://localhost:5173` (or the port shown in your terminal)

---

## Environment Variables

This project uses the following environment variables:

### EmailJS Configuration

- `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key
- `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID

### Contact Information

- `VITE_CONTACT_EMAIL`: Your contact email address
- `VITE_PHONE_NUMBER`: Your phone number (format: +[country code][number])
- `VITE_WHATSAPP_NUMBER`: Your WhatsApp number (format: +[country code][number])
- `VITE_LOCATION`: Your location
- `VITE_LINKEDIN_URL`: Your LinkedIn username (the part after linkedin.com/in/)
- `VITE_GITHUB_URL`: Your GitHub username
- `VITE_RESUME_PATH`: Path to your resume PDF file

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks
- `npm run format` - Format code using Prettier
- `npm run optimize-images:validate` - Validate image optimization setup
- `npm run optimize-images:recommendations` - Show production optimization recommendations
- `npm run optimize-images` - Generate responsive image sizes (placeholder)

---

## Technologies Used

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [React](https://react.dev/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [shadcn-ui](https://ui.shadcn.com/) - Beautifully designed components
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [EmailJS](https://www.emailjs.com/) - For handling contact form submissions
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons
- [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library for React

## Performance Features

- **Responsive Images**: Next.js-like image optimization with lazy loading
- **SEO Optimization**: Complete meta tags, structured data, and social media integration
- **Modern Build**: Optimized Vite configuration with code splitting
- **Accessibility**: WCAG compliant components and navigation
- **Progressive Enhancement**: Works without JavaScript for core functionality

---

## Deployment

### Local Build

To create a production build:

```sh
npm run build
npm run preview
```

### Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

### Netlify

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run `netlify deploy` in the project directory
3. Follow the prompts to deploy

---

## Custom Domain

You can connect a custom domain through your hosting provider's DNS settings. Update the CNAME or A records to point to your deployment.

---

## License

This project is for personal portfolio use. For other uses, please contact the author.
