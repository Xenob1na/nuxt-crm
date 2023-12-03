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
                            <div class="text-base font-semibold">{{ staff.name }}</div>
                            <div class="font-normal text-gray-500">{{ staff.email }}</div>
                        </div>
                    </th>
                    <td class="px-6 py-4">
                        {{ staff.phone }}
                    </td>
                    <td class="px-6 py-4">
                        {{ staff.adress }}
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
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-[10px] text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 flex items-center gap-2">
                            <span>
                                <svg width="13" height="13" viewBox="0 0 10 10" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8.45297 2.18449C8.61506 2.18449 8.75 2.31907 8.75 2.49032V2.64865C8.75 2.81573 8.61506 2.95448 8.45297 2.95448H1.54744C1.38494 2.95448 1.25 2.81573 1.25 2.64865V2.49032C1.25 2.31907 1.38494 2.18449 1.54744 2.18449H2.76232C3.0091 2.18449 3.22388 2.00907 3.27939 1.76158L3.34301 1.47741C3.44189 1.09033 3.76729 0.833252 4.1397 0.833252H5.8603C6.22866 0.833252 6.5577 1.09033 6.65293 1.457L6.72101 1.76116C6.77612 2.00907 6.9909 2.18449 7.23809 2.18449H8.45297ZM7.83576 7.97242C7.9626 6.79035 8.18466 3.98205 8.18466 3.95371C8.19277 3.86788 8.16481 3.78663 8.10929 3.72122C8.04972 3.65997 7.97435 3.62372 7.89128 3.62372H2.11189C2.02841 3.62372 1.94898 3.65997 1.89387 3.72122C1.83795 3.78663 1.81039 3.86788 1.81445 3.95371C1.81519 3.95892 1.82316 4.05784 1.83648 4.22322C1.89566 4.9579 2.06049 7.00415 2.167 7.97242C2.24237 8.68575 2.71041 9.13408 3.38836 9.15033C3.91151 9.16241 4.45047 9.16658 5.00158 9.16658C5.52068 9.16658 6.04789 9.16241 6.58725 9.15033C7.2887 9.13824 7.75634 8.69783 7.83576 7.97242Z"
                                        fill="white" />
                                </svg>
                            </span>
                            <span>Удалить</span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
const props = defineProps({
    staff: Object
})
const emit = defineEmits(['isDeleted'])
const isMenuEdit = ref(false)
</script>