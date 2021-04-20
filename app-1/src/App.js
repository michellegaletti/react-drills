import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
    };
  }

  handleChange(event) {
    this.setState({ userInput: event });
  }

  render() {
    return (
      <div className="App1">
        <input
          className="inputText"
          onChange={(e) => this.handleChange(e.target.value)}
        />
        <span className="results">{this.state.userInput}</span>
      </div>
    );
  }
}
