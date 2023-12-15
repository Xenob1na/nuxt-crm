import { defineStore } from "pinia";

interface Customer {
  customer_id: number;
  full_name_customer: string;
  email: string;
  phone: string | number;
  address: string;
  description: string;
}

export const useCustomerStore = defineStore("customer", {
  state: () => ({
    customer: [] as Customer[],
    isModalWarningCustomer: false
  }),
  actions: {
    async getCustomer() {
      try {
        const result = await $fetch("http://localhost:5000/api/customers");
        this.customer = result as Customer[];
      } catch (error) {
        console.log(error);
      }
    },
  },
});
