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
                                <label for="fullName" class="mb-2 inline-block text-[#030229] text-base">ФИО
                                    Сотрудника</label>
                                <input name="fullName" v-model="form.full_name_staff" :class="{ 'border-red-500': isValidName === false, 'border-green-500': isValidName === true }"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                                <div class="text-red-500 mt-2">{{ msgName }}</div>
                            </div>

                            <div>
                                <label for="email" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Почта
                                    (email)</label>
                                <input name="email" v-model="form.email" :class="{ 'border-red-500': isValidEmail === false, 'border-green-500': isValidEmail === true }"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                                <div class="text-red-500 mt-2">{{ msgEmail }}</div>
                            </div>

                            <div>
                                <label for="phone" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Номер
                                    телефона</label>
                                <input name="phone" v-model="form.phone" :class="{ 'border-red-500': isValidPhone === false, 'border-green-500': isValidPhone === true }"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                                <div class="text-red-500 mt-2">{{ msgPhone }}</div>
                            </div>

                            <div>
                                <label for="adress" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Адрес
                                    проживания</label>
                                <input name="adress" v-model="form.address" :class="{ 'border-red-500': isValidAddress === false, 'border-green-500': isValidAddress === true }"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                                <div class="text-red-500 mt-2">{{ msgAddress }}</div>
                            </div>

                            <div>
                                <label for="post"
                                    class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Должность</label>
                                <input name="post" v-model="form.post" :class="{ 'border-red-500': isValidPost === false, 'border-green-500': isValidPost === true }"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                                <div class="text-red-500 mt-2">{{ msgPost }}</div>
                            </div>

                            <div>
                                <label for="age"
                                    class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Возраст</label>
                                <input name="age" v-model="form.age" :class="{ 'border-red-500': isValidAge === false, 'border-green-500': isValidAge === true }"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                                <div class="text-red-500 mt-2">{{ msgAge }}</div>
                            </div>

                            <!-- <div>

                                <label id="file" class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                                   >Добавить резюме</label>
                                <input
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                                    id="file" ref="file" type="file">

                            </div> -->

                            <button
                                class="block rounded-lg bg-[#605BFF] hover:bg-[#4b46c5] px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base"
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
        if (form.full_name_staff && form.email && form.phone && form.address && form.post && form.age >= 18 && form.age !== '') {
            await $fetch('http://localhost:5000/api/staffs', {
                method: 'POST',
                body: form,
            })

            router.push('/staff')
        }
        startValidation.value = true
    } catch (err) {
        console.log(err)
    }
}

const startValidation = ref(false)
const msgEmail = ref('')
const isValidEmail = computed(() => {
    if (isValidEmail.value === null) {
        let text = 'Не верная почта'
        msgEmail.value = text
    } else {
        msgEmail.value = ''
    }

    return startValidation.value ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email) : null
})


const msgName = ref('')
const isValidName = computed(() => {
    if (isValidName.value === null) {
        let text = 'Заполните поле'
        msgName.value = text
    } else {
        msgName.value = ''
    }

    return startValidation.value ? form.full_name_staff !== '' : null
})

const msgPhone = ref('')
const isValidPhone = computed(() => {
    if (isValidPhone.value === null) {
        let text = 'Заполните поле'
        msgPhone.value = text
    } else {
        msgPhone.value = ''
    }

    return startValidation.value ? form.phone !== '' : null
})

const msgAddress = ref('')
const isValidAddress = computed(() => {
    if (isValidAddress.value === null) {
        let text = 'Заполните поле'
        msgAddress.value = text
    } else {
        msgAddress.value = ''
    }

    return startValidation.value ? form.address !== '' : null
})

const msgPost = ref('')
const isValidPost = computed(() => {
    if (isValidPost.value === null) {
        let text = 'Заполните поле'
        msgPost.value = text
    } else {
        msgPost.value = ''
    }

    return startValidation.value ? form.post !== '' : null
})

const msgAge = ref('')
const isValidAge = computed(() => {
    if (isValidAge.value === null) {
        let text = 'Заполните поле'
        msgAge.value = text
    } else {
        msgAge.value = ''
    }

    return startValidation.value ? form.age !== '' : null
})
</script>