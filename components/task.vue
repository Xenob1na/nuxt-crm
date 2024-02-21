<template>
  <div>
    <div class="bg-white py-5 px-9 w-full rounded-[5px]">
      <div class="flex justify-between">
        <p class="text-[#030229] font-bold text-[16px]">
          {{ items.task_title }}
        </p>
        <div @click="isMenu = !isMenu" class="relative">
          <button :disabled="isDeleting"
            class="flex items-center text-white p-1 h-[24px] w-[24px] hover:bg-[#cecece] rounded-full cursor-pointer"
            :class="isMenu ? 'bg-[#cecece]' : ''">
            <Icon v-if="!isDeleting" name="bi:three-dots" size="18" color="black" />
            <Icon v-else name="eos-icons:bubble-loading" size="18" color="black" />
          </button>

          <div v-if="isMenu" class="absolute border right-0 z-20 mt-1 rounded">
            <button @click="deleteTask(items.id)"
              class="flex items-center rounded gap-2 text-red-500 justify-between bg-white w-full pl-4 pr-3 py-2 hover:bg-[#e1e1e1]">
              <div>Удалить</div>
              <Icon name="solar:trash-bin-trash-broken" size="20" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <p class="text-[#030229] text-[14px]">{{ items.task_body }}</p>
      </div>
      <div class="flex justify-end mt-4">
        <p class="text-[#030229] text-[14px] font-bold flex items-center gap-2">
          <Icon name="fluent-mdl2:event-date" color="black" width="16" height="16" />
          <span>{{ displayableDate(items.createdAt) }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useTaskStore } from '../store/task';
const { isModalWarning } = storeToRefs(useTaskStore())

interface Task {
  id: number;
  task_title: string;
  task_body: string;
  createdAt: string;
}

const props = defineProps<{
  items: Task
}>()
const emit = defineEmits(['isDeleted'])

const displayableDate = (date: any) => {
  return new Intl.DateTimeFormat(
    'ru-RU',
    { dateStyle: 'full' },
  ).format(new Date(date))
}

const deleteTask = async (id: Number) => {
  isModalWarning.value = true

  try {
    isMenu.value = false
    isDeleting.value = true

    await $fetch('http://localhost:5000/api/tasks/' + id, {
      method: 'DELETE',
    })
    emit('isDeleted', true)
    isDeleting.value = false
  } catch (error) {
    console.log(error)
  }
}

const isMenu = ref(false)
const isDeleting = ref(false)
</script>
