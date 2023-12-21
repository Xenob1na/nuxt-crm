<template>
    <nuxt-link :to="`/schedule/delite-schedule-${items.id}`">
        <div class="bg-white py-5 px-9 w-full rounded-[5px] hover:bg-gray-100 cursor-pointer transition duration-100">
            <div class="flex justify-between">
                <h3 class="text-[#030229] font-bold text-[18px]">Заказчик</h3>
                <p class="text-[#030229] font-medium text-[16px]">
                    {{ items.name }}
                </p>
            </div>
            <div class="flex justify-between mt-2">
                <h3 class="text-[#030229] font-bold text-[18px]">Сотудник</h3>
                <p class="text-[#030229] font-medium text-[16px]">
                    {{ items.name }}
                </p>
            </div>
            <div class="flex justify-between mt-2">
                <h3 class="text-[#030229] font-bold text-[18px]">Адрес</h3>
                <p class="text-[#030229] font-medium text-[16px]">
                    {{ items.adress }}
                </p>
            </div>
            <div class="border-b border-b-gray-700 my-1" />
            <div class="mt-2">
                <h3 class="text-[#030229] font-bold text-[18px]">Детали заказа</h3>
                <p class="text-[#030229] font-medium text-[16px] mt-2">
                    Перевозка стула, на Омская 36/2
                </p>
            </div>
            <div class="flex justify-end mt-5">
                <p class="text-[#030229] text-[14px] font-bold flex items-center gap-2">
                    <Icon name="fluent-mdl2:event-date" color="black" width="16" height="16" />
                    <span>04 Декабря 2023</span>
                </p>
            </div>
        </div>
    </nuxt-link>
</template>

<script setup>
const props = defineProps({
    items: Object
})
</script>