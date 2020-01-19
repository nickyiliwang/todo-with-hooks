import React, { useState } from "react";

export default function CreateTask() {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    addTask(value);
    setValue("");
  };

  return (
    <form>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="what u wanna do son"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}
