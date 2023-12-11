import { defineStore } from 'pinia';

interface User {
    email: string;
    password: string;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        authenticated: false,
        loading: false,
        user: ''
    }),
    actions: {
        async authenticateUser({ email, password }: User) {
            const { data, pending  }: any = await useFetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    email,
                    password
                }
            });
            this.loading = pending;
            this.user = data.value?.user.name;

            if (data.value) {
                const token = useCookie('token');
                token.value = data?.value?.token;
                this.authenticated = true;
            }
        },
        logUserOut() {
            const token = useCookie('token');
            this.authenticated = false;
            token.value = null;
        }
    }
})