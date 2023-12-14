<template>
    <div id="Modal"
        class="fixed grid place-items-center  z-50 bottom-0 bg-black bg-opacity-50 backdrop-blur-md h-screen w-full">
        <div class="bg-white w-full max-w-[500px] rounded-lg text-white border border-gray-500 p-2">
            <button class="flex justify-between bg-white w-full p-3" @click="isCloseOverlay = false">
                <p class="text-[#030229] font-bold text-[16px]">Новая заметка</p>
                <Icon name="mdi:close" size="25" color="black" />
            </button>

            <form class="mx-auto  rounded-lg" @click.prevent="">
                <div class="flex flex-col gap-4 p-4 md:p-8">

                    <div>
                        <label for="adress" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Заголовок</label>
                        <input name="task_title"
                            v-model="form.task_title"
                            class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>

                    <div>
                        <label for="task_body" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Описание
                            заметки</label>
                        <textarea id="description" rows="4" v-model="form.task_body"
                            class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
                    </div>
                    <button
                                class="block rounded-lg bg-[#605BFF] px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base" @click="CreateTask">Добавить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTaskStore } from '../store/task';

const { addTask, getTask } = useTaskStore();
const { isCloseOverlay } = storeToRefs(useTaskStore());


const form = reactive({
    task_title: '',
    task_body: '',

})

const clearData = () => {
    form.task_title = ''
    form.task_body = ''
}

const CreateTask = async () => {
    await addTask(form)
    await getTask()
    clearData()
    isCloseOverlay.value = false 
}
</script>