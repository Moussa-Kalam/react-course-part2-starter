import { create } from 'zustand';

interface Task {
  id: number;
  title: string;
}

interface TasksStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (taskId: number) => void;
}

const useTaskStore = create<TasksStore>((set) => ({
  tasks: [],
  addTask: (task) => set((store) => ({ tasks: [task, ...store.tasks] })),
  deleteTask: (taskId) =>
    set((store) => ({ tasks: store.tasks.filter((t) => t.id !== taskId) })),
}));

export default useTaskStore;
