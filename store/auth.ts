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
    mssg: "",
  }),
  actions: {
    async authenticateUser({ email, password }: User) {
      const { data, pending, error }: any = await useFetch(
        "http://localhost:5000/api/loginUser",
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
      const msg = error.value?.data?.message;
      this.mssg = msg;

      if (data.value) {
        const token = useCookie("token");
        token.value = data?.value?.token;
        this.authenticated = true;
      }
    },
    logUserOut() {
      const token = useCookie("token");
      token.value = ""; 
      this.authenticated = false;
    },
    async getUser() {
      try {
        const token = useCookie("token");
        let Token: any = token.value;
        const res: any = await $fetch("http://localhost:5000/api/getUser", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${Token}`,
          },
        });
        this.user = res.data.name;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
