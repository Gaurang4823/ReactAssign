import React from "react";
import ReactDom from "react-dom";
import BoilerHeaderTest from "./Header";
import MemeGernatorTest1 from "./MemeGernator";

function boilerPlate() {
  return (
    <div>
      <BoilerHeaderTest />
      <h1>Hi! this is Rendering boil</h1>
      <MemeGernatorTest1 />
    </div>
  );
}

export default boilerPlate;
