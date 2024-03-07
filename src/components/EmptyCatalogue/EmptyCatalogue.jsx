import React from 'react'
import Container from "react-bootstrap/Container";
import EmptyImage from '../../img/empty.jpg'
import "./EmptyCatalogue.scss";
const EmptyCatalogue = () => {
  return (
    <Container className="empty-cart min-vh-100 mt-5 mb-5 text-center">
      <img src={EmptyImage} alt="" className="empty-products-img" />
      <h3 >It's empty in here.</h3>
      <h4 className='mt-5'>Kindly choose another set of filters to view existing Products</h4>
    </Container>
  );
}

export default EmptyCatalogue;