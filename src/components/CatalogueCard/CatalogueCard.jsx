import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./CatalogueCard.scss";
import AddToCart from "../AddToCart/AddToCart";
import AOS from "aos";
import "aos/dist/aos.css";
const CatalogueCard = ({
  id,
  imageUrl,
  title,
  price,
  description,
  cart,
  setCart,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Col>
      <Card data-aos="zoom-in-up" className="productCard">
        <Link className="link" to={`/products/${id}`} key={id} target="_blank">
          <Card.Img className="cardImage" variant="top" src={imageUrl} />
          <Card.Body className="product-card-body">
            <Card.Title className="prouduct-card-title">{title}</Card.Title>
            <Card.Text className="lead product-card-price">
              MRP : ₹{price}.00
            </Card.Text>
            <Card.Text className="lead product-card-description">
              {description.slice(0, 60)}
            </Card.Text>
          </Card.Body>
        </Link>
        <AddToCart cart={cart} setCart={setCart} productId={id} quantity={1} />
      </Card>
    </Col>
  );
};

export default CatalogueCard;
