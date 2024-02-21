import { defineStore } from "pinia";

interface Task {
  id: number;
  task_title: string;
  task_body: string;
  createdAt: string;
}

interface TaskCreate {
    task_title: string;
    task_body: string;
  }

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as Task[],
    isCloseOverlay: false,
    isModalWarning: false,
  }),
  actions: {
    async getTask() {
      try {
        const result: any = await $fetch("http://localhost:5000/api/tasks");
        this.tasks = result?.data as Task[];
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
