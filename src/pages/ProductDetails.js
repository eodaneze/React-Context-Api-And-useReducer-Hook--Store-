import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Ratings from "../components/Ratings";
import { Link } from "react-router-dom";
import CartContext from "../context/cart/CartContext";
import { products } from "../data";

const ProductDetails = () => {
  //Extract these functions from the CartContext
  const { addToCart, increase, cartItems, sumItems, itemCount } =
    useContext(CartContext);

  //Check whether the product is in the cart or not
  const isInCart = (product) => {
    return !!cartItems.find((product) => product.id === product.id);
  };
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const product = products.find((p) => p.id.toString() === path);
  console.log(path);
  return (
    <>
      <div className="container">
        <div className="product-content">
          <div className="product-img">
            <img src={product.img} alt="" />
          </div>
          <div className="product-details">
            <h1>{product.title}</h1>
            <div className="display-rating">
              <Ratings
                rating={product.rating}
                numReviews={product.numReviews}
              ></Ratings>
            </div>
            <p className="price">Price: ${product.price}</p>
            <p>{product.info}</p>
            <div className="share-icon">
              <h5>Share:</h5>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-whatsapp"></i>
            </div>
          </div>

          <div className="checkout-side">
            <div className="d-flex justify-content-between border-bottom">
              <p>Price:</p>
              <p>${product.price}</p>
            </div>
            <div className="stock">
              {product.countInStock > 0 ? (
                <button>In Stock</button>
              ) : (
                <button>Unavailable</button>
              )}
            </div>
            <div className="cart">
              {!isInCart(product) ? (
                <button
                  onClick={() => addToCart(product)}
                  className="btn btn-success"
                >
                  Add To Cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="btn btn-dark"
                >
                  Add To Cart
                </button>
              )}

              {/* {isInCart(product) && (
              <button
                onClick={() => increase(product)}
                className="btn btn-dark"
              >
                Add More
              </button>
            )} */}
            </div>
          </div>
        </div>
      </div>
      <div className="related-product">
        <h2>Peopls also liked</h2>
        <div className="d-flex related-product-content">
          {products.map((product) => (
            <div key={product.id}>
              <div>
                <img src={product.img} alt="" />
                <Link to={`/product/${product.id}`} className="link">
                  <p className="related-product-title">{product.title}</p>
                </Link>
                <p className="lead">price: ${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
