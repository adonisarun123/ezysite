/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Aggressive CSS purging for production
  safelist: [],
  blocklist: [
    'debug-*',
    'test-*',
    'demo-*',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f4ff',
          100: '#b3e0ff',
          200: '#80ccff',
          300: '#4db8ff',
          400: '#1aa4ff',
          500: '#0074C8', // Ocean Blue - Primary brand color
          600: '#005ea6',
          700: '#004984',
          800: '#003362',
          900: '#001e40',
        },
        secondary: {
          50: '#e8f8ff',
          100: '#c3edff',
          200: '#9ee2ff',
          300: '#79d7ff',
          400: '#54ccff',
          500: '#3DB8F5', // Sparkle Blue - Accent color
          600: '#2b9bd4',
          700: '#1f7eb3',
          800: '#136092',
          900: '#074371',
        },
        accent: {
          50: '#fff3e6',
          100: '#ffe0b3',
          200: '#ffcc80',
          300: '#ffb84d',
          400: '#ffa41a',
          500: '#FF7E2F', // Sunrise Orange - Alert/Warning
          600: '#e6651a',
          700: '#cc4c05',
          800: '#b33300',
          900: '#991a00',
        },
        success: {
          50: '#e8f5e8',
          100: '#c3e6c3',
          200: '#9ed69e',
          300: '#79c679',
          400: '#54b654',
          500: '#38B000', // Leaf Green - Success/Action
          600: '#2d9600',
          700: '#227c00',
          800: '#176200',
          900: '#0c4800',
        },
        trust: {
          50: '#e6fffe',
          100: '#b3fffc',
          200: '#80fff9',
          300: '#4dfff7',
          400: '#1afff4',
          500: '#00AFAA', // Calm Teal - Trust accent
          600: '#008f8b',
          700: '#006f6c',
          800: '#004f4d',
          900: '#002f2e',
        },
        background: {
          primary: '#F9FBFF', // Soft White
          secondary: '#E1E8F0', // Cloud Gray
        },
        text: {
          primary: '#2B2B2B', // Graphite Black
          secondary: '#6A7780', // Slate Gray
        },
        neutral: {
          50: '#F9FBFF',
          100: '#E1E8F0',
          200: '#c8d1dc',
          300: '#afbac8',
          400: '#96a3b4',
          500: '#6A7780',
          600: '#556066',
          700: '#40484c',
          800: '#2B2B2B',
          900: '#161a1c',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} 