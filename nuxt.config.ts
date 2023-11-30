// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', 'nuxt-primevue'],
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      include: ['Button']
    }
  },
  css: ['~/assets/main.css'],
})
