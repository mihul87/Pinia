/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  content: [],
  theme: {
    extend: {
      colors: {
       trinidad: "#c7522a",
       "new-orlean": "#e5c185",
       "corn-field": "#fbf2c4",
       acapulco: "#74a892",
       teal: "#008585"
      }
    },
  },
  plugins: [],
}
