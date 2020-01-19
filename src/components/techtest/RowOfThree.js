import React from "react";
import "./Row.css";

export const RowOfThree = props => {
  return (
    <div style={{ display: "flex" }}>
      <div className="box" style={{ backgroundColor: props.color }}></div>
      <div className="box" style={{ backgroundColor: props.color }}></div>
      <div className="box" style={{ backgroundColor: props.color }}></div>
    </div>
  );
};
