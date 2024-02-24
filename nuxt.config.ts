// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "nuxt-primevue",
    "@pinia/nuxt",
    "@vee-validate/nuxt",
  ],
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      include: ["Button"],
    },
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  css: ["~/assets/main.css"],
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' }
  // },
});
