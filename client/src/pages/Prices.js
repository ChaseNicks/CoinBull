import React from "react";
import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
import NewsCard from "../components/NewsCard";

const Home = () => {
  return (
    <div className="container">
      {/* <CategoryMenu /> */}
      <ProductList />
      <NewsCard symbol="BTC, ETH, SOL, ADA" />
    </div>
  );
};

export default Home;