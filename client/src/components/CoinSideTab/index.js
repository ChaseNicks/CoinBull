import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const CoinSideTab = (coin) => {
  let { name, id, logo_url, price, change, favorite, handleDeleteCoin, handleAddFavorite } = coin;
  price = parseFloat(price).toFixed(2);
  change = parseFloat(change * 100).toFixed(2);
  

  const [isFavorite, setIsFavorite] = useState(favorite);
  

  // circulating_supply = circulating_supply.replace(/(.)(?=(\d{3})+$)/g, "$1,");
  // market_cap = market_cap.replace(/(.)(?=(\d{3})+$)/g, "$1,");

  return (
    <tr>
      <th className="is-vcentered">
      <button className="star-icon">
            {isFavorite ? (
              <FaStar
                id="delete-star"
                onClick={() => {
                  handleDeleteCoin(name, id);
                  setIsFavorite(false);
                }}
              />
            ) : (
              <FaRegStar
                onClick={() => {
                  handleAddFavorite(id);
                  setIsFavorite(true);
                }}
              />
            )}
          </button>
          </th>
      <th className="is-vcentered">
        <Link to={`/coins/${id}`}>
          <img className="coins-icons" src={logo_url} alt={logo_url} />
        </Link>
      </th>
      <th className="is-vcentered is-size-6 is-size-7-mobile">{name}</th>
      <th className="is-vcentered is-size-6 is-size-7-mobile">${price}</th>
      <th
        className={
          change > 0
            ? "has-text-success is-vcentered is-size-6 is-size-7-mobile"
            : "has-text-danger is-vcentered is-size-6 is-size-7-mobile"
        }
      >
        {change}%
      </th>
    </tr>
  );
};

export default CoinSideTab;
