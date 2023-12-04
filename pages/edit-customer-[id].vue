<template>
    <MainLayout>
        <div>
            {{ route.params.id }}
        </div>
        <div class="max-w-[1400px] mt-8 ml-8">
            <div class="mb-8">
                <h1 class="text-[#030229] text-[24px] font-bold leading-normal">Редактирование Клиента</h1>
            </div>

            <div class="bg-white py-6 sm:py-8 lg:py-12 rounded-[10px]">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

                    <form class="mx-auto  rounded-lg">
                        <div class="flex flex-col gap-4 p-4 md:p-8">
                            <div>
                                <label for="fullName" class="mb-2 inline-block text-[#030229] text-base">ФИО</label>
                                <input name="fullName"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <div>
                                <label for="email"
                                    class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
                                <input name="email"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <div>
                                <label for="phone" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Номер телефона</label>
                                <input name="phone"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <div>
                                <label for="adress" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Адрес</label>
                                <input name="adress"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <div>
                                <label for="description" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Описание задания</label>
                                <textarea id="description" rows="4"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                    ></textarea>
                            </div>

                            <button
                                class="block rounded-lg bg-[#605BFF] px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base">Сохранить</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    </MainLayout>
</template>

<script setup>
useHead({
    title: 'Редактирование Клиента'
});
import MainLayout from '../layouts/MainLayout.vue'
const route = useRoute()
</script>