import React from "react";

import productData from "./ProductsData";
import TestProducts from "./products";

function getProducts() {
  const productDataList = productData.map(function(prod) {
    return (
      <div>
        <TestProducts key={prod.id} productObj={prod} />
      </div>
    );
  });

  return <div>{productDataList}</div>;
}

export default getProducts;
