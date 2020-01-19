import React, { useState, useEffect } from "react";
import "./Todo.css";
import Task from "./Task";
import CreateTask from "./CreateTask";

export default function Todo() {
  const [tasks, setTasks] = useState([
    { title: "Grab some food", completed: true },
    { title: "play some video games", completed: true },
    { title: "get a job", completed: false }
  ]);

  const [tasksRemaining, setTasksRemaining] = useState(0);

  useEffect(() => {
    setTasksRemaining(tasks.filter(task => !task.completed).length);
  });

  const [count, setCount] = useState(1);

  const addTask = title => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = index => {
    const newTasks = tasks.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTasks(newTasks);
  };

  const deleteTask = index => {
    const newTasks = tasks.filter((todo, i) => i !== index);
    setTasks(newTasks);
  };

  const handleOnClick = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div className="todo-container">
      <div className="header">Todo with task remaining {tasksRemaining}</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            completeTask={completeTask}
            deleteTask={deleteTask}
            key={index}
          />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
      <h2>{count}</h2>
      <button onClick={handleOnClick}>Increment</button>
    </div>
  );
}
