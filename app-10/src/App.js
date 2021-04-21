import React, { Component } from "react";
import "./App.css";
import router from "./router";

export default class App extends Component {
  render() {
    return <div className="App">{router}</div>;
  }
}
