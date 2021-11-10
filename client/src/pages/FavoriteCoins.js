import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_My_FAVORITES } from "../utils/queries";
import SingleCoinCard from "../components/SingleCoinCard";
import { Helmet } from "react-helmet";

const FavoriteCoins = () => {
  const { loading, data } = useQuery(GET_My_FAVORITES);

  const userData = data?.getFavoriteCoins || [];

  if (!userData?.firstName) {
    return <h2>Users must be logged in to view this page!</h2>;
  }

  const uniqueCoins = [
    ...new Map(userData.favorites.map((coin) => [coin.name, coin])).values(),
  ];
  console.log(uniqueCoins);

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div className="container favorites-container ">
      <h1 className="has-text-success is-size-5">My favorite coins:</h1>
      <div className="is-flex is-justify-content-space-between">
        {uniqueCoins.map((coin) => (
          <SingleCoinCard coin={coin} key={coin.name} />
        ))}
      </div>
      <Helmet>
        <script
          defer
          src="https://www.livecoinwatch.com/static/lcw-widget.js"
        ></script>
      </Helmet>{" "}
      <div
        class="livecoinwatch-widget-5"
        lcw-base="USD"
        lcw-color-tx="#00d084"
        lcw-marquee-1="movers"
        lcw-marquee-items="30"
      ></div>
    </div>
  );
};

export default FavoriteCoins;
