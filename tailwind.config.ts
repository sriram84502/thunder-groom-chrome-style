import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        // Enhanced brand colors with more depth
        brand: {
          black: {
            DEFAULT: '#1A1A1A',
            50: '#333333',
            100: '#2C2C2C',
            200: '#404040'
          },
          charcoal: {
            DEFAULT: '#333333',
            50: '#4A4A4A',
            100: '#3E3E3E'
          },
          silver: {
            DEFAULT: '#C0C0C0',
            50: '#D3D3D3',
            100: '#A9A9A9'
          },
          navy: {
            DEFAULT: '#0F2C52', 
            50: '#1A4063',
            100: '#133A6F'
          },
          accent: {
            DEFAULT: '#385170',
            50: '#4A6990',
            100: '#2C4559'
          }
        }
      },
      // Add some new gradient backgrounds
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #385170 0%, #1A1A1A 100%)',
        'gradient-silver': 'linear-gradient(135deg, #C0C0C0 0%, #8E8E8E 100%)',
      },
      // Enhanced shadow effects
      boxShadow: {
        'brand-soft': '0 4px 6px -1px rgba(56, 81, 112, 0.1), 0 2px 4px -1px rgba(56, 81, 112, 0.06)',
        'brand-medium': '0 10px 15px -3px rgba(56, 81, 112, 0.2), 0 4px 6px -2px rgba(56, 81, 112, 0.1)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' }
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        // New custom animations
        'subtle-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' }
        },
        'color-shift': {
          '0%': { backgroundColor: 'hsl(var(--brand-navy-50))' },
          '50%': { backgroundColor: 'hsl(var(--brand-accent-50))' },
          '100%': { backgroundColor: 'hsl(var(--brand-navy-50))' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-out': 'fade-out 0.5s ease-out',
        'slide-in': 'slide-in 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'subtle-pulse': 'subtle-pulse 2s ease-in-out infinite',
        'color-shift': 'color-shift 10s ease infinite'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
