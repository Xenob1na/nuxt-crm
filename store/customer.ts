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
    isModalWarningCustomer: false,
    currentPage: 1
  }),
  actions: {
    async getCustomer() {
      try {
        const result: any = await $fetch(`http://localhost:5000/api/customers?page=${this.currentPage}&limit=4`);
        this.customer = result?.data.rows as Customer[];
      } catch (error) {
        console.log(error);
      }
    },
  },
});
