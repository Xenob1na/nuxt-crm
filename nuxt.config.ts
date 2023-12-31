// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', 'nuxt-primevue', '@pinia/nuxt'],
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      include: ['Button']
    }
  },
  css: ['~/assets/main.css'],
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
})
