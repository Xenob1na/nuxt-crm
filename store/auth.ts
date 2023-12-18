import { defineStore } from "pinia";

interface User {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
    user: "",
    err: "",
  }),
  actions: {
    async authenticateUser({ email, password }: User) {
      const { data, pending, error }: any = await useFetch(
        "http://localhost:5000/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: {
            email,
            password,
          },
        }
      );
      this.loading = pending;

      if (data.value) {
        const token = useCookie("token");
        token.value = data?.value?.token;
        this.authenticated = true;
      }
    },
    logUserOut() {
      const token = useCookie("token");
      token.value = null;
      this.authenticated = false;
    },
    async getUser() {
      try {
        const token = useCookie("token");
        let Token: any = token.value;
        const res: any = await $fetch("http://localhost:5000/api/get-user", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Token}`,
          },
        });
        this.user = res.data.name;
      } catch (error) {
        console.log(error)
      }
    },
  },
});
