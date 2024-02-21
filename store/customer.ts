import { defineStore } from "pinia";

interface Customer {
  id: number;
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
        const result: any = await $fetch("http://localhost:5000/api/customers");
        this.customer = result?.data as Customer[];
      } catch (error) {
        console.log(error);
      }
    },
  },
});
