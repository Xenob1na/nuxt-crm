<template>
    <MainLayout>
        <div class="max-w-[1400px] mt-8 mb-3 ml-8">
            <div class="mb-8">
                <h1 class="text-[#030229] text-[24px] font-bold leading-normal">Добавить Сотрудника</h1>
            </div>

            <div class="bg-white py-6 sm:py-8 lg:py-12 rounded-[10px]">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

                    <form class="mx-auto rounded-lg" @click.prevent="">
                        <div class="flex flex-col gap-4 p-4 md:p-8">
                            <div>
                                <label for="fullName" class="mb-2 inline-block text-[#030229] text-base">ФИО Сотрудника</label>
                                <input name="fullName" v-model="form.full_name_staff"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <div>
                                <label for="email"
                                    class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Почта (email)</label>
                                <input name="email" v-model="form.email"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <div>
                                <label for="phone" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Номер
                                    телефона</label>
                                <input name="phone" v-model="form.phone"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <div>
                                <label for="adress"
                                    class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Адрес проживания</label>
                                <input name="adress" v-model="form.address"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <div>
                                <label for="post"
                                    class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Должность</label>
                                <input name="post" v-model="form.post"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <div>
                                <label for="age"
                                    class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Возраст</label>
                                <input name="age" v-model="form.age"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <!-- <div>

                                <label id="file" class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                   >Добавить резюме</label>
                                <input
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                    id="file" ref="file" type="file" v-on:change="handleFileUpload()" accept=".jpg, .jpeg, .png">

                            </div> -->

                            <button
                                class="block rounded-lg bg-[#605BFF] px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base"
                                @click="submitStaff">Сохранить</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    </MainLayout>
</template>

<script setup>
useHead({
    title: 'Добавить Сотрудника'
});
import MainLayout from '../layouts/MainLayout.vue'

const router = useRouter();

const form = reactive({
    full_name_staff: '',
    email: '',
    phone: '',
    address: '',
    post: '',
    age: ''
})

const submitStaff = async () => {
    try {
        await $fetch('http://localhost:5000/api/staffs', {
            method: 'POST',
            body: form,
        })

        router.push('/staff')
    } catch (err) {
        console.log(err)
    }
}

</script>