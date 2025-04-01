/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E293B",
        secondary: "#64748B",
        accent: "#E11D48",
        background: "#F8FAFC",
        text: "#1E293B",
        border: "#CBD5E1",
        success: "#22C55E",
        warning: "#EAB308",
        error: "#DC2626",
      },
    },
  },
  plugins: [],
};
