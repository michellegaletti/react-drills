import React from "react";
import "./App.css";

import router from "./router";
import { Link } from "react-router-dom";
import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <nav>
          <ul>
            <Link className="navList" to="/">
              Home
            </Link>
            <Link className="navList" to="/signup">
              Signup
            </Link>
            <Link className="navList" to="/details">
              Details
            </Link>
          </ul>
        </nav>
        <br />
        {router}
      </div>
    );
  }
}
