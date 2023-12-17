<template>
    <div id="Menu-Left">
        <div v-if="isLoading"
            class="fixed grid place-items-center  z-50 bottom-0 bg-black bg-opacity-50 backdrop-blur-md h-screen w-full">
            <div>
                <svg aria-hidden="true" class="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                </svg>
            </div>
        </div>

        <div class="bg-white py-[50px] px-6">
            <div class="flex gap-4 items-center">
                <span>
                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M41.9998 21.0966L42 21C42 9.40202 32.598 0 21 0C10.1757 0 1.26409 8.18954 0.123364 18.7105L11.79 24.4142C12.3617 23.6184 13.2953 23.1 14.35 23.1C15.2427 23.1 16.0487 23.4714 16.6219 24.068L25.9002 16.4134C25.9198 14.6906 27.3225 13.3 29.05 13.3C30.6572 13.3 31.9833 14.5037 32.1759 16.0587L41.9998 21.0966ZM17.4857 25.9482L26.5994 18.4294C27.1769 19.1434 28.0601 19.6 29.05 19.6C30.1912 19.6 31.1907 18.9931 31.7433 18.0845L41.8775 23.2815C40.7404 33.8063 31.8271 42 21 42C9.40202 42 0 32.598 0 21C0 20.9588 0.000118391 20.9177 0.000354851 20.8766L11.2016 26.3528C11.2559 28.0449 12.6447 29.4 14.35 29.4C16.0897 29.4 17.5 27.9897 17.5 26.25C17.5 26.1482 17.4952 26.0475 17.4857 25.9482Z"
                            fill="#605BFF" />
                    </svg>
                </span>
                <h2 class="text-[#030229] font-semibold text-[22px]">GargoShuttle</h2>
            </div>
            <div class="mt-[50px]">
                <div v-for="item in nav" :key="item.name" class="mb-8">
                    <nuxt-link :to="item.path"
                        class="flex gap-4 items-center bg-[#F5F5F5] rounded-[10px] px-3 py-4 border hover:bg-[#e4e4e4] transition duration-100">
                        <Icon :name="item.icon" class="text-gray-700" width="30" height="30" />
                        <span class="text-gray-700 text-[18px]  font-semibold">{{ item.name }}</span>
                    </nuxt-link>
                </div>
            </div>
            <div class="flex justify-between items-center w-full bg-[#F5F5F5] rounded-[10px] px-3 py-4 mt-[350px] border">
                <nuxt-link to="/profile">
                    <div>
                        <span class="text-gray-700 text-[16px] font-semibold">{{ user }}</span>
                    </div>
                </nuxt-link>
                <div class="cursor-pointer">
                    <nuxt-link @click="logout">
                        <Icon name="solar:logout-2-bold" width="20" height="20" flip="horizontal" class="text-gray-700" />
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useAuthStore } from '../store/auth';

const router = useRouter();

const { logUserOut, getUser } = useAuthStore();
const { user } = storeToRefs(useAuthStore());

let isLoading = ref(false);

const logout = () => {
    isLoading.value = true;
    logUserOut();
    router.push('/login');
    isLoading.value = false;
}

const nav = [
    {
        name: 'Клиенты',
        icon: 'raphael:customer',
        path: '/'
    },
    {
        name: 'График',
        icon: 'ant-design:schedule-outlined',
        path: '/schedule'
    },
    {
        name: 'Персонал',
        icon: 'ic:baseline-people',
        path: '/staff'
    },
    {
        name: 'Заметки',
        icon: 'clarity:tasks-line',
        path: '/tasks'
    }
]

onMounted(async () => {
    try {
        await getUser()        
    } catch (error) {
        console.log(error)
    }
})
</script>

<style scoped>
#Menu-Left {
    display: grid;
    grid-template-columns: 1fr 6fr;
    min-height: 100vh;
}
</style>