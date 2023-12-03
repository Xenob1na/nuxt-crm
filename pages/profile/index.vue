<template>
    <MainLayout>
        <div class="max-w-[1400px] mt-8 ml-8">
            <div class="flex items-center justify-between mb-8">
                <h1 class="text-[#030229] text-[24px] font-bold leading-normal">Мой профиль</h1>
                <div>
                    <nuxt-link to="/">
                        <button
                            class="flex items-center gap-[10px] bg-[#605BFF] hover:bg-[#4b46c5] transition duration-100 py-4 px-5 rounded-[10px]">
                            <Icon name="entypo:back" color="white" width="22" height="22" />
                            <p class="text-white tetx-[16px] font-medium">Назад</p>
                        </button>
                    </nuxt-link>
                </div>
            </div>

            <div class="bg-white py-6 sm:py-8 lg:py-12 rounded-[10px]">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

                    <form class="mx-auto  rounded-lg">
                        <div class="flex flex-col gap-4 p-4 md:p-8">
                            <div class="flex items-center space-x-6">
                                <div class="shrink-0">
                                    <img id='preview_img' class="h-16 w-16 object-cover rounded-full"
                                        src="/man.png"
                                        alt="Current profile photo" />
                                </div>
                                <label class="block">
                                    <span class="sr-only">Выберите фотографию профиля</span>
                                    <input type="file" onchange="loadFile(event)" class="block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-violet-50 file:text-violet-700
        hover:file:bg-violet-100
      " />
                                </label>
                            </div>

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
                                <label for="adress"
                                    class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Адрес</label>
                                <input name="adress"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <div>
                                <label for="post" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Должность</label>
                                <input name="post"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <div>
                                <label for="age" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Возраст</label>
                                <input name="age"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
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
import MainLayout from '../../layouts/MainLayout.vue'
</script>