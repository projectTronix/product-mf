import React from "react";
import "./Filter.scss";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
const Filter = ({ filter, setFilter, category, setCategory }) => {
  const handleFilter = (e) => {
    const value = e.target.value;
    setFilter({ [e.target.name]: value });
  };
  return (
    <Container className="filter-wrapper" fluid>
      <Row className="category-wrapper">
        <Link
          className="link category-item"
          name="Grocery"
          onClick={(e) => setCategory(null)}
        >
          <span className="all-categories">All Categories</span>
        </Link>
        <Link
          className="link category-item"
          name="Grocery"
          onClick={(e) => setCategory(e.target.name)}
        >
          Grocery
        </Link>
        <Link
          className="link category-item"
          name="Electronics"
          onClick={(e) => setCategory(e.target.name)}
        >
          Electronics
        </Link>
        <Link
          className="link category-item"
          name="Footwear"
          onClick={(e) => setCategory(e.target.name)}
        >
          Footwear
        </Link>
        <Link
          className="link category-item"
          name="Home"
          onClick={(e) => setCategory(e.target.name)}
        >
          Home
        </Link>
        <Link
          className="link category-item"
          name="Fitness"
          onClick={(e) => setCategory(e.target.name)}
        >
          Fitness
        </Link>
      </Row>
      <Row className="other-wrapper">
        <Form>
          <h4 className="filter-type lead">Price</h4>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-min-price">Min</InputGroup.Text>
            <Form.Control
              name="minPrice"
              aria-label="Min"
              aria-describedby="inputGroup-min-price"
              defaultValue="129"
              type="number"
              onChange={handleFilter}
              className="price-filter"
            />
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-max-price">Max</InputGroup.Text>
            <Form.Control
              name="maxPrice"
              aria-label="Max"
              aria-describedby="inputGroup-max-price"
              defaultValue="259999"
              type="number"
              onChange={handleFilter}
              className="price-filter"
            />
          </InputGroup>
        </Form>
      </Row>
    </Container>
  );
};

export default Filter;
