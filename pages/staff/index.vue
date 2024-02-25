<template>
    <div>
        <MainLayout>
            <div class="max-w-[1400px] mt-8 ml-8">
                <div class="flex items-center justify-between">
                    <h1 class="text-[#030229] text-[24px] font-bold leading-normal">Список сотрудников</h1>
                    <div>
                        <nuxt-link to="/staff/add-staff">
                            <button
                                class="flex items-center gap-2 bg-[#605BFF] hover:bg-[#4b46c5] transition duration-100 py-4 px-5 rounded-[10px]">
                                <Icon name="ic:round-plus" color="white" width="24" height="24" />
                                <p class="text-white tetx-[16px] font-medium">Добавить сотрудника</p>
                            </button>
                        </nuxt-link>
                    </div>
                </div>

                <ClientOnly>

                    <template #fallback>

                        <div class="text-black mx-auto flex flex-col items-center justify-center">
                            <Icon name="line-md:downloading-loop" size="50" color="black" />
                            <div class="text-black">Загрузка данных...</div>
                        </div>
                    </template>
                </ClientOnly>

                <div v-if="isLoading">
                    <div class="text-black mx-auto flex flex-col items-center justify-center">
                        <Icon name="line-md:downloading-loop" size="50" color="black" />
                        <div class="text-black">Загрузка данных...</div>
                    </div>
                </div>

                <div v-else-if="isStaff">
                    <StaffList v-for="Staff in staffs" :key="Staff.id" :staff="Staff" />
                </div>

                <div class="flex items-center justify-between mt-4">
                    <button @click="loadMoreBack"
                        class="rounded-lg bg-[#605BFF] hover:bg-[#4b46c5] flex items-center   px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base">
                        <Icon name="grommet-icons:form-next" color="white" width="24" height="24" class="rotate-180" />
                        <span>Назад</span>
                    </button>
                    <button @click="loadMoreNext"
                        class="rounded-lg bg-[#605BFF] hover:bg-[#4b46c5]  px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base">
                        <span>Вперед</span>
                        <Icon name="grommet-icons:form-next" color="white" width="24" height="24" />
                    </button>
                </div>
            </div>
        </MainLayout>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Список сотрудников'
});
import MainLayout from '../../layouts/MainLayout.vue'
import { storeToRefs } from 'pinia'
import { useStaffStore } from "../../store/staff"

const { getStaff } = useStaffStore()
const { staff, currentPage } = storeToRefs(useStaffStore())

interface StaffModel {
    id: number;
    full_name_staff: string;
    email: string;
    phone: string;
    address: string;
    post: string;
    age: string;
    add_resume: any;
}

const staffs = ref<StaffModel[]>([])
const isLoading = ref(false)
const isStaff = ref(false)

onMounted(async () => {
    isLoading.value = true
    try {
        await getStaff()
        isLoading.value = false
    } catch (error) {
        console.log(error)
        isLoading.value = false
    }
})

onBeforeMount(() => {
    watchEffect(() => {
        staffs.value = staff.value
        if (staff && staff.value.length >= 1) {
            isStaff.value = true
        } else {
            isStaff.value = false
        }
    })
})

watch(() => staffs.value, () => {
    staffs.value = staff.value
    if (staff && staff.value.length >= 1) {
        isStaff.value = true
    } else {
        isStaff.value = false
    }
}, { deep: true })


const loadMoreNext = async () => {
    isLoading.value = true
    try {
        currentPage.value++
        await getStaff()
        isLoading.value = false
    } catch (error) {
        console.log(error)
        isLoading.value = false
    }
}

const loadMoreBack = async () => {
    isLoading.value = true
    try {
        currentPage.value--
        await getStaff()
        isLoading.value = false
    } catch (error) {
        console.log(error)
        isLoading.value = false
    }
}
</script>