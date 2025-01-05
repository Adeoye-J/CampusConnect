/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html' ],
  theme: {
    extend: {
        colors: {
            // "primary": "#4CAF50",
            "primary": "#1E40AF",
            "secondary": "#FFD700",
            "tertiary": "#4CAF50",
            "accent": "#FF5733",
        }
    },
  },
  plugins: [],
}

