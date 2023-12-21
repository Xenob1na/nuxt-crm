<template>
    <div class="max-w-[660px] mx-auto mt-[150px]">

        <div class="bg-white py-6 sm:py-8 lg:py-12 rounded-[10px]">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <span class="flex justify-center mb-8">
                    <svg width="85" height="85" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M91.9748 47.5366C91.9916 47.0265 92 46.5142 92 46C92 20.5949 71.4051 0 46 0C21.8569 0 2.05802 18.5996 0.150532 42.2515L25.2158 54.5056C26.3308 52.1945 28.6962 50.5999 31.434 50.5999C33.8177 50.5999 35.9191 51.8086 37.1586 53.6466L56.8662 37.3879C56.779 36.9499 56.7333 36.4971 56.7333 36.0335C56.7333 32.2227 59.8225 29.1335 63.6333 29.1335C67.4441 29.1335 70.5333 32.2227 70.5333 36.0335C70.5333 36.2011 70.5273 36.3673 70.5156 36.5319L91.9748 47.5366ZM38.0427 55.51L57.5966 39.378C58.7739 41.4985 61.036 42.9335 63.6333 42.9335C66.5574 42.9335 69.0566 41.1146 70.0613 38.5466L91.8517 49.7211C89.9573 73.3861 70.1524 92 46 92C20.5949 92 0 71.4051 0 46C0 45.4702 0.00895498 44.9426 0.0267218 44.4172L24.6152 56.4382C24.5618 56.7843 24.534 57.1389 24.534 57.4999C24.534 61.3107 27.6233 64.3999 31.434 64.3999C35.2448 64.3999 38.334 61.3107 38.334 57.4999C38.334 56.8081 38.2322 56.1401 38.0427 55.51Z"
                            fill="#605BFF" />
                    </svg>
                </span>
                <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Авторизоваться</h2>
                <form class="mx-auto max-w-lg rounded-lg">
                    <div class="flex flex-col gap-4 p-4 md:p-8">
                        <div>
                            <label for="email" class="mb-2 inline-block text-[#030229] text-base">Почта</label>
                            <input name="email" v-model="user.email" required
                                class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />

                        </div>

                        <div>
                            <label for="password"
                                class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Пароль</label>
                            <input type="password" name="password" v-model="user.password" required
                                class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                        </div>

                        <button @click.prevent="login"
                            class="block rounded-lg bg-[#605BFF] px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base">
                            <span :class="{ 'hidden': loading }">Авторизоваться</span>

                            <div v-if="loading" class="flex justify-center">
                                <svg aria-hidden="true"
                                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor" />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill" />
                                </svg>
                            </div>

                        </button>

                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Авторизоваться'
});

import { storeToRefs } from 'pinia';
import { useAuthStore } from '../../store/auth';

const { authenticateUser } = useAuthStore();
const { authenticated, loading } = storeToRefs(useAuthStore());

const user = ref({
    email: '',
    password: ''
})

const router = useRouter();

const login = async () => {
    loading.value = true;
    try {
        await authenticateUser(user.value);
        if (authenticated) {
            router.push('/')

        }
        loading.value = false;
    } catch (error) {
        console.log(error)
        loading.value = false;
    }
}
</script>