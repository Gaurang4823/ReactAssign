import React from "react"
import ReactDom from "react-dom"

class Game extends React.Component{
  render(){
    return (<h1>Hello Bro</h1>);
  }
}

ReactDom.render(<Game/>,document.getElementById("app"));