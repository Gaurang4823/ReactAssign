import React from "react";
import ReactDom from "react-dom";

function renderingPrac(props) {
  console.log(props);
  return (
    <div>
      <h2>
        {props.isLoading === true
          ? "Hello"
          : "Some magic will happen in some time"}
      </h2>
    </div>
  );
}

export default renderingPrac;
