<template>
    <div>
        <MainLayout>
            <div class="max-w-[1400px] mt-8 ml-8">
                <div class="flex items-center justify-between">
                    <h1 class="text-[#030229] text-[24px] font-bold leading-normal">Список клиентов</h1>
                    <div>
                        <nuxt-link to="/add-customer">
                            <button
                                class="flex items-center gap-[10px] bg-[#605BFF] hover:bg-[#4b46c5] transition duration-100 py-4 px-5 rounded-[10px]">
                                <Icon name="ic:round-plus" color="white" width="24" height="24" />
                                <p class="text-white tetx-[16px] font-medium">Добавить клиента</p>
                            </button>
                        </nuxt-link>
                    </div>
                </div>
                <CustomerList v-for="customers in customer" :key="customers.id" :customers="customers"
                    @isDeleted="customers = []" />
            </div>
        </MainLayout>
    </div>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'

const customer = ref([])

onBeforeMount(() => {
    customer.value = [
        {
            id: 1,
            name: 'John Doe',
            phone: '+33757005467',
            email: 'neil.sims@flowbite.com',
            adress: 'New York No. 1 Lake Park',
        },
        {
            id: 2,
            name: 'Stiven Doe',
            phone: '+33757005467',
            email: 'neil.sims@flowbite.com',
            adress: 'New York No. 1 Lake Park',
        }
    ]
})
</script>