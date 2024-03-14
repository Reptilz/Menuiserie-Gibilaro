import { Head } from './.nuxt/components.d';

// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"

export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  plugins: [
    { src: '~/plugins/scroll-behavior.client.ts', mode: 'client' },
  ],
  runtimeConfig: {
    MAILHOST: process.env.MAILHOST,
    MAILPORT: process.env.MAILPORT,
    MAILUSER: process.env.MAILUSER,
    MAILPASSWORD: process.env.MAILPASSWORD,
    CONTACTMAIL: process.env.CONTACTMAIL,
    public : {
      apiMailerUrlDev: process.env.API_BASE_URL_PROD,
      apiMailerUrlProd : process.env.API_BASE_URL_LOCALHOST
    }
  }
})
