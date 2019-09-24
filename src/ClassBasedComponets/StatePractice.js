import React from "react";
import ReactDom from "react-dom";

class stateChange extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Gaurang",
      age: "26"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age} Year Old</h1>
      </div>
    );
  }
}

export default stateChange;
