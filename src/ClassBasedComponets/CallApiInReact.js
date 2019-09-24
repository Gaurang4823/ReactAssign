import React from "react";
import ReactDom from "react-dom";

class CallApiReact extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      charcter: {}
    };
  }
  componentDidMount() {
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          charcter: data
        });
      });
  }
  render() {
    let someText = this.state.isLoading ? (
      "Loading"
    ) : (
      <h1>{this.state.charcter.name}</h1>
    );
    return (
      <div>
        <p>{someText}</p>
      </div>
    );
  }
}

export default CallApiReact;
