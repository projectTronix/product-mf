import React from "react";
import "./Quantity.scss";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const Quantity = ({ quantity, setQuantity }) => {
  const handleQuantity = (e) => {
    const value = e.target.value;
    setQuantity(value);
  };
  return (
    <div className="quantity-wrapper">
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-min-price">Quantity</InputGroup.Text>
        <Form.Control
          name="quantity"
          defaultValue="1"
          min={1}
          max={20}
          type="number"
          onChange={handleQuantity}
        />
      </InputGroup>
    </div>
  );
};

export default Quantity;
