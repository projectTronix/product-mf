import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./Products.scss";
import Catalogue from "../../components/Catalogue/Catalogue";

const Products = () => {
  const [cart, setCart] = useState([]);
  return (
    <Container className="catalogue-container" fluid>
      <Catalogue cart={cart} setCart={setCart} />
    </Container>
  );
};

export default Products;
