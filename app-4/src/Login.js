import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };

    this.loginUser = this.loginUser.bind(this);
  }

  updateUsername(event) {
    this.setState({ username: event });
  }

  updatePassword(event) {
    this.setState({ password: event });
  }

  loginUser() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.updateUsername(e.target.value)}
          type="text"
        />
        <input
          onChange={(e) => this.updatePassword(e.target.value)}
          type="text"
        />
        <button onClick={this.loginUser}>Login</button>
      </div>
    );
  }
}
