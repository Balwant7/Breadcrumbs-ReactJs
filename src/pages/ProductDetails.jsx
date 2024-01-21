import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcrums";

const ProductDetails = () => {
  const { id } = useParams();
  const [currentitem, setCurrentitem] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        let newitem = data;
        setCurrentitem(newitem);
      });
  }, []);
  return (
    <div className="flex align-center justify-center">
      {<img src={currentitem.thumbnail} alt="" />}
      <div className="m-40">
        <h3 className="text-2xl">{currentitem.title}</h3>
        <p>{currentitem.description}</p>
        <h2 className="text-2xl">{currentitem.price}</h2>
        <button className="bg-slate-500 text-xl border-spacing-7 text-white rounded-full p-2 hover:bg-slate-600">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
