<template>
    <div>
        <MainLayout>
            <div class="max-w-[1400px] mt-8 ml-8">
                <div class="flex items-center justify-between">
                    <h1 class="text-[#030229] text-[24px] font-bold leading-normal">Список клиентов</h1>
                    <div>
                        <nuxt-link to="/add-customer">
                            <button
                                class="flex items-center gap-2 bg-[#605BFF] hover:bg-[#4b46c5] transition duration-100 py-4 px-5 rounded-[10px]">
                                <Icon name="ic:round-plus" color="white" width="24" height="24" />
                                <p class="text-white tetx-[16px] font-medium">Добавить клиента</p>
                            </button>
                        </nuxt-link>
                    </div>
                </div>
                <ClientOnly>

                    <template #fallback>

                        <div class="text-black mx-auto flex flex-col items-center justify-center">
                            <Icon name="line-md:downloading-loop" size="50" color="black" />
                            <div class="text-black">Загрузка данных...</div>
                        </div>
                    </template>
                </ClientOnly>

                <div v-if="isLoading">
                    <div class="text-black mx-auto flex flex-col items-center justify-center">
                        <Icon name="line-md:downloading-loop" size="50" color="black" />
                        <div class="text-black">Загрузка данных...</div>
                    </div>
                </div>

                <div v-else-if="isCustomer">
                    <CustomerList v-for="Customer in customers" :key="Customer.customer_id" :Customer="Customer"
                         />
                </div>
            </div>
        </MainLayout>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Список клиентов'
});

import MainLayout from '../layouts/MainLayout.vue'
import { storeToRefs } from 'pinia';
import { useCustomerStore } from '../store/customer'

const { getCustomer } = useCustomerStore()
const { customer } = storeToRefs(useCustomerStore())

interface Customer {
    customer_id: number;
    full_name_customer: string;
    email: string;
    phone: string | number;
    address: string;
    description: string;
}

const customers = ref<Customer[]>([])
const isCustomer = ref(false)
const isLoading = ref(false)

onMounted(async () => {
    isLoading.value = true
    try {
        await getCustomer()
        isLoading.value = false
    } catch (error) {
        console.log(error)
        isLoading.value = false
    }
})

onBeforeMount(() => {
    watchEffect(() => {
        customers.value = customer.value
        if (customer && customer.value.length >= 1) {
            isCustomer.value = true
        } else {
            isCustomer.value = false
        }
    })
})

watch(() => customers.value, () => {
    customers.value = customer.value
    if (customer && customer.value.length >= 1) {
        isCustomer.value = true
    } else {
        isCustomer.value = false
    }
}, { deep: true })
</script>