import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_My_FAVORITES } from "../utils/queries";
import SingleCoinCard from "../components/SingleCoinCard";

const FavoriteCoins = () => {
  const { loading, data } = useQuery(GET_My_FAVORITES);

  const userData = data?.getFavoriteCoins || [];

  console.log(userData);

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
          <SingleCoinCard coin={coin} key={coin.id} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteCoins;
