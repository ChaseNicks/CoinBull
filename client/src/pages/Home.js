import React from "react";
import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
import NewsCard from "../components/NewsCard";

const Home = () => {
  return (
    <div className="container">
      {/* <CategoryMenu /> */}
      <ProductList />
      <NewsCard />
    </div>
  );
};

export default Home;
