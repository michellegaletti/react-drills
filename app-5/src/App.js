import React, { Component } from "react";
import Image from "./Image.js";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Image
          url={
            "https://dogtime.com/assets/uploads/gallery/basenji-dog-breed-pictures/1-standforward.jpg"
          }
        />
      </div>
    );
  }
}
