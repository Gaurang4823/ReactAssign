import React from "react";
//import ReactDom from "react-dom";

function BodyHeader() {
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
      <p>Hello this is {WeekTime} </p>
    </div>
  );
}

export default BodyHeader;
