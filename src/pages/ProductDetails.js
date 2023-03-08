import React from 'react'
import { useLocation } from 'react-router-dom'
import Ratings from '../components/Ratings';
import { products } from '../data';

const ProductDetails = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const product = products.find((p) => p.id.toString() === path)
  console.log(path);
  return (
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
              {product.countInStock === 0 ? (
                <button disabled>Out of stock</button>
              ) : (
                <button>Add To Cart</button>
              )}
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProductDetails