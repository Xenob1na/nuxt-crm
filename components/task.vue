<template>
  <div>
    <div class="bg-white py-5 px-9 w-full rounded-[5px]">
      <div class="flex justify-between">
        <p class="text-[#030229] font-bold text-[16px]">
          {{ items.title }}
        </p>
        <div @click="isMenu = !isMenu" class="relative">
          <button :disabled="isDeleting"
            class="flex items-center text-white p-1 h-[24px] w-[24px] hover:bg-[#cecece] rounded-full cursor-pointer"
            :class="isMenu ? 'bg-[#cecece]' : ''">
            <Icon v-if="!isDeleting" name="bi:three-dots" size="18" color="black" />
            <Icon v-else name="eos-icons:bubble-loading" size="18" color="black" />
          </button>

          <div v-if="isMenu" class="absolute border right-0 z-20 mt-1 rounded">
            <button
              class="flex items-center rounded gap-2 text-red-500 justify-between bg-white w-full pl-4 pr-3 py-1 hover:bg-[#cecece]">
              <div>Удалить</div>
              <Icon name="solar:trash-bin-trash-broken" size="20" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <p class="text-[#030229] text-[14px]">{{ items.body }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  items: Object
})
const emit = defineEmits(['isDeleted'])

const isMenu = ref(false)
const isDeleting = ref(false)
</script>
