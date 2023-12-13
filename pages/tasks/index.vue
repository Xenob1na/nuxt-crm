<template>
    <div>
        <MainLayout>
            <div class="max-w-[1400px] mt-8 ml-8">
                <div class="flex items-center justify-between">
                    <h1 class="text-[#030229] text-[24px] font-bold leading-normal">Список заметок</h1>
                    <div class="flex gap-3">
                        <button @click="isLogoutOverlay = true"
                            class="flex items-center gap-2 bg-[#605BFF] hover:bg-[#4b46c5] transition duration-100 py-4 px-5 rounded-[10px]">
                            <Icon name="ic:round-plus" color="white" width="24" height="24" />
                            <p class="text-white tetx-[16px] font-medium">Добавить заметку</p>
                        </button>
                        <button
                            class="flex items-center rounded-[10px] gap-2 bg-red-600 justify-between text-white py-4 px-5 hover:bg-red-700">
                            <Icon name="solar:trash-bin-trash-broken" size="20" />
                            <div>Удалить Все</div>
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-3 mt-8">
                    <task v-for="item in items" :key="item.task_id" :items="item" @isDeleted="item = []" />
                </div>
                <div>
                    
                </div>
                <div v-if="items.length === 0">
                    <h3 class="text-center text-[22px] text-[#030229]">Нету заметок, создайте их и ничего не забудьте!!!
                    </h3>
                </div>
            </div>
        </MainLayout>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Список заметок'
});
import MainLayout from '../../layouts/MainLayout.vue'
import { storeToRefs } from 'pinia';
import { useTaskStore } from '../../store/task';

const { getTask } = useTaskStore();
const { tasks, isLogoutOverlay } = storeToRefs(useTaskStore());

interface Task {
    task_id: number;
    task_title: string;
    task_body: string;
    created_date: string;
}

const items = ref<Task[]>([])

onMounted(() => {
    getTask()
})

onBeforeMount(() => {
    items.value = tasks.value

})
</script>