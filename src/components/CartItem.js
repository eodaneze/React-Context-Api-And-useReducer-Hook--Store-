import React, { useContext } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import CartContext from "../context/cart/CartContext";
import Checkout from "./Checkout";
import Ratings from "./Ratings";

const CartItem = ({ product }) => {
  const { removeFromCart, increase, decrease } = useContext(CartContext);
  return (
    <div>
      <div className="container cart-item-conteiner">
        <div className="cart-item-left">
          <img src={product.img} alt="" />
          <div>
            <Link to={`/product/${product.id}`} className="link">
              <h5>{product.title}</h5>
            </Link>
            <p>${product.price}</p>
            <div className="display-rating">
              <Ratings
                rating={product.rating}
                numReviews={product.numReviews}
              ></Ratings>
            </div>
          </div>
          {/* buttons */}
          <div className="quantity">
            <button onClick={() => increase(product)}>
              <AiOutlinePlus />
            </button>
            <div>
              <p>{product.quantity}</p>
            </div>
            {/* Display a minus icon or trash/delete icon based on the quantity of a particular product is in the cart */}
            {product.quantity > 1 && (
              <button onClick={() => decrease(product)}>
                <AiOutlineMinus />
              </button>
            )}
            {product.quantity === 1 && (
              <button onClick={() => removeFromCart(product)}>
                <BsTrash />
              </button>
            )}
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default CartItem;
