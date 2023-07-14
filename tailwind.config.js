/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(200, 15%, 8%)",
        primary_dark: "hsl(0, 0%, 100%)",

        secondary: 'hsl(0, 0%, 100%)',
        secondary_dark: "hsl(209, 23%, 22%)",
        secondary_alt: 'hsl(200, 15%, 8%)',

        bg: "hsl(207, 26%, 17%)",
        bg_dark: "hsl(0, 0%, 98%)",

        shadow: "rgba(245, 245, 245, 0.2) 0 0 8px",
        shadow_dark: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
      },
      fontFamily: {
        'nunito': ["Nunito", 'sans-serif']
      },
      screens: {
        xs: "600px",
        sm: "768px",
        md: "1060px",
        lg: "1280px",
      },
      boxShadow: {
        '3xl': "rgba(149, 157, 165, 0.2) 0px 8px 24px", 
        '3xl_dark': "rgba(245, 245, 245, 0.2) 0 0 8px",
      }
    },
  },
  darkMode: "class",
  plugins: [],
}