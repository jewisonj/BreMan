import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors - to be refined based on PDM-web reference
        background: {
          DEFAULT: '#0a0a0a',
          panel: '#141414',
          hover: '#1a1a1a',
        },
        border: {
          DEFAULT: '#2a2a2a',
          hover: '#3a3a3a',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#a0a0a0',
          muted: '#6a6a6a',
        },
        accent: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
        },
      },
    },
  },
  plugins: [],
}

export default config
