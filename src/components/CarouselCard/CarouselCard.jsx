import React from 'react'
import './CarouselCard.scss'
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
const CarouselCard = ({id, imageUrl, title, price, description}) => {
  return (
    <Link className="link" to={`/products/${id}`} key={id} target="_blank">
      <Card className="bg-dark text-white carousel-card">
        <Card.Img
          src={imageUrl}
          alt="Card image"
          className="carousel-card-image"
        />
        <Card.ImgOverlay>
          <Card.Title className="carousel-card-title">{title}</Card.Title>
          <Card.Text className="carousel-card-price">
            MRP: ₹{price}.00
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Link>
  );
}

export default CarouselCard