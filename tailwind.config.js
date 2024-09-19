/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  corePlugins: {
    preflight: false
  },
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:'var(--primary)',
        secondary:'var(--secondary)',
        waring:'var(--waring)',
        danger:'var(--danger)'
      }
    }
  }
};

