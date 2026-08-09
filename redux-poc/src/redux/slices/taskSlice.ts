import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskState = {
  tasks: Task[];
};

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "task",

  initialState,

  reducers: {
    addTask(state, action: PayloadAction<string>) {
      state.tasks.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },

    toggleTask(state, action: PayloadAction<number>) {
      const task = state.tasks.find(
        (task) => task.id === action.payload
      );

      if (task) {
        task.completed = !task.completed;
      }
    },

    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
    },
  },
});

export const {
  addTask,
  toggleTask,
  deleteTask,
} = taskSlice.actions;

export default taskSlice.reducer;