import React from "react";
import { Switch, Route } from "react-router-dom";
//import ReactDom from "react-dom";
//import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "bootstrap/dist/css/bootstrap.min.css";
import "../EcommerceProject/App.css";
import NavBar from "./Componets/NavBar";
import Product from "./Componets/Product";
import ProductList from "./Componets/ProductList";
import Details from "./Componets/Details";
import Default from "./Componets/Default";
import Cart from "./Componets/Cart";

class app extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

//img:"img/"

export default app;
