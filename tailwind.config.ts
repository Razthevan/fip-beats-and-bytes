import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/theme';


// From https://play.tailwindcss.com/0Z6VvbNQfw
const config: Config = {  
  theme: {
    extend: {
      colors: {
        primary: '#6171fe',
        secondary: '#9f6afe',
        tertiary: '#b79dfe',
        highlight: '#ddd0fe',
        light: '#fefefe',
        dark: '#6658fe',
      },
      animation: {
        background: 'background 2s ease-in-out infinite',
        linear: 'backgroundLinear 3s linear infinite',
        slide: 'backgroundSlide 120s linear infinite alternate-reverse forwards;',
      },
      keyframes: {
        background: {
          '0%, 100%': { backgroundPosition: 'left 0% bottom 0%' },
          '50%': { backgroundPosition: 'left 200% bottom 0%' },
        },
        backgroundLinear: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        backgroundSlide: {
          '0%': { backgroundPosition: '0 0%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [nextui()],
};
export default config;
