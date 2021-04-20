import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      food: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"],
    };
  }

  render() {
    let foodList = this.state.food.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });
    return <div className="app">{foodList}</div>;
  }
}
