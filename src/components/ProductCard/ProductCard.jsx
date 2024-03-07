import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./ProductCard.scss";
import { ToastContainer } from "react-toastify";
import Specifications from "../Specifications/Specifications";
import Quantity from "../Quantity/Quantity";
import AddToCart from "../AddToCart/AddToCart";

const ProductCard = ({
  id,
  title,
  description,
  image,
  specifications,
  price,
  cart,
  setCart
}) => {
  
  const [quantity, setQuantity] = useState(1);
  return (
    <Container className="pdp">
      <ToastContainer theme="dark"/>
      <Row>
        <Col sm={6}>
          <Container className="product-img-container">
            <Image className="product-img" src={image} rounded fluid />
          </Container>
        </Col>
        <Col sm={6}>
          <Container className="product-info d-flex flex-column justify-content-between h-100">
            <div>
              <h1 className="product-title">{title}</h1>
              <Button className="product-price">INR {price}.00</Button>
              <hr />
              <h5 className="product-description lead">{description}</h5>
              <Specifications specs={specifications} />
              <Quantity quantity={quantity} setQuantity={setQuantity} />
            </div>

            <AddToCart productId={id} quantity={quantity} cart={cart} setCart={setCart} />
          </Container>
        </Col>
      </Row>
      <hr className="mt-5" />
    </Container>
  );
};

export default ProductCard;
