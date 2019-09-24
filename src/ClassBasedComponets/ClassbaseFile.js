import React from "react";
import ReactDom from "react-dom";

class app extends React.Component {
  render() {
    return (
      <div>
        <Header username="gaurang" />
        <BodyType />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.username}</h2>
      </div>
    );
  }
}

class BodyType extends React.Component {
  render() {
    const date = new Date();
    const hours = date.getHours();
    let WeekTime;
    if (hours < 12) {
      WeekTime = "Good Morning";
    } else if (hours > 12 && hours < 17) {
      WeekTime = "Good evening";
    } else {
      WeekTime = "Good Night";
    }
    return (
      <div>
        <h2>{WeekTime} to you,sir or mandam</h2>
      </div>
    );
  }
}

export default app;
