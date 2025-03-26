import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  removeTask,
  updateTask,
  toggleComplete,
  loadTasks,
} from "../redux/taskSlice";

const TaskList = () => {
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [editingTask, setEditingTask] = useState(null);

  const tasks = useSelector((state) => state.tasks.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const handleAddTask = () => {
    if (taskText.trim() === "") return;
    if (editingTask) {
      dispatch(updateTask({ id: editingTask, text: taskText, priority }));
      setEditingTask(null);
    } else {
      dispatch(addTask({ text: taskText, priority }));
    }
    setTaskText("");
  };

  return (
    <div className="container">
      <h2>Task List</h2>

     
      <div className="input-group">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter your task..."
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">🔥 High</option>
          <option value="Medium">⚡ Medium</option>
          <option value="Low">💧 Low</option>
        </select>
        <button onClick={handleAddTask}>
          {editingTask ? "Update Task" : "Add Task"}
        </button>
      </div>

     
      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`priority-${task.priority.toLowerCase()}`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(toggleComplete(task.id))}
            />
            <span className={`task-text ${task.completed ? "completed" : ""}`}>
              {task.text}
            </span>

            <button
              onClick={() => {
                setTaskText(task.text);
                setEditingTask(task.id);
              }}
            >
              ✏️
            </button>
            <button onClick={() => dispatch(removeTask(task.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
