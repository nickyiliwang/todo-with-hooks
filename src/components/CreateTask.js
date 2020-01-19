import React, { useState } from "react";

export default function CreateTask(props) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    props.addTask(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
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
