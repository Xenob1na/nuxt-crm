<template>
    <div v-if="loading" class="fixed top-0 left-0 w-full h-full bg-black/25 flex justify-center items-center z-[100]">
        <div class="grid place-items-center">
            <Icon name="eos-icons:bubble-loading" size="50" color="white" />
            <p class="text-white text-[16px] font-bold mt-3">Загрузка...</p>
        </div>
    </div>
    <div id="Menu-Left">
        <div class="bg-white py-[50px] px-6">
            <div class="flex gap-3 items-center">
                <span>
                    <svg width="33" height="41" viewBox="0 0 33 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M15.3681 28.521C20.5677 28.521 24.7828 19.5928 24.7828 14.2968C24.7828 9.00071 20.5677 4.7074 15.3681 4.7074C10.1685 4.7074 5.95343 9.00071 5.95343 14.2968C5.95343 19.5928 10.1685 28.521 15.3681 28.521ZM15.3681 20.3701C18.4879 20.3701 21.0169 17.7941 21.0169 14.6164C21.0169 11.4388 18.4879 8.8628 15.3681 8.8628C12.2484 8.8628 9.71931 11.4388 9.71931 14.6164C9.71931 17.7941 12.2484 20.3701 15.3681 20.3701Z"
                            fill="#605BFF" />
                        <path
                            d="M11.4908 31.567C11.4908 31.1082 11.8411 30.7363 12.2733 30.7363H17.9077C18.3399 30.7363 18.6903 31.1082 18.6903 31.567V31.567C18.6903 32.0258 18.3399 32.3977 17.9077 32.3977H12.2733C11.8411 32.3977 11.4908 32.0258 11.4908 31.567V31.567Z"
                            fill="#605BFF" />
                        <path
                            d="M11.4922 35.8899C11.4922 34.8194 12.3331 33.9515 13.3703 33.9515H16.8135C17.8508 33.9515 18.6917 34.8194 18.6917 35.8899V35.8899C18.6917 36.9604 17.8508 37.8282 16.8135 37.8282H13.3703C12.3331 37.8282 11.4922 36.9604 11.4922 35.8899V35.8899Z"
                            fill="#605BFF" />
                    </svg>

                </span>
                <h2 class="text-[#605BFF] font-bold text-[22px]">OOO "Магнум"</h2>
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
            <div class="w-full bg-[#F5F5F5] rounded-[10px] px-3 py-4 mt-[350px] border hover:bg-[#e4e4e4] transition duration-100 cursor-pointer">
                <div>
                    <nuxt-link @click="logout" class="flex gap-4 items-center ">
                        <Icon name="solar:logout-2-bold" width="20" height="20" flip="horizontal" class="text-gray-700" />
                        <span class="text-gray-700 text-[18px]  font-semibold">Выйти</span>
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

const { logUserOut } = useAuthStore();
const { loading } = storeToRefs(useAuthStore());



const logout = async () => {
    try {
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
            logUserOut();
            router.push('/login');
        }, 3000);

    } catch (error) {
        console.log(error);
    }

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
</script>

<style scoped>#Menu-Left {
    display: grid;
    grid-template-columns: 1fr 6fr;
    min-height: 100vh;
}</style>