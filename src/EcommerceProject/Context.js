import React from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      products: storeProducts,
      detailProd: detailProduct
    };
  }

  handleDetail() {
    console.log("Test the Log");
  }

  handleAddtoCart() {
    console.log("testing Add to cart");
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          products: this.state.products,
          detailProd: this.state.detailProd,
          handleDetail: this.handleDetail,
          handleAddtoCart: this.handleAddtoCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
