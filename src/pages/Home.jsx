import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrums from "../components/Breadcrums";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        let newproduct = data.products.slice(0, 6);
        setProducts(newproduct);
      });
  }, []);

  return (
    <>
      <div className="maindiv">
        {products.map((item) => {
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
        <Link to={"/products"}>
          <center>
            <button className="bg-green-500 hover:bg-green-700 p-5 px-10 rounded my-8 item-center border-slate-500 text-white">
              View all products
            </button>
          </center>
        </Link>
      </div>
    </>
  );
};

export default Home;
