import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [product, setProduct] = useState([]);

  const getData = async () => {
    let respons = await axios.get("http://localhost:3000/products/");
    setProduct(respons.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {product.map((item) => {
            return <ProductCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
