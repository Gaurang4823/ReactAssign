import React from "react";
import ReactDom from "react-dom";

function boilerHeader() {
  const headerStyle = {
    padding: "10px",
    textalign: "center",
    background: "#1abc9c",
    color: "white",
    fontsize: "30px"
  };
  return (
    <div style={headerStyle}>
      <h1>Meme Gernator</h1>
      <p>My supercool Gernator</p>
    </div>
  );
}

export default boilerHeader;
