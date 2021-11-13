// import React, { useEffect, useState } from "react";
// import { getASingleCoin } from "../utils/API";
import Chart from "../components/Chart";
import SideList from "../components/SideList";
// import ProductList from "../components/ProductList";
import { useParams } from "react-router-dom";
import "../index.css";
import NewsCard from "../components/NewsCard";

const SingleCoin = () => {
  // const [singleCoin, setSingleCoin] = useState("");

  // useEffect(() => {
  //   const fetchASingleCoin = async () => {
  //     try {
  //       const coin = await getASingleCoin();
  //       setSingleCoin(coin);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   fetchASingleCoin();
  // }, []);

  const { id } = useParams();

  return (
    <div>
      <div className="columns">
        <div className="column">
          <Chart singleCoin={id} />
          {/*  <News /> */}
        </div>
        <div className="column is-one-third">
          <SideList />
        </div>
      </div>
      <NewsCard symbol="ADA" />
    </div>
  );
};

export default SingleCoin;
