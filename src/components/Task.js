import React from "react";

export default function Task({ task, index, completeTask, deleteTask }) {
  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? "line-through" : "" }}
    >
      {task.title}
      <button onClick={() => deleteTask(index)}>Delete</button>
      <button onClick={() => completeTask(index)}>Complete</button>
    </div>
  );
}
