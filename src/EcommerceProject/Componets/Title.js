import React from "react";
//import console = require("console");

function TitleFunc(props) {
  console.log("Name", { props });
  //console.log(title);
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
          {props.name}
          <strong className="text-blue">{props.title}</strong>
        </h1>
      </div>
    </div>
  );
}

export default TitleFunc;
