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
                <StaffList v-for="staff in staffs" :key="staff.id" :staff="staff"
                    @isDeleted="staffs = []" />
            </div>
        </MainLayout>
    </div>
</template>

<script setup>
useHead({
    title: 'Список сотрудников'
});
import MainLayout from '../../layouts/MainLayout.vue'

const staffs = ref([])

onBeforeMount(() => {
    staffs.value = [
        {
            id: 1,
            name: 'John Doe',
            phone: '+33757005467',
            email: 'neil.sims@flowbite.com',
            age: 38,
            adress: 'New York No. 1 Lake Park',
            post: 'Tracker',
        },
        {
            id: 2,
            name: 'Stiven Doe',
            phone: '+33757005467',
            email: 'neil.sims@flowbite.com',
            age: 38,
            adress: 'New York No. 1 Lake Park',
            post: 'Tracker',
        }
    ]
})
</script>