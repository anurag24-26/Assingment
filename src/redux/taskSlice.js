import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: JSON.parse(localStorage.getItem("tasks")) || [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    loadTasks: (state) => {
      state.list = JSON.parse(localStorage.getItem("tasks")) || [];
    },
    addTask: (state, action) => {
      const newTask = { id: Date.now(), ...action.payload, completed: false };
      state.list.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.list));
    },
    removeTask: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.list));
    },
    updateTask: (state, action) => {
      const task = state.list.find((t) => t.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
        task.priority = action.payload.priority;
      }
      localStorage.setItem("tasks", JSON.stringify(state.list));
    },
    toggleComplete: (state, action) => {
      const task = state.list.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
      localStorage.setItem("tasks", JSON.stringify(state.list));
    },
  },
});

export const { loadTasks, addTask, removeTask, updateTask, toggleComplete } =
  taskSlice.actions;
export default taskSlice.reducer;
