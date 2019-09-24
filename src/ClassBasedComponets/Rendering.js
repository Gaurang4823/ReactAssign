import React from "react";
import RenderingTest from "./RenderingComponets";

class Rendering extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        <RenderingTest isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default Rendering;
