import React from "react";
import ReactDOM from "react-dom";

function handleOnClick() {
  console.log("Click button clicked yoyoyoyoy");
}
function handleOnMouseOver() {
  console.log("Click button clicked MouseeOver");
}
function app() {
  return (
    <div>
      <img
        alt="Here"
        src="https://placekeanu.com/200/150"
        onMouseOver={handleOnMouseOver}
      />
      <button onClick={handleOnClick}>ClickMe</button>
    </div>
  );
}

export default app;
