import React, { useState } from "react";
import "./Todo.css";
import Task from "./Task";

export default function Todo() {
  const [tasks, setTasks] = useState([
    { title: "Grab some food", completed: true },
    { title: "play some video games", completed: true },
    { title: "get a job", completed: false }
  ]);

  return (
    <div className="todo-container">
      <div className="header">TODO - ITEMS</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task task={task} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}
