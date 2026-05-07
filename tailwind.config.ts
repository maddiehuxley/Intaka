import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Intaka palette — crimson on near-black, sister to P4X glacier cyan
        intaka: {
          red: '#FF1F2E',       // primary accent (matches card design)
          'red-deep': '#C8121F', // deeper variant for hover/active
          'red-glow': '#FF4A56', // softer glow for highlights
          dark: '#0A0204',       // base background, slightly red-tinted black
          panel: '#140509',      // raised panel surface
          'panel-2': '#1F0A10',  // hover panel
          line: '#2A1018',       // subtle borders
          ink: '#F5E8EB',        // primary text (warm white)
          'ink-2': '#A89098',    // secondary text
          'ink-3': '#6B5A60',    // tertiary text
        },
      },
      fontFamily: {
        display: ['Rajdhani', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'aurora-red':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,31,46,0.15), transparent), radial-gradient(ellipse 50% 50% at 80% 50%, rgba(200,18,31,0.10), transparent)',
        'grid-red':
          'linear-gradient(rgba(255,31,46,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,31,46,0.03) 1px, transparent 1px)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
