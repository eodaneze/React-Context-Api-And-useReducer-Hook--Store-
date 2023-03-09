import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsMinecartLoaded } from "react-icons/bs";
import CartContext from "../context/cart/CartContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <Link to="/" className="link">
            <h1>Shop.</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-list">
              <li className="nav-item">
                <Link to="/about" className="link">
                  <h5>About</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="link">
                  <h5>
                    <span>
                      <BsMinecartLoaded />
                    </span>
                    <span className="count">
                      {cartItems.length > 0 ? (
                        <b className="count-1">{cartItems.length}</b>
                      ) : (
                        <b>0</b>
                      )}
                    </span>
                  </h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
