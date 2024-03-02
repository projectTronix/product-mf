import { React, useState, useEffect } from "react";
import "./Catalogue.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";
import CatalogueCard from "../CatalogueCard/CatalogueCard";
const Catalogue = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [direction, setDirection] = useState("");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    const fetchProducts = async (page) => {
      try {
        let url = new URL(
          `http://localhost:8090/products/all?page=${page}&size=6`
        );
        if (query) {
          url.searchParams.set("name", query);
        }
        if (filter) {
          for (const [key, value] of Object.entries(filter)) {
            url.searchParams.set(key, value);
          }
        }
        if (sort) {
          url.searchParams.set("sortBy", sort);
        }
        if (direction) {
          url.searchParams.set("direction", direction);
        }
        if (category) {
          console.log(category);
          url.searchParams.set("category", category);
        }
        console.log(url.toString());
        const response = await axios.get(url.toString());
        setProducts(response.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts(currentPage);
  }, [currentPage, query, filter, sort, direction, category]);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Container fluid className="catalogue-wrapper">
      <Row className="search-sort-wrapper">
        <Col className="search-col">
          <SearchBar query={query} setQuery={setQuery} />
        </Col>
        <Col className="sort-col">
          <Sort
            sort={sort}
            setSort={setSort}
            direction={direction}
            setDirection={setDirection}
          />
        </Col>
      </Row>
      <Row>
        <Col xs lg={2}>
          <Filter
            filter={filter}
            setFilter={setFilter}
            category={category}
            setCategory={setCategory}
          />
        </Col>
        <Col md="auto">
          <Container className="products-menu">
            <Row xs={1} sm={2} md={2} lg={3} xl={3} className="product-row g-4">
              {products.content &&
                products.content.map((item) => {
                  const id = item.productId;
                  return (
                    <CatalogueCard
                      id={id}
                      imageUrl={item.imageUrl}
                      title={item.title}
                      price={item.price}
                      description={item.description.slice(0, 60)}
                    />
                  );
                })}
            </Row>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
            />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Catalogue;
