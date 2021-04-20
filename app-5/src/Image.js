import React, { Component } from "react";

export default class Image extends Component {
  render() {
    return (
      <div className="app">
        <img src={this.props.url} />
        <div>Error 404 - Cuteness Detected</div>
      </div>
    );
  }
}
