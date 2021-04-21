import React, { Component } from "react";
import "./App.css";
import NewTask from "./NewTask";
import List from "./List";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(task) {
    this.setState({ list: [...this.state.list, task] });
  }

  render() {
    return (
      <div className="app">
        <h1>My To-do List:</h1>
        <NewTask add={this.handleAddTask} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}
