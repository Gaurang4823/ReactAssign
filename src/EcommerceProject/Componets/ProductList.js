import React from "react";
import ProductData from "./Product";
import TitleTest from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../Context";

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      Products: storeProducts
    };
  }
  render() {
    console.log(this.state.Products.products);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <TitleTest name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  console.log(value);
                  return value.products.map(product => {
                    return <ProductData key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
