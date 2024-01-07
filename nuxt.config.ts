// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"

export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" }
      ]
  }},
  devtools: { enabled: true },
  
})
