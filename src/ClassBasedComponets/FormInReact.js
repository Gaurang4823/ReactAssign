import React from "react";
import ReactDom from "react-dom";

class FormInReactClass extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
    this.handleFirstName = this.handleFirstName.bind(this);
  }

  handleFirstName(event) {
    const target = event.target;
    console.log("tetete", target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="FirstName"
            value={this.state.value}
            onChange={this.handleFirstName}
          />
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="LastName"
            value={this.state.value}
            onChange={this.handleFirstName}
          />
          <br />
          {this.state.firstName} {this.state.lastName}
        </form>
      </div>
    );
  }
}

export default FormInReactClass;
