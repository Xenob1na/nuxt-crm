<template>
    <div>
        <MainLayout>
            <div class="max-w-[1400px] mt-8 ml-8">
                <div class="flex items-center justify-between">
                    <h1 class="text-[#030229] text-[24px] font-bold leading-normal">График заказов</h1>
                    <div>
                        <button
                            @click="OpenModel"
                            class="flex items-center gap-2 bg-[#605BFF] hover:bg-[#4b46c5] transition duration-100 py-4 px-5 rounded-[10px]">
                            <Icon name="ic:round-plus" color="white" width="24" height="24" />
                            <p class="text-white tetx-[16px] font-medium">Добавить заказ</p>
                        </button>
                    </div>
                </div>
                <div>
                    <ModalSchedule v-if="IsModal" @close="IsModal = false" :items="items"/>
                </div>
                <div class="grid grid-cols-3 gap-3 mt-8">
                    <ScheduleList v-for="item in items" :key="item.id" :items="item"/>
                </div>
                <div v-if="items.length === 0">
                    <h3 class="text-center text-[22px] text-[#030229]">Нету заказов!!!</h3>
                </div>
            </div>
        </MainLayout>
    </div>
</template>

<script setup>
useHead({
    title: 'График заказов'
});
import MainLayout from '../../layouts/MainLayout.vue'

const IsModal = ref(false)
const items = ref([])

const OpenModel = () => {
    IsModal.value = !IsModal.value
}

onBeforeMount(() => {
    items.value = [
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
        },
        {
            id: 3,
            name: 'Stiven Doe',
            phone: '+33757005467',
            email: 'neil.sims@flowbite.com',
            adress: 'New York No. 1 Lake Park',
        }
    ]
})
</script>