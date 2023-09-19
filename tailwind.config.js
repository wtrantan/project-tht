/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./public/**/index.html",],
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "platinum": "#DDDDDD",
        "tiffany-blue": "#98E2C6",
    },
    
    },
  },
  plugins: [],
}

