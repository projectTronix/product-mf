import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Category from "./pages/Category/Category";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Error404 from './pages/Error404/Error404'
import Error500 from './pages/Error500/Error500'

const ProductNavigation = () => {
  const [cart, setCart] = useState([]);
  return (
    <Routes>
      <Route path="/" element={<Products cart={cart} setCart={setCart} />} />
      {/* <Route path="/category/:id" element={<Category />} /> */}
      <Route path="/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/error" element={<Error500 />} />
      </Routes>

  )
}

export default ProductNavigation;