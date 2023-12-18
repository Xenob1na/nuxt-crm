<template>
  <div>
    <NuxtPage />

    <Modal :class="[
      { 'max-h-[100vh] transition-all duration-200 ease-in visible': isCloseOverlay },
      { 'max-h-0 transition-all duration-200 ease-out invisible': !isCloseOverlay },
    ]" />

    <ModalWarning :class="[
      { 'max-h-[100vh] transition-all duration-200 ease-in visible': isModalWarning },
      { 'max-h-0 transition-all duration-200 ease-out invisible': !isModalWarning },
    ]" />

    <ModalWarningCustomer :class="[
      { 'max-h-[100vh] transition-all duration-200 ease-in visible': isModalWarningCustomer },
      { 'max-h-0 transition-all duration-200 ease-out invisible': !isModalWarningCustomer },
    ]" />

    <ModalWarningStaff :class="[
      { 'max-h-[100vh] transition-all duration-200 ease-in visible': isModalWarningStaff },
      { 'max-h-0 transition-all duration-200 ease-out invisible': !isModalWarningStaff },
    ]" />



  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from './store/task';
import { useCustomerStore } from './store/customer';
import { useStaffStore } from "./store/staff"
const { isCloseOverlay, isModalWarning } = storeToRefs(useTaskStore());
const { isModalWarningCustomer } = storeToRefs(useCustomerStore());
const { isModalWarningStaff } = storeToRefs(useStaffStore());
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
