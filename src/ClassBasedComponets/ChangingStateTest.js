import React from "react";
import ReactDom from "react-dom";

class ChangingState extends React.Component {
  constructor() {
    super();
    this.state = {
      Count: 0
    };
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }
  handleClickEvent() {
    this.setState(function(setClick) {
      return {
        Count: setClick.Count + 1
      };
    });
    //this.state.Count++;
    //console.log("This is click now");
  }

  render() {
    return (
      <div>
        <h1>{this.state.Count}</h1>
        <button onClick={this.handleClickEvent}>Click me!</button>
      </div>
    );
  }
}

export default ChangingState;
