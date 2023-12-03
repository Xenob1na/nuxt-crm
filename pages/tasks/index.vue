<template>
    <div>
        <MainLayout>
            <div class="max-w-[1400px] mt-8 ml-8">
                <div class="flex items-center justify-between">
                    <h1 class="text-[#030229] text-[24px] font-bold leading-normal">Список заметок</h1>
                    <div>
                        <button @click="OpenModel"
                            class="flex items-center gap-[10px] bg-[#605BFF] hover:bg-[#4b46c5] transition duration-100 py-4 px-5 rounded-[10px]">
                            <Icon name="ic:round-plus" color="white" width="24" height="24" />
                            <p class="text-white tetx-[16px] font-medium">Добавить заметку</p>
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-3 mt-8">
                    <task v-for="item in items" :key="item.id" :items="item" @isDeleted="item = []" />
                </div>
                <div>
                    <Modal v-if="IsModal" @close="IsModal = false" />
                </div>
            </div>
        </MainLayout>
    </div>
</template>

<script setup>
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
            title: 'Task 1',
            body: 'Discussion for management dashboard ui design',
        },
        {
            id: 2,
            title: 'Task 2',
            body: 'Discussion for management dashboard ui design',
        },
        {
            id: 3,
            title: 'Task 3',
            body: 'Discussion for management dashboard ui design',
        },
        {
            id: 3,
            title: 'Task 3',
            body: 'Discussion for management dashboard ui design',
        },
    ]

})
</script>