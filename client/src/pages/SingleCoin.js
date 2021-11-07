import React, { useEffect, useState } from "react";
import { getASingleCoin } from "../utils/API";
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
      <div className="is-flex">
        <Chart singleCoin={id} />
        {/*  <News /> */}
        <SideList />
      </div>
      <NewsCard symbol="ADA" />
    </div>
  );
};

export default SingleCoin;
