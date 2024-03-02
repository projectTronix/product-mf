import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./CatalogueCard.scss";
import ProductButton from "../ProductButton/ProductButton";
const CatalogueCard = ({ id, imageUrl, title, price, description }) => {
  return (
    <Link className="link" to={`/products/${id}`} key={id} target="_blank">
      <Col>
        <Card className="productCard">
          <Card.Img className="cardImage" variant="top" src={imageUrl} />
          <Card.Body className="product-card-body">
            <Card.Title className="prouduct-card-title">{title}</Card.Title>
            <Card.Text className="lead product-card-price">MRP : ₹{price}.00</Card.Text>
            <Card.Text className="lead product-card-description">
              {description.slice(0, 60)}
            </Card.Text>
            <ProductButton text="Add to Cart" />
          </Card.Body>
        </Card>
      </Col>
    </Link>
  );
};

export default CatalogueCard;
