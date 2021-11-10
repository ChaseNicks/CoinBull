import React, { useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_MY_FAVORITES } from "../utils/queries";
import SingleCoinCard from "../components/SingleCoinCard";
import { Helmet } from "react-helmet";
import { REMOVE_COIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_FAVORITES } from "../utils/actions";

const FavoriteCoins = () => {
  const [state, dispatch] = useStoreContext();
  const { loading, data } = useQuery(GET_MY_FAVORITES);
  const [removeCoinFromFavorite] = useMutation(REMOVE_COIN);
  const userData = data?.getFavoriteCoins || [];

  useEffect(() => {
    if (userData.favorites) {
      const uniqueCoins = [
        ...new Map(
          userData.favorites.map((coin) => [coin.name, coin])
        ).values(),
      ];
      dispatch({
        type: UPDATE_FAVORITES,
        favorites: uniqueCoins,
      });
    }
  }, [dispatch, userData.favorites]);

  if (!userData?.firstName) {
    return <h2>Users must be logged in to view this page!</h2>;
  }

  const handleDeleteCoin = async (name) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await removeCoinFromFavorite({
        variables: { name },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div className="container favorites-container ">
      <h1 className="has-text-success is-size-5">My favorite coins:</h1>
      <div className="is-flex is-justify-content-space-between is-flex-wrap-wrap">
        {state.favorites.map((coin) => (
          <SingleCoinCard
            coin={coin}
            key={coin.name}
            handleDeleteCoin={handleDeleteCoin}
          />
        ))}
      </div>
      <Helmet>
        <script
          defer
          src="https://www.livecoinwatch.com/static/lcw-widget.js"
        ></script>
      </Helmet>
      <div
        className="livecoinwatch-widget-5"
        lcw-base="USD"
        lcw-color-tx="#00d084"
        lcw-marquee-1="movers"
        lcw-marquee-items="30"
      ></div>
    </div>
  );
};

export default FavoriteCoins;
