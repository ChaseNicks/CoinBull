import React from "react";
import ProductList from "../components/ProductList";
import NewsCard from "../components/NewsCard";

const Home = () => {
  return (
    <div className="container">
      <ProductList />
      <NewsCard symbol="ADA" />
    </div>
  );
};

export default Home;
