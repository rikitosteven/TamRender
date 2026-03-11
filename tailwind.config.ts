import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        cream: '#F8F6F3',
        beige: {
          50: '#FAF9F7',
          100: '#F5F1EB',
          200: '#E8E3D8',
          300: '#DDD6CC',
          400: '#D4D0C8',
        },
        gray: {
          light: '#D4D0C8',
          lighter: '#E8E3D8',
          neutral: '#9B9792',
          medium: '#6B6B6B',
          dark: '#2C2C2C',
          darker: '#1A1A1A',
        },
        accent: {
          gold: '#D4A574',
          terracotta: '#8B5A3C',
          charcoal: '#1A1A1A',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px', letterSpacing: '0.05em' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '28px' }],
        lg: ['18px', { lineHeight: '32px' }],
        xl: ['20px', { lineHeight: '32px' }],
        '2xl': ['24px', { lineHeight: '36px' }],
        '3xl': ['32px', { lineHeight: '40px' }],
        '4xl': ['40px', { lineHeight: '48px' }],
        '5xl': ['48px', { lineHeight: '56px' }],
        '6xl': ['60px', { lineHeight: '72px' }],
        '7xl': ['72px', { lineHeight: '84px' }],
      },
    },
  },
  plugins: [],
};
export default config;
