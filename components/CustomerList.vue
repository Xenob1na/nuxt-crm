<template>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-100  ">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Phone number
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b rounded-[10px]  hover:bg-gray-50">
                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                            <img class="w-10 h-10 rounded-full"
                                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Jese image">
                            <div class="ps-3">
                                <div class="text-base font-semibold">{{ customers.name }}</div>
                                <div class="font-normal text-gray-500">{{ customers.email }}</div>
                                {{ customers.id }}
                            </div>
                        </th>
                        <td class="px-6 py-4">
                            {{ customers.phone }}
                        </td>
                        <td class="px-6 py-4">
                            <nuxt-link :to="`${customers.id}`" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                Edit customer
                            </nuxt-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>

<script setup>
const props = defineProps({
    customers: Object
})
const emit = defineEmits(['isDeleted'])
const isMenuEdit = ref(false)
</script>