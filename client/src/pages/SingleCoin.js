import React, { useEffect, useState } from "react";
import { getASingleCoin } from "../utils/API";
import Chart from "../components/Chart";
import ProductList from "../components/ProductList";
import { useParams } from "react-router-dom";

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
      <Chart singleCoin={id} />
      {/*  <News /> */}
      <ProductList />
    </div>
  );
};

export default SingleCoin;
