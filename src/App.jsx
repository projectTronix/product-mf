import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductNavigation from "./ProductNavigation";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <div className="app">
    <BrowserRouter>
      <ProductNavigation />
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
