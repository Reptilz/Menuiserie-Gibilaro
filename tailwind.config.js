/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'black': '#10100F',
      'yellow': '#caa673',
      'darkYellow': '#9e825a',
      'blackLight': '#222222',
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs")
  ],
  safelist: [
    'animate-[slide-right_1s_ease-in-out]',
    'animate-[fade-in-up_1s_ease-in-out]',
    'animate-[fade-in-right_1s_ease-in-out]'
  ],
}

