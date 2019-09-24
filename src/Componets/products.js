import React from "react";
//import ReactDom from "react-dom";

function myProducts(props) {
  const divStyle = {
    margin: "40px",
    border: "5px solid pink"
  };
  const pStyle = {
    fontSize: "15px",
    color: "DodgerBlue",
    fontStyle: "italic"
  };
  console.log(props);
  return (
    <div>
      <h2>Product-Name : {props.productObj.Name}</h2>
      <p>Product-Price : {props.productObj.Price}</p>
      <p style={pStyle}>Product-Description : {props.productObj.description}</p>
      <input
        type="checkbox"
        checked={props.productObj.ProductAvailabe}
        onChange={event => props.handleChange(props.productObj.id)}
      />
      Testing
      <br />
    </div>
  );
}

export default myProducts;
