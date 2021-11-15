import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_MY_FAVORITES } from "../utils/queries";
import SingleCoinCard from "../components/SingleCoinCard";
import { Helmet } from "react-helmet";
import { REMOVE_COIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_FAVORITES, REMOVE_FROM_FAVORITES } from "../utils/actions";

const FavoriteCoins = () => {
  const [state, dispatch] = useStoreContext();
  const { loading, data } = useQuery(GET_MY_FAVORITES);
  const [removeCoinFromFavorite] = useMutation(REMOVE_COIN);
  const userData = data?.getFavoriteCoins || [];
  const [initializer, setInitializer] = useState("");
  console.log(state);

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

  let notLoggedInStyle = {
    height: "100%",
    marginTop: "65px",
    marginBottom: "65px",
  };

  if (!userData?.firstName) {
    return (
      <div
        style={notLoggedInStyle}
        className="columns is-vcentered is-hcentered"
      >
        <div className="column has-text-centered mb-5">
          <h2>You must be logged in to view your favorites</h2>
        </div>
      </div>
    );
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
      dispatch({
        type: REMOVE_FROM_FAVORITES,
        name: name,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handlePurchaseButton = (e) => {
    e.stopPropagation();

    setInitializer(e.currentTarget.id);
    e.currentTarget.nextElementSibling.classList.add("is-active");
    document.documentElement.classList.add("is-clipped");
  };

  const handleModalRemoval = (e) => {
    e.stopPropagation();
    setInitializer(false);
    if (e.currentTarget.classList.contains("close")) {
      e.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove(
        "is-active"
      );
    }
    e.currentTarget.parentNode.classList.remove("is-active");
    document.documentElement.classList.remove("is-clipped");
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div className="hero favorites-container is-fullheight">
      <h1 className="is-size-1 is-size-2-mobile has-text-centered has-text-weight-bold">
        My Favorites
      </h1>
      <div className="hero-body is-flex is-justify-content-space-evenly is-flex-wrap-wrap">
        {state.favorites.map((coin) => (
          <SingleCoinCard
            coin={coin}
            key={coin.name}
            handleDeleteCoin={handleDeleteCoin}
            handlePurchaseButton={handlePurchaseButton}
            handleModalRemoval={handleModalRemoval}
            initializer={initializer}
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
