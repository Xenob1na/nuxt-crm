<template>
    <div class="max-w-[660px] mx-auto mt-[150px]">
        <div class="bg-white py-6 sm:py-8 lg:py-12 rounded-[10px]">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <span class="flex justify-center mb-8">
                    <svg width="85" height="85" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M91.9748 47.5366C91.9916 47.0265 92 46.5142 92 46C92 20.5949 71.4051 0 46 0C21.8569 0 2.05802 18.5996 0.150532 42.2515L25.2158 54.5056C26.3308 52.1945 28.6962 50.5999 31.434 50.5999C33.8177 50.5999 35.9191 51.8086 37.1586 53.6466L56.8662 37.3879C56.779 36.9499 56.7333 36.4971 56.7333 36.0335C56.7333 32.2227 59.8225 29.1335 63.6333 29.1335C67.4441 29.1335 70.5333 32.2227 70.5333 36.0335C70.5333 36.2011 70.5273 36.3673 70.5156 36.5319L91.9748 47.5366ZM38.0427 55.51L57.5966 39.378C58.7739 41.4985 61.036 42.9335 63.6333 42.9335C66.5574 42.9335 69.0566 41.1146 70.0613 38.5466L91.8517 49.7211C89.9573 73.3861 70.1524 92 46 92C20.5949 92 0 71.4051 0 46C0 45.4702 0.00895498 44.9426 0.0267218 44.4172L24.6152 56.4382C24.5618 56.7843 24.534 57.1389 24.534 57.4999C24.534 61.3107 27.6233 64.3999 31.434 64.3999C35.2448 64.3999 38.334 61.3107 38.334 57.4999C38.334 56.8081 38.2322 56.1401 38.0427 55.51Z"
                            fill="#605BFF" />
                    </svg>
                </span>
                <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login</h2>
                <form class="mx-auto max-w-lg rounded-lg">
                    <div class="flex flex-col gap-4 p-4 md:p-8">
                        <div>
                            <label for="email" class="mb-2 inline-block text-[#030229] text-base">Email</label>
                            <input name="email"
                                class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                        </div>

                        <div>
                            <label for="password"
                                class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
                            <input name="password"
                                class="w-full rounded border bg-[#F7F7F8] px-4 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                        </div>

                        <button
                            class="block rounded-lg bg-[#605BFF] px-8 py-4 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 md:text-base">Log
                            in</button>

                        <div>
                            <nuxt-link to="/signup" class="text-[#605BFF] hover:text-[#4b46c5]">No account, create a new one</nuxt-link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Авторизоваться'
});
</script>