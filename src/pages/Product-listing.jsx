import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrums from "../components/Breadcrums";

const Product = () => {
  const [allproducts, setAllproducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        let newproduct = data.products;
        setAllproducts(newproduct);
      });
  }, []);
  return (
    <div className="maindiv m-8">
      {allproducts.map((item) => {
        return (
          <div className="eacthitem" key={item.id}>
            <Link to={`/products/${item.id}`}>
              <img src={item.thumbnail} alt="productsimg" />
              <h3>{item.title}</h3>
              <p>${item.price}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
