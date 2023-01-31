// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/georgian/",
    head: {
      charset: "utf8",
      title: "Georgian quiz",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content: "Quiz-like app learn Georgian alphabet",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  imports: {
    autoImport: false,
  },
  ssr: false,
});
