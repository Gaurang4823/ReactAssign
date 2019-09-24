import React from "react";

function contactInfo(props) {
  console.log(props);
  return (
    <div>
      <img src={props.contact.img} alt="describe" />
      <h3 style={{ display: props.contact.name ? "block" : "none" }}>
        Name : {props.contact.name}
      </h3>
      <p style={{ color: props.contact.Phone ? "Black" : "Red" }}>
        Phone :{props.contact.Phone}
      </p>
      <p>Email : {props.contact.Email}</p>
    </div>
  );
}

export default contactInfo;
