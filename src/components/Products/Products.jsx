import React, { useState } from "react";
import fakeData from "../../fakeData/index";
import { Link } from "react-router-dom";

const Products = (props) => {
  const { name, price, key } = props.product;
  return (
    <div>
      <h4>
        <Link to={"/product/" + key}>{name}</Link>
      </h4>
      <p>Price: $ {price}</p>
    </div>
  );
};

export default Products;
