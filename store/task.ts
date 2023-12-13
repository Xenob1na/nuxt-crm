import { defineStore } from "pinia";

interface Task {
  task_id: number;
  task_title: string;
  task_body: string;
  created_date: string;
}

interface TaskCreate {
    task_title: string;
    task_body: string;
  }

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as Task[],
    isLogoutOverlay: false,
  }),
  actions: {
    async getTask() {
      try {
        const result = await $fetch("http://localhost:5000/api/tasks");
        this.tasks = result as Task[];
      } catch (error) {
        console.log(error);
      }
    },

    async addTask({task_title, task_body}: TaskCreate) {
      try {
        await $fetch("http://localhost:5000/api/tasks", {
          method: "POST",
          body: {
            task_title,
            task_body
          },
        });
        this.getTask();
      } catch (error) {
        console.log(error);
      }
    }
  },
});
