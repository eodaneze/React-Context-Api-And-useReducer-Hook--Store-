import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer, { sumItems } from "./CartReducer";

const CartState = ({ children }) => {
  const storage = localStorage.getItem("cartItems")
  ?JSON.parse(localStorage.getItem("cartItems"))
  :[];
  const initialState = {
    cartItems: storage,
    ...sumItems(storage),
    checkout: false,
  };

  // local storage

  

  //   set Up the reducer

  const [state, dispatch] = useReducer(CartReducer, initialState);
  //Function to handle when an item is added from the store into the Cart

  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  //Function to handle when an item that is in the cart is added again
  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  //Function to handle when an item is removed from the cart
  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  //Function to remove an item from the cart
  const removeFromCart = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  //Function to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  //Function to handle when the user clicks the checkout button
  const handleCheckout = () => {
    dispatch({ type: "CHECKOUT" });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        removeFromCart,
        increase,
        decrease,
        handleCheckout,
        clearCart,
        ...state,
      }}
    >
        {children}
    </CartContext.Provider>
  );
};

export default CartState;
