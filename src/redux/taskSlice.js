import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
};

const saveToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: { list: loadFromLocalStorage() },
  reducers: {
    addTask: (state, action) => {
      const newTask = { id: Date.now(), ...action.payload };
      state.list.push(newTask);
      saveToLocalStorage(state.list);
    },
    removeTask: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload);
      saveToLocalStorage(state.list);
    },
    loadTasks: (state) => {
      state.list = loadFromLocalStorage();
    },
  },
});

export const { addTask, removeTask, loadTasks } = taskSlice.actions;
export default taskSlice.reducer;
