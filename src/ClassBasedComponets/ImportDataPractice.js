import React from "react";
//import ReactDom from "react-dom";
import ProductData from "../Componets/ProductsData";
import ProductUi from "../Componets/products";

class ImportDataPractice extends React.Component {
  constructor() {
    super();
    this.state = {
      ProductList: ProductData
    };
    //this.handleChnage = this.handleChnage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
    // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
    //console.log("Changed", id);
    this.setState(function(prodData) {
      const getSingleData = prodData.ProductList.map(todo => {
        if (todo.id === id && todo.ProductAvailabe === false) {
          todo.ProductAvailabe = true;
        } else {
          todo.ProductAvailabe = false;
        }
        return todo;
      });
      return {
        ProductList: getSingleData
      };
    });
  }

  render() {
    const products = this.state.ProductList.map(item => (
      <ProductUi
        key={item.id}
        productObj={item}
        handleChange={this.handleChange}
      />
    ));
    /*
    const products = this.state.ProductList.map(function(prod) {
      return (
        <ProductUi
          key={prod.id}
          productObj={prod}
          handleChnage={this.handleChange}
        />
      );
    });*/

    return <div>{products}</div>;
  }
}

export default ImportDataPractice;
