import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, loadTasks } from "../redux/taskSlice";

const TaskList = () => {
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Medium"); // Default priority
  const tasks = useSelector((state) => state.tasks.list);
  const dispatch = useDispatch();

  // Load tasks from local storage on mount
  useEffect(() => {
    dispatch(loadTasks());
  }, [dispatch]);

  const handleAddTask = () => {
    if (taskText.trim() === "") return;
    dispatch(addTask({ text: taskText, priority }));
    setTaskText(""); // Clear input after adding
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddTask();
  };

  return (
    <div className="container">
      <h2>Task List</h2>

      {/* Input Field for Task */}
      <div className="input-group">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter your task..."
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">🔥 High</option>
          <option value="Medium">⚡ Medium</option>
          <option value="Low">💧 Low</option>
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Task List */}
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={task.id}
            className={`priority-${task.priority.toLowerCase()}`}
          >
            <span className="task-number">{index + 1}.</span>
            <span className="task-text">{task.text}</span>

            <button
              className="delete-btn"
              onClick={() => dispatch(removeTask(task.id))}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
