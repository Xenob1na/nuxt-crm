<template>
    <MainLayout>
        <div class="max-w-[1400px] mt-8 mb-3 ml-8">
            <div class="mb-8">
                <h1 class="text-[#030229] text-[24px] font-bold leading-normal">Редактирование Сотрудника</h1>
            </div>

            <div class="bg-white py-6 sm:py-8 lg:py-9 rounded-[10px]">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

                    <form class="mx-auto  rounded-lg" @click.prevent="">
                        <div class="flex flex-col gap-4 p-4 md:p-8">
                            <div>
                                <label for="fullName" class="mb-2 inline-block text-[#030229] text-base">ФИО</label>
                                <input name="fullName" v-model="form.full_name_staff"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <div>
                                <label for="email"
                                    class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
                                <input name="email" v-model="form.email"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <div>
                                <label for="phone" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Номер
                                    телефона</label>
                                <input name="phone"
                                v-model="form.phone"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <div>
                                <label for="adress"
                                    class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Адрес</label>
                                <input name="adress"
                                v-model="form.address"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <div>
                                <label for="post"
                                    class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Должность</label>
                                <input name="post"
                                v-model="form.post"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <div>
                                <label for="age"
                                    class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Возраст</label>
                                <input name="age"
                                v-model="form.age"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            </div>

                            <!-- <div>

                                <label class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                    for="file_input">Добавить резюме</label>
                                <input
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                    id="file_input" type="file">

                            </div> -->

                            <button
                                class="block rounded-lg bg-[#605BFF] px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base" @click="updatedCustomer">Сохранить</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    </MainLayout>
</template>

<script setup lang="ts">
useHead({
    title: 'Редактирование Сотрудника'
});
import MainLayout from '../../layouts/MainLayout.vue'
const route = useRoute()
const router = useRouter()

interface StaffModel {
    staff_id: number;
    full_name_staff: string;
    email: string;
    phone: string;
    address: string;
    post: string;
    age: string;
    add_resume: any;
}


const form = reactive({
    full_name_staff: '',
    email: '',
    phone: '',
    address: '',
    post: '',
    age: ''
})

const updatedCustomer = async () => {
    try {
        await $fetch('http://localhost:5000/api/staffs/' + route.params.id, {
            method: 'PUT',
            body: form
        })
        router.push('/staff')
    } catch (error) {
        console.log(error)
    }
}

const fetchData = async () => {
    try {
        const result = await $fetch('http://localhost:5000/api/staffs/' + route.params.id);
        const data = result as StaffModel;

        form.full_name_staff = data.full_name_staff;
        form.email = data.email;
        form.phone = data.phone;
        form.address = data.address;
        form.post = data.post;
        form.age = data.age;

    } catch (error) {
        console.log(error);
    }
}

onMounted(() => fetchData())
</script>