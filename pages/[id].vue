<template>
    <MainLayout>
        <div>
            {{ route.params.id }}
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
const route = useRoute()
</script>