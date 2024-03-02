import React from 'react'
import Form from "react-bootstrap/Form";
import './Quantity.scss'
const Quantity = ({quantity, setQuantity}) => {
  return (
    <div className="quantity-wrapper">
      <span className="quantity-head">Quantity</span>
      <Form.Select
        size="sm"
        className="quantity-options"
        onChange={(e) => setQuantity(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </Form.Select>
    </div>
  );
}

export default Quantity