import { defineStore } from "pinia";

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

export const useStaffStore = defineStore("staff", {
    state: () => ({
        staff: [] as StaffModel[],
        isModalWarningStaff: false,
        currentPage: 1
    }),
    actions: {
        async getStaff() {
            try {
                const result: any = await $fetch(`http://localhost:5000/api/staffs?page=${this.currentPage}&limit=4`)
                this.staff = result?.data.rows as StaffModel[]
            } catch (error) {
                console.log(error)
            }
        }
    }
})