import React from "react";
import { Link } from "react-router-dom";

const ProductCards = ({ product }) => {
  return (
    <Link className="link" to={`/product/${product.id}`}>
      <div className="container">
        <div className="inner">
          <img src={product.img} alt="" />
        </div>
        <div className="product-title">
          <h5>{product.title}</h5>
        </div>
      </div>
    </Link>
  );
};

export default ProductCards;
