<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100  ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        ФИО
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Номер телефона
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Адрес
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Должность
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Возраст
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Действия
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b rounded-[10px]  hover:bg-gray-50">
                    <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                        <div class="ps-3">
                            <div class="text-base font-semibold">{{ staff.full_name_staff }}</div>
                            <div class="font-normal text-gray-500">{{ staff.email }}</div>
                        </div>
                    </th>
                    <td class="px-6 py-4">
                        {{ staff.phone }}
                    </td>
                    <td class="px-6 py-4">
                        {{ staff.address }}
                    </td>
                    <td class="px-6 py-4">
                        {{ staff.post }}
                    </td>
                    <td class="px-6 py-4">
                        {{ staff.age }}
                    </td>
                    <td class="px-6 py-4 flex gap-2">
                        <nuxt-link :to="`/staff/edit-staff-${staff.id}`"
                            class="flex items-center gap-2 bg-[#605BFF] hover:bg-[#4b46c5] text-white transition duration-100 font-medium text-sm px-5 py-2.5 me-2 mb-2 rounded-[10px]">
                            <span>
                                <svg width="12" height="12" viewBox="0 0 8 8" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M2.90683 7.34496L6.56783 2.6106C6.76679 2.35529 6.83754 2.06012 6.77121 1.75958C6.71374 1.48636 6.54572 1.22657 6.29369 1.02949L5.67911 0.541277C5.14411 0.115766 4.48088 0.160557 4.10063 0.648774L3.68944 1.18223C3.63638 1.24897 3.64964 1.34751 3.71597 1.40125C3.71597 1.40125 4.75501 2.23436 4.77712 2.25227C4.84787 2.31946 4.90092 2.40904 4.91419 2.51654C4.9363 2.72705 4.79039 2.92413 4.57373 2.95101C4.47204 2.96444 4.37477 2.93309 4.30402 2.87486L3.21192 2.00593C3.15886 1.96606 3.07927 1.97457 3.03506 2.02832L0.439641 5.38761C0.271624 5.59813 0.214145 5.87135 0.271624 6.13561L0.603236 7.57339C0.620922 7.64953 0.687244 7.70328 0.766831 7.70328L2.22592 7.68537C2.49121 7.68089 2.73882 7.55995 2.90683 7.34496ZM4.94983 6.89712H7.32904C7.56116 6.89712 7.74996 7.08838 7.74996 7.32352C7.74996 7.55912 7.56116 7.74993 7.32904 7.74993H4.94983C4.7177 7.74993 4.52891 7.55912 4.52891 7.32352C4.52891 7.08838 4.7177 6.89712 4.94983 6.89712Z"
                                        fill="white" />
                                </svg>
                            </span>
                            <span>Редактировать
                            </span>
                        </nuxt-link>
                        <button type="button"
                            @click="deleteTask(staff.id)"
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-[10px] text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 flex items-center gap-2">
                            <Icon name="solar:trash-bin-trash-broken" size="20" />
                            <span>Удалить</span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import {useStaffStore} from "../store/staff"
const {getStaff} = useStaffStore()
const {isModalWarningStaff} = storeToRefs(useStaffStore())

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

const props = defineProps<{
    staff: StaffModel
}>()

const deleteTask = async (id: number) => {
    isModalWarningStaff.value = true
    try {
        await $fetch('http://localhost:5000/api/staffs/' + id, {
            method: 'DELETE',
        })
        await getStaff()
    } catch (error) {
        console.log(error)
    }
}
</script>