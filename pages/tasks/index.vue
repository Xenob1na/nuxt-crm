<template>
    <div>
        <MainLayout>
            <div class="max-w-[1400px] mt-8 ml-8">
                <div class="flex items-center justify-between">
                    <h1 class="text-[#030229] text-[24px] font-bold leading-normal">Список заметок</h1>
                    <div class="flex gap-3">
                        <button @click="isCloseOverlay = true"
                            class="flex items-center gap-2 bg-[#605BFF] hover:bg-[#4b46c5] transition duration-100 py-4 px-5 rounded-[10px]">
                            <Icon name="ic:round-plus" color="white" width="24" height="24" />
                            <p class="text-white tetx-[16px] font-medium">Добавить заметку</p>
                        </button>
                        <button @click="isDeleteAll"
                            class="flex items-center rounded-[10px] gap-2 bg-red-600 justify-between text-white py-4 px-5 hover:bg-red-700">
                            <Icon name="solar:trash-bin-trash-broken" size="20" />
                            <div>Удалить Все</div>
                        </button>
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

                <div class="grid grid-cols-3 gap-3 mt-8" v-else-if="isTasks">
                    <task v-for="item in items" :key="item.task_id" :items="item" @isDeleted="items = getTask()" />
                </div>
                <div v-if="tasks.length === 0" class="mt-10">
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
const { tasks, isCloseOverlay } = storeToRefs(useTaskStore());

interface Task {
    task_id: number;
    task_title: string;
    task_body: string;
    created_date: string;
}

const isLoading = ref(false)
const items = ref<Task[]>([])
const isTasks = ref(false)

onBeforeMount(async () => {
    isLoading.value = true;
    try {
        await getTask();
        isLoading.value = false;
    } catch (error) {
        console.log(error);
        isLoading.value = false;
    }
})

onMounted(() => {
    watchEffect(() => {
        items.value = tasks.value
        if (tasks && tasks.value.length >= 1) {
            isTasks.value = true
        } else {
            isTasks.value = false
        }
    })
})

watch(() => items.value, () => {
    items.value = tasks.value
    if (tasks && tasks.value.length >= 1) {
        isTasks.value = true
    } else {
        isTasks.value = false
    }
}, { deep: true })

const isDeleteAll = async () => {
    try {
        await $fetch('http://localhost:5000/api/tasks', {
            method: 'DELETE',
        })
        await getTask()
    } catch (error) {
        console.log(error)
    }
}
</script>