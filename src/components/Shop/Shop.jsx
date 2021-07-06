import React, { useState } from "react";
import fakeData from "../../fakeData/index";
import Products from "../Products/Products";

const Shop = () => {
  const [products, setProducts] = useState(fakeData);
  return (
    <div>
      {products.map((pd) => (
        <div>
          <Products product={pd} key={pd.key}></Products>
          
          <hr />
          <br />
        </div>
      ))}
    </div>
  );
};

export default Shop;
