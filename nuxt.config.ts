// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/georgian/",
  },
  modules: ["@nuxtjs/tailwindcss"],
  imports: {
    autoImport: false,
  },
  ssr: false,
});
