import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import api from "../../api";
import "./AddToCart.scss";

const AddToCart = ({ productId, quantity, cart, setCart }) => {
  const handleAddToCart = async () => {
    try {
      const response = await api.post("http://localhost:8091/cart/update", {
        productId,
        quantity,
      });
      console.log(response);
      if (response.status == 200) {
        const k = ["133"];
        setCart(k);
        console.log(k);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-grid gap-2 product-btn-container position-relative">
      <Button size="lg" className="product-btn" onClick={handleAddToCart}>
        <span className="position-absolute start-0">+</span>Add to Cart
      </Button>
    </div>
  );
};

export default AddToCart;
