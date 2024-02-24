import { defineStore } from "pinia";
import { useRouter } from "vue-router";

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
      token.value = null;
      this.authenticated = false;
    },

    // async logOut() {
    //   try {
    //     await $fetch("http://localhost:5000/api/logoutUser", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //       },
    //     });
    //     this.authenticated = false;
    //     const token = useCookie("token");
    //     token.value = null;
    //     const router = useRouter();
    //     if (!authenticated.value) {
    //       router.push("/login");
    //     }
    //     // router.push({ name: "login" });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    // async getUser() {
    //   try {
    //     const token = useCookie("token");
    //     let Token: any = token.value;
    //     const res: any = await $fetch("http://localhost:5000/api/getUser", {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //         Authorization: `Bearer ${Token}`,
    //       },
    //     });
    //     this.user = res.data.name;
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
});
