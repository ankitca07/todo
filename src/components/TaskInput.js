import React, { useState } from "react";

export const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAddTask({
        id: Date.now(),
        text: task,
        priority, 
      });
      setTask("");
      setPriority("Medium"); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};
