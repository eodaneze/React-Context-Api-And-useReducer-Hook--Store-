import React,{useContext} from "react";
import CartContext from "../context/cart/CartContext";

const Checkout = () => {
  const { clearCart, handleCheckout, itemCount, total } =
    useContext(CartContext);
  return (
    <div>
      <div>
        <p>Total Items:</p>
        <h4>{itemCount}</h4>
        <p>Total Payment:</p>
        <h4>${total}</h4>
        <hr />
        <div>
             <button onClick={handleCheckout}>CHECKOUT</button>
             <button onClick={clearCart}>CLEAR</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
