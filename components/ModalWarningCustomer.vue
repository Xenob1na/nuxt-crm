<template>
    <div id="Modal"
        class="fixed grid place-items-center  z-50 bottom-0 bg-black bg-opacity-50 backdrop-blur-md h-screen w-full">
        <div class="bg-white w-full max-w-[500px] rounded-lg text-white border border-gray-500 p-2">
            <button class="flex justify-between bg-white w-full p-3" @click="isModalWarningCustomer = false">
                <p class="text-[#030229] font-bold text-[16px]">Внимание</p>
                <Icon name="mdi:close" size="25" color="black" />
            </button>

            <div class="text-center">
                <p class="text-[#030229] font-bold text-[20px] p-3">Вы удалили клиента</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCustomerStore } from '../store/customer';
const { isModalWarningCustomer } = storeToRefs(useCustomerStore());
</script>