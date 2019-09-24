import React from "react";
import ReactDom from "react-dom";

class TravelForm extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      travelLocation: "",
      dietaryRestrictions: {
        isVegain: false,
        iskosher: false,
        islocatosefree: false
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          dietaryRestrictions: {
            [name]: checked
          }
        })
      : this.setState({
          [name]: value
        });
    console.log(this.state);
  }

  render() {
    const headerStyle = {
      fontSize: "20px",
      fontWeight: "bold"
    };
    return (
      <div>
        <p style={headerStyle}>FirstName :</p>
        <input
          type="text"
          name="firstName"
          placeholder="Enter first name"
          value={this.state.firstName}
          onChange={this.handleInputChange}
        />
        <br />
        <p style={headerStyle}>LastName :</p>
        <input
          type="text"
          name="lastName"
          placeholder="Enter Last name"
          value={this.state.lastName}
          onChange={this.handleInputChange}
        />
        <br />
        <p style={headerStyle}>Age :</p>
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={this.state.age}
          onChange={this.handleInputChange}
        />
        <br />
        <p style={headerStyle}>Please enter Gender:</p>
        <label>
          <input
            type="radio"
            value="Male"
            checked={this.state.gender === "Male"}
            name="gender"
            onChange={this.handleInputChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            value="Female"
            checked={this.state.gender === "Female"}
            name="gender"
            onChange={this.handleInputChange}
          />
          Female
        </label>
        <br />
        <p style={headerStyle}>
          The select traveling infromation a drop-down list:
        </p>
        <select
          onChange={this.handleInputChange}
          value={this.state.travelLocation}
          name="travelLocation"
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        <p style={headerStyle}>Please Select Dietary restriction</p>
        <label>
          vegetarian:
          <input
            type="checkbox"
            name="isVegain"
            checked={this.state.dietaryRestrictions.isVegain}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          kosher:
          <input
            type="checkbox"
            name="iskosher"
            checked={this.state.dietaryRestrictions.iskosher}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          lactose free:
          <input
            type="checkbox"
            name="islocatosefree"
            checked={this.state.dietaryRestrictions.islocatosefree}
            onChange={this.handleInputChange}
          />
        </label>
      </div>
    );
  }
}

export default TravelForm;
