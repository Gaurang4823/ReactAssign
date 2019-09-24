import React from "react";
import ReactDom from "react-dom";

class StatePractice2 extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogged: false
    };
  }

  render() {
    return (
      <div>
        <h1>You are currently logged {this.state.isLogged ? "in" : "out"}</h1>
      </div>
    );
  }
}

export default StatePractice2;
