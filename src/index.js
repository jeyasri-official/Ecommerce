import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductList from "./products/products.js";
import { BrowserRouter } from "react-router-dom";
import Modecontext from "./components/Navbar/Modecontext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductList>
    <Modecontext>
        <App />
    </Modecontext>
    </ProductList>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
