<template>
    <div id="Modal"
        class="fixed grid place-items-center  z-50 bottom-0 bg-black bg-opacity-50 backdrop-blur-md h-screen w-full">
        <div class="bg-white w-full max-w-[500px] rounded-lg text-white border border-gray-500 p-2">
            <button @click="closeModal" class="flex justify-between bg-white w-full p-3">
                <p class="text-[#030229] font-bold">Добавить заказ</p>
                <Icon name="mdi:close" size="25" color="black" />
            </button>

            <form class="mx-auto  rounded-lg">
                <div class="flex flex-col gap-4 p-4 md:p-8">

                    <div>

                        <label for="countries" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Выберите
                            заказчика</label>
                        <select id="countries"
                            class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring">

                            <option value="US" v-for="item in items">
                                <li class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                                    <div class="ps-3">
                                        <div class="text-base font-semibold">{{ item.name }}</div><br>
                                        <div class="font-normal text-gray-500">({{ item.email }})</div>
                                    </div>
                                </li>
                            </option>
                        </select>

                    </div>

                    <div>

                        <label for="countries" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Выберите
                            Сотрудника</label>
                        <select id="countries"
                            class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring">

                            <option value="US" v-for="item in items">
                                <li class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                                    <div class="ps-3">
                                        <div class="text-base font-semibold">{{ item.name }}</div>
                                        <div class="font-normal text-gray-500">({{ item.email }})</div>
                                    </div>
                                </li>
                            </option>
                        </select>

                    </div>

                    <div>

                        <label for="countries" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Адрес</label>
                        <select id="countries"
                            class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring">

                            <option value="US" v-for="item in items">
                                <li class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                                    <div class="ps-3">
                                        <div class="text-base font-semibold">{{ item.name }}</div>
                                        <div class="font-normal text-gray-500">({{ item.adress }})</div>
                                    </div>
                                </li>
                            </option>
                        </select>

                    </div>

                    <div>

                        <label for="countries"
                            class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Состояние</label>
                        <select id="countries"
                            class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring">

                            <option value="US">
                                В работе
                            </option>
                            <option value="US">
                                Завершено
                            </option>
                        </select>

                    </div>
                    <button
                        class="block rounded-lg bg-[#605BFF] px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base">Добавить</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['close'])

const props = defineProps({
    items: Object
})

const closeModal = () => {
    emit('close')
}
</script>