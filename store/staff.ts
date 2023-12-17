import { defineStore } from "pinia";

interface StaffModel {
    staff_id: number;
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
    }),
    actions: {
        async getStaff() {
            try {
                const result = await $fetch("http://localhost:5000/api/staffs")
                this.staff = result as StaffModel[]
            } catch (error) {
                console.log(error)
            }
        }
    }
})