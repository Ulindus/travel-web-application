/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ REQUIRED FOR DARK MODE
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#21C4D8",
        secondary: "#FF9F43",
        dark: "#182339",
        light: "#F7F8FA"
      },
      boxShadow: {
        soft: "0 18px 40px rgba(15, 23, 42, 0.18)"
      },
      borderRadius: {
        xl2: "1.75rem"
      }
    }
  },
  plugins: []
};
