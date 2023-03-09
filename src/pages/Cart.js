import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Checkout from "../components/Checkout";
import CartContext from "../context/cart/CartContext";

const Cart = () => {
  const { cartItems, checkout, clearCart } = useContext(CartContext);
  return (
    <div className="all-cart mt-5">
      <div className="cart-left-container">
      <div className="container mt-5">
        <h1>
          Shopping Cart <span>({cartItems.length})</span>
        </h1>
      </div>

      {/* ?show the checkout message when the checkout button have been clicked */}
      {checkout && (
        <div className="checkoutmessage">
          <h4>Thank you for your purchase!</h4>
          <p>
            Your order has been placed and will be delivered to you within 24
            hours.
          </p>
          <Link to="/">
            <button onClick={clearCart}>Continue Shopping</button>
          </Link>
        </div>
      )}

      <div>
        {/* If cart is empty, display message, and if not, display each cart
            Item in cart: {cartItems.length} */}

        {cartItems.length === 0 ? (
          <p className="lead">
            <span>Cart is empty</span>
            <span>
              <Link to="/" className="link fw-bol text-primary mx-2">
                 Continue shopping
              </Link>
            </span>
          </p>
        ) : (
          <ul>
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>
        )}
      </div>
      </div>

      <div className="checkout">
        {/* checkout components */}
        {cartItems.length > 0 && <Checkout />}
      </div>
    </div>
  );
};

export default Cart;
