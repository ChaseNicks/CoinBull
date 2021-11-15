// import React, { useEffect, useState } from "react";
// import { getASingleCoin } from "../utils/API";
import Chart from "../components/Chart";
import SideList from "../components/SideList";
// import ProductList from "../components/ProductList";
import { useParams } from "react-router-dom";
import "../index.css";
import NewsCard from "../components/NewsCard";

const SingleCoin = () => {
  // Get coin ID (ticker) from path params
  const { id } = useParams();

  return (
    <div>
      <div className="columns">
        {/* Render chart for single coin */}
        <div className="column">
          <Chart singleCoin={id} />
        </div>

        {/* Render side list for other viewable coins */}
        <div className="column is-one-third">
          <SideList />
        </div>
      </div>

      {/* Render news cards for specific coin*/}
      <NewsCard symbol={id} />
    </div>
  );
};

export default SingleCoin;
