import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        daoBg: '#0D1B2A',
        daoSurface: '#1B263B',
        accentCyan: '#1FB6FF',
        accentPurple: '#A76EFF',
        accentMagenta: '#FF3D8F',
        textPrimary: '#E0E0E0',
        textSecondary: '#A0A0A0',
        glassFrost: 'rgba(255,255,255,0.05)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
      },
      fontFamily: {
        'orbitron': ['var(--font-orbitron)', 'sans-serif'],
        'sharetech': ['var(--font-sharetech)', 'monospace'],
        'michroma': ['var(--font-michroma)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config; 