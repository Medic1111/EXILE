/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      marker: ["Permanent Marker", "cursive"],
      san: ["Open Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('https://bestlifeonline.com/wp-content/uploads/sites/3/2018/06/woman-getting-tattoo.jpg?quality=82&strip=1&resize=640%2C360')",
      },
    },
  },
  plugins: [],
};
