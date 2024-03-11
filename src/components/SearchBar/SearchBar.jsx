import {React, useState} from 'react'
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import './SearchBar.scss'
import InputGroup from "react-bootstrap/InputGroup";
import SearchIcon from "@mui/icons-material/Search";
const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};
const SearchBar = ({query, setQuery}) => {
  return (
    <Container className="search-bar-container">
      <Form>
        <Row>
          <Col xs="auto">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" className='search-icon'><SearchIcon/></InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2 search-bar"
                onChange={debounce(e => setQuery(e.target.value), 1000)}
              />
            </InputGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default SearchBar