import React, { useEffect, useState } from "react";
import "./Filter.scss";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api";
const Filter = ({
  maxPriceFilter,
  setMaxPriceFilter,
  minPriceFilter,
  setMinPriceFilter,
  category,
  setCategory,
}) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  if (!categories) {
    return <div>Loading...</div>;
  }
  const fetchCategories = async () => {
    try {
      const response = await api.get("http://localhost:8090/categories/all");
      setCategories(response.data);
    } catch (error) {
      // Handle error or redirect to login
      console.log(error);
      if (error.code == "ERR_NETWORK") {
        navigate("/error", { replace: true });
      }
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <Container className="filter-wrapper" fluid>
      <Row className="category-wrapper">
        <Link
          className="link category-item"
          name="all"
          onClick={(e) => setCategory(null)}
        >
          <span className="all-categories">All Categories</span>
        </Link>
        {categories &&
          categories.map((item) => {
            return (
              <Link
                key={item.categoryId}
                className="link category-item"
                name={item.title}
                value={item.title}
                onClick={(e) => setCategory(e.target.name)}
              >
                {item.title}
              </Link>
            );
          })}
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
              onChange={(e) => setMinPriceFilter(e.target.value)}
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
              onChange={(e) => setMaxPriceFilter(e.target.value)}
              className="price-filter"
            />
          </InputGroup>
        </Form>
      </Row>
    </Container>
  );
};

export default Filter;
