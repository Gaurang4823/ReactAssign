import React from "react";
import ReactDom from "react-dom";
import { func } from "prop-types";

class RenderingPrac extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
      message: "Logged Out!",
      buttonLabel: "Log in"
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    if (this.state.isLoggedIn === true) {
      this.setState({
        isLoggedIn: false,
        message: "Logged In",
        buttonLabel: "Log Out"
      });
    } else {
      this.setState({
        isLoggedIn: true,
        message: "Logged Out",
        buttonLabel: "Log In"
      });
    }
  }

  render() {
    return (
      <div>
        <input
          type="button"
          value={this.state.buttonLabel}
          onClick={this.handleButtonClick}
        />
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default RenderingPrac;
