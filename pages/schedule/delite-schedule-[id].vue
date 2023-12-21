<template>
    <MainLayout>
        <div>
            {{ route.params.id }}
        </div>
        <div class="max-w-[1400px] mt-8 ml-8">
            <div class="mb-8">
                <h1 class="text-[#030229] text-[24px] font-bold leading-normal">Удаление заказа</h1>
            </div>

            <div class="bg-white py-6 sm:py-8 lg:py-12 rounded-[10px]">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

                    <form class="mx-auto  rounded-lg">
                        <div class="flex flex-col gap-4 p-4 md:p-8">
                            <div>

                                <label for="countries"
                                    class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Заказчик</label>
                                <select id="countries"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring">

                                    <option value="US">
                                        <li class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                                            <div class="ps-3">
                                                <div class="text-base font-semibold">Антон Иванов</div><br>
                                                <div class="font-normal text-gray-500">(anton@mail.ru)</div>
                                            </div>
                                        </li>
                                    </option>
                                </select>

                            </div>

                            <div>

                                <label for="countries"
                                    class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Сотрудник
                                    (Доставщик)</label>
                                <select id="countries"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring">

                                    <option value="US">
                                        <li class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                                            <div class="ps-3">
                                                <div class="text-base font-semibold">Иванов Иван</div>
                                                <div class="font-normal text-gray-500">(ivan@mail.ru)</div>
                                            </div>
                                        </li>
                                    </option>
                                </select>

                            </div>

                            <div>

                                <label for="countries" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Адрес
                                    доставки</label>
                                <select id="countries"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring">

                                    <option value="US">
                                        <li class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                                            <div class="ps-3">
                                                <div class="text-base font-semibold">Иванов Иван</div>
                                                <div class="font-normal text-gray-500">(Гагарина, 2)</div>
                                            </div>
                                        </li>
                                    </option>
                                </select>

                            </div>


                            <button
                                class="focus:outline-none  bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300  rounded-[10px]  me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 flex justify-center items-center gap-2 px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base">
                                <Icon name="solar:trash-bin-trash-broken" size="20" />
                                <span>Удалить</span>
                            </button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    </MainLayout>
</template>

<script setup>
useHead({
    title: 'Редактирование Заказа'
});
import MainLayout from '../layouts/MainLayout.vue'
const route = useRoute()
</script>