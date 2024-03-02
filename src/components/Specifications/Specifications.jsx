import React from "react";
import './Specifications.scss'
const Specifications = ({ specs }) => {
  console.log(specs);
  return (
    <div className="product-specs lead">
      {specs &&
        specs.map((item, index) => {
          const key = item.name;
          const value = item.value;
          return (
            <li className="specs-field list" key={index}>
              {key} : {value}
            </li>
          );
        })}
    </div>
  );
};

export default Specifications;
