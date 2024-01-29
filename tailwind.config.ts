import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      blue: '#00A2EA',
      'blue-light': '#eaf7fe',
      black: '#222222',
      white: '#fff',
      purple: '#7e5bef',
      pink: '#ff49db',
      red: '#C60202',
      orange: '#ffaf37',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#4a4d4a',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
      'white-dark': '#F4F4F4',
      'border-color': '#4a4d4a1e',
      'skeleton-bg': '#e0e0e0',
    },
  },
  plugins: [],
};
export default config;
