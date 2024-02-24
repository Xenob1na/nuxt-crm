<template>
    <MainLayout>
        <div class="max-w-[1400px] mt-8 ml-8">
            <div class="mb-8">
                <h1 class="text-[#030229] text-[24px] font-bold leading-normal">Добавить Клиента</h1>
            </div>

            <div class="bg-white py-6 sm:py-8 lg:py-12 rounded-[10px]">
                <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

                    <form class="mx-auto  rounded-lg" @click.prevent="">
                        <div class="flex flex-col gap-4 p-4 md:p-8">
                            <div>
                                <label for="fullName" class="mb-2 inline-block text-[#030229] text-base">ФИО</label>
                                <input name="fullName" v-model="form.full_name_customer" :class="{ 'border-red-500': isValidName === false, 'border-green-500': isValidName === true }"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                                    <div class="text-red-500 mt-2">{{ msgName }}</div>
                            </div>

                            <div>
                                <label for="email"
                                    class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
                                <input name="email" v-model="form.email"
                                    :class="{ 'border-red-500': isValidEmail === false, 'border-green-500': isValidName === true }"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                                <div class="text-red-500 mt-2">{{ msgEmail }}</div>
                            </div>

                            <div>
                                <label for="phone" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Номер
                                    телефона</label>
                                <input name="phone" v-model="form.phone" :class="{ 'border-red-500': isValidTel === false, 'border-green-500': isValidName === true }"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                                    <div class="text-red-500 mt-2">{{ msgTel }}</div>
                            </div>

                            <div>
                                <label for="adress"
                                    class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Адрес</label>
                                <input name="adress" v-model="form.address" :class="{ 'border-red-500': isValidAddress === false, 'border-green-500': isValidName === true }"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                                    <div class="text-red-500 mt-2">{{ msgAddress }}</div>
                            </div>

                            <div>
                                <label for="description"
                                    class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Описание задания</label>
                                <textarea id="description" rows="4" v-model="form.description" :class="{ 'border-red-500': isValidDes === false, 'border-green-500': isValidName === true }"
                                    class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
                                    <div class="text-red-500 mt-2">{{ msgDesc }}</div>
                            </div>

                            <button
                                class="block rounded-lg bg-[#605BFF] px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base"
                                @click="submitCustomer">Сохранить</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    </MainLayout>
</template>

<script setup lang="ts">
useHead({
    title: 'Добавить Клиента'
});
import MainLayout from '../layouts/MainLayout.vue'

const router = useRouter()

const form = reactive({
    full_name_customer: '',
    email: '',
    phone: '',
    address: '',
    description: '',
})

const submitCustomer = async () => {
    try {
        if (form.full_name_customer && form.email && form.phone && form.address && form.description !== '') {
            await $fetch("http://localhost:5000/api/customers", {
                method: "POST",
                body: form,
            });
            router.push('/')
        }
        startValidation.value = true
    } catch (error) {
        console.log(error);
    }
}

const startValidation = ref(false)
const msgEmail = ref('')
const isValidEmail = computed(() => {
    if (isValidEmail.value === null) {
        let text = 'Не верная почта'
        msgEmail.value = text
    }else{
        msgEmail.value = ''
    }

    return startValidation.value ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email) : null
})

const msgName = ref('')
const isValidName = computed(() => {
    if (isValidName.value === null) {
        let text = 'Заполните поле'
        msgName.value = text
    } 

    if (isValidName.value === true) {
        msgName.value = ''
    }

    return startValidation.value ? form.full_name_customer !== '' : null
})

const msgTel = ref('')
const isValidTel = computed(() => {
    if (isValidTel.value === null) {
        let text = 'Заполните поле'
        msgTel.value = text
    }else {
        msgTel.value = ''
    }

    return startValidation.value ? form.phone !== '' : null
})

const msgAddress = ref('')
const isValidAddress = computed(() => {
    if (isValidAddress.value === null) {
        let text = 'Заполните поле'
        msgAddress.value = text
    }else {
        msgAddress.value = ''
    }

    return startValidation.value ? form.address !== '' : null
})

const msgDesc = ref('')
const isValidDes = computed(() => {
    if (isValidDes.value === null) {
        let text = 'Заполните поле'
        msgDesc.value = text
    }else {
        msgDesc.value = ''
    }

    return startValidation.value ? form.description !== '' : null
})
</script>