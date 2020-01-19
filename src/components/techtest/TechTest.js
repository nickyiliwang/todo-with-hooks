import React, { Component } from "react";
import { RowOfThree } from "./RowOfThree";

export default class TechTest extends Component {
  state = {
    rows: ["red", "blue", "red"]
  };

  handleSwapOnClick = () => {
    const swapped = this.state.rows.map(row => {
      return row === "red" ? (row = "blue") : (row = "red");
    });

    this.setState({
      rows: swapped
    });
  };

  handleAddOnClick = () => {
    if (this.state.rows[this.state.rows.length - 1] === "red") {
      this.setState({
        rows: [...this.state.rows, "blue"]
      });
    } else {
      this.setState({
        rows: [...this.state.rows, "red"]
      });
    }
  };

  handleRemoveOnClick = () => {
    const removedLastItem = [...this.state.rows];
    removedLastItem.pop();
    this.setState({
      rows: removedLastItem
    });
  };

  renderRows = () => {
    return this.state.rows.map((row, i) => {
      return (
        <div key={i}>
          <RowOfThree color={row} />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        {this.renderRows()}
        <button onClick={this.handleSwapOnClick}>SWAPPER</button>
        <button onClick={this.handleAddOnClick}>ADDER</button>
        <button onClick={this.handleRemoveOnClick}>REMOVER</button>
      </div>
    );
  }
}
