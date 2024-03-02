import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Category from "./pages/Category/Category";
import ProductDetail from "./pages/ProductDetail/ProductDetail";



const ProductNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/:id" element={<ProductDetail />} />
      </Routes>

  )
}

export default ProductNavigation;