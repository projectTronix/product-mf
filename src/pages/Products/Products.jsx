import React from "react";
import Container from "react-bootstrap/Container";
import "./Products.scss";
import Catalogue from "../../components/Catalogue/Catalogue";


const Products = () => {
  return (
    <Container className="catalogue-container" fluid>
      <Catalogue />
    </Container>
  )
}

export default Products