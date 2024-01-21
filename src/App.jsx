import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product-listing";
import ProductDetails from "./pages/ProductDetails";
import Breadcrums from "./components/Breadcrums";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <h1 className="text-5xl m-5 text-center">Shop Trending Products</h1>
      <Breadcrums />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
