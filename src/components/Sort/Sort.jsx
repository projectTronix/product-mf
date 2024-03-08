import React from "react";
import Form from "react-bootstrap/Form";
import "./Sort.scss";
const Sort = ({ sort, setSort, direction, setDirection }) => {
  const handleSort = (e) => {
    const value = e.target.value;
    if (value == 0) {
      setSort(null);
      setDirection(null);
    }
    if (value == 1) {
      setSort("price");
      setDirection(1);
    } else if (value == 2) {
      setSort("price");
      setDirection(-1);
    } else if (value == 3) {
      setSort("title");
      setDirection(1);
    } else if (value == 4) {
      setSort("title");
      setDirection(-1);
    }
  };
  return (
    <div className="sort-wrapper align-items-center">
      <span className="sort-head">Sort By</span>
      <Form.Select
        size="sm"
        onChange={handleSort}
        className="sort-container"
      >
        <option value="0">Relevance</option>
        <option value="1">Price (low to high)</option>
        <option value="2">Price (high to low)</option>
        <option value="3">Name (A to Z)</option>
        <option value="4">Name (Z to A)</option>
      </Form.Select>
    </div>
  );
};

export default Sort;
