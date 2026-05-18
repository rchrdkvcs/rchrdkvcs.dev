// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: { plugins: [tailwindcss()] },
  css: ["./app/assets/css/main.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/mdc",
  ],
  ui: {
    colorMode: true,
    experimental: {
      componentDetection: true,
    },
  },
  app: {
    pageTransition: true,
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    directusUrl: process.env.DIRECTUS_URL ?? "https://admin.rchrdkvcs.dev",
    directusToken: process.env.DIRECTUS_TOKEN ?? "",
    public: {
      directusUrl: process.env.DIRECTUS_URL ?? "https://admin.rchrdkvcs.dev",
    },
  },
});
