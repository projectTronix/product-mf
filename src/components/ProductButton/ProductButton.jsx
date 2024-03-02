import React from 'react'
import Button from "react-bootstrap/Button";
import './ProductButton.scss'
const ProductButton = ({ text }) => {
  const addToCart = () => {
    console.log("added to cart");
  };
  const addToWishlist = () => {
    console.log("added to Wishlist");
  };
  return (
    <div className="d-grid gap-2 product-btn-container position-relative">
      <Button size="lg" className='product-btn'><span className='position-absolute start-0'>+</span>{text}</Button>
    </div>
  );
}

export default ProductButton