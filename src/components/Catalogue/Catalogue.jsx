import { React, useState, useEffect, useCallback } from "react";
import "./Catalogue.scss";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";
import CatalogueCard from "../CatalogueCard/CatalogueCard";
import { ToastContainer } from "react-toastify";
import EmptyCatalogue from "../EmptyCatalogue/EmptyCatalogue";
const Catalogue = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [minPricefilter, setMinPriceFilter] = useState("");
  const [maxPriceFilter, setMaxPriceFilter] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [direction, setDirection] = useState("");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const fetchProducts = async (page) => {
    try {
      let url = new URL(
        `http://localhost:8090/products/all?page=${page}&size=6`
      );
      if (query) {
        url.searchParams.set("name", query);
      }
      if (minPricefilter) {
        url.searchParams.set("minPrice", minPricefilter);
      }
      if (minPricefilter) {
        url.searchParams.set("maxPrice", maxPriceFilter);
      }
      if (sort) {
        url.searchParams.set("sortBy", sort);
      }
      if (direction) {
        url.searchParams.set("direction", direction);
      }
      if (category) {
        url.searchParams.set("category", category);
      }
      const response = await axios.get(url.toString());
      setProducts(response.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.log(error);
      if (error.code == "ERR_NETWORK") {
        navigate("/error", { replace: true });
      }
    }
  };
  useEffect(() => {
    fetchProducts(currentPage);
  }, [
    currentPage,
    query,
    minPricefilter,
    maxPriceFilter,
    sort,
    direction,
    category,
  ]);

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
  if (!products) {
    return (
      <Container className="min-vh-100 d-flex justify-content-center">
        <Spinner className="position-fixed top-50" animation="grow" />
      </Container>
    );
  }
  return (
    <Container fluid className="catalogue-wrapper">
      <ToastContainer theme="dark" />
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
            maxPriceFilter={maxPriceFilter}
            setMaxPriceFilter={setMaxPriceFilter}
            minPricefilter={minPricefilter}
            setMinPriceFilter={setMinPriceFilter}
            category={category}
            setCategory={setCategory}
          />
        </Col>
        {products.content && products.content.length == 0 && (
          <Col>
            <EmptyCatalogue />
          </Col>
        )}
        <Col md="auto">
          <Container className="products-menu">
            <Row xs={1} sm={2} md={2} lg={3} xl={3} className="product-row g-4">
              {products.content &&
                products.content.map((item) => {
                  const id = item.productId;
                  return (
                    <CatalogueCard
                      key={id}
                      id={id}
                      imageUrl={item.imageUrl}
                      title={item.title}
                      price={item.price}
                      description={item.description.slice(0, 60)}
                      cart={cart}
                      setCart={setCart}
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
