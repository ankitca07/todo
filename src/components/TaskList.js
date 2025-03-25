import React from "react";

const priorityOrder = { High: 1, Medium: 2, Low: 3 };

export const TaskList = ({ tasks, onDeleteTask }) => {
  // Sort tasks by priority (High → Medium → Low)
  const sortedTasks = [...tasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return (
    <ul>
      {sortedTasks.map((task) => (
        <li key={task.id}>
          <strong>{task.text}</strong> - <span style={{ color: getColor(task.priority) }}>{task.priority}</span>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const getColor = (priority) => {
  switch (priority) {
    case "High": return "red";
    case "Medium": return "orange";
    case "Low": return "green";
    default: return "black";
  }
};
