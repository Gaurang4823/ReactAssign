import React from "react";
import ReactDom from "react-dom";
//Creating Router in throught Application
import { BrowserRouter as Router } from "react-router-dom";
//import Myinfo from "./Componets/MyInfo";
//import AppInfo from "./Componets/App";
//import CheckBoxInfo from "./Componets/CheckBox";
//import KeanuInfo from "./Componets/KeanuReeves";
//import GetProducts from "./Componets/ProductsList";
//import ClassBasesTest from "./ClassBasedComponets/ClassbaseFile";
//import StatePracticTest from "./ClassBasedComponets/StatePractice";
//import StatePractice2Test from "./ClassBasedComponets/StatePractice2";
//import ImportDataPracticeTest from "./ClassBasedComponets/ImportDataPractice";
//import HandleEventsTest1 from "./ClassBasedComponets/HandleEventsTest";
//import ChangingStateTest from "./ClassBasedComponets/ChangingStateTest";
//import App from "./Componets/App";
//import RenderingTest from "./ClassBasedComponets/Rendering";
//import RenderingPracTest from "./ClassBasedComponets/RenderingPractice";
//import CallApiReactTest from "./ClassBasedComponets/CallApiInReact";
//import FormInReactClassTest from "./ClassBasedComponets/FormInReact";
//import TravelFormTest from "./ClassBasedComponets/TravelFormFilling";
//import BoilerPlateTest from "./CapstoneMemeGenrator/BoilerPlate";
import Apptest from "./EcommerceProject/app";
import { ProductProvider } from "./EcommerceProject/Context";
/*
function MyApp(){
  return( <ul>
      <li>Hello</li>
      <li>Hello1</li>
      <li>Hello2</li>
    </ul>
  );
}*/
/*
function Apptest() {
  const firstName = "Gaurang";
  const lastName = "Bhargava";
  return <h1> hi {firstName + " " + lastName}!</h1>;
}*/

ReactDom.render(
  <ProductProvider>
    <Router>
      <Apptest />
    </Router>
  </ProductProvider>,
  document.getElementById("app")
);
