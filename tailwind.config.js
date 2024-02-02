/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        default: colors.slate[300],
        background: colors.slate[950],
        alt: colors.slate[900],
        primary: colors.blue[600],
        success: colors.emerald[600],
        info: colors.slate[700],
        warning: colors.amber[600],
        danger: colors.rose[600],
      }),
    },
  },
  plugins: [],
};
