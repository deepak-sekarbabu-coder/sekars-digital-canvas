import type { Config } from 'tailwindcss';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const tailwindcssAnimate = require('tailwindcss-animate');

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
        '3xl': '1600px',
      },
    },
    extend: {
      screens: {
        xs: '475px',
        '2xs': '375px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          hover: 'hsl(var(--primary-hover))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
        'gradient-section': 'var(--gradient-section)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        hover: 'var(--shadow-hover)',
        section: 'var(--shadow-section)',
      },
      fontSize: {
        hero: 'var(--text-hero)',
        'hero-mobile': 'var(--text-hero-mobile)',
        heading: 'var(--text-heading)',
        'heading-mobile': 'var(--text-heading-mobile)',
        subheading: 'var(--text-subheading)',
        'subheading-mobile': 'var(--text-subheading-mobile)',
        'body-mobile': 'var(--text-body-mobile)',
        'small-mobile': 'var(--text-small-mobile)',
        // Fluid typography using clamp
        'fluid-hero': 'clamp(2rem, 5vw, 3.5rem)',
        'fluid-heading': 'clamp(1.5rem, 4vw, 2.25rem)',
        'fluid-subheading': 'clamp(1.125rem, 2.5vw, 1.5rem)',
        'fluid-body': 'clamp(0.875rem, 1.5vw, 1rem)',
        'fluid-small': 'clamp(0.75rem, 1vw, 0.875rem)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fast: 'ease-out',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
