import React, { Component } from "react";

export default class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
    };

    this.handleNewTask = this.handleNewTask.bind(this);
  }

  handleInputChange(event) {
    this.setState({ input: event });
  }

  handleNewTask() {
    //Adds to props here
    this.props.add(this.state.input);
    //Sets input back to empty so more items can be added
    this.setState({ input: "" });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder="Enter new task"
          onChange={(e) => this.handleInputChange(e.target.value)}
        />

        <button onClick={this.handleNewTask}>Add</button>
      </div>
    );
  }
}
