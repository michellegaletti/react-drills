import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      filteredFood: "",
      food: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"],
    };
  }

  handleChange(event) {
    this.setState({ filteredFood: event });
  }

  render() {
    let foodList = this.state.food
      .filter((element, index) => {
        return element.includes(this.state.filteredFood);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return (
      <div className="app">
        <input onChange={(e) => this.handleChange(e.target.value)} />
        {foodList}
      </div>
    );
  }
}
