import React from "react";
import upMarket from "../../assets/upmarket.png";
import downMarket from "../../assets/downmarket.png";
import { Link } from "react-router-dom";
import "./styles/SingleCoin.css";
import { FaStar, FaRegStar } from "react-icons/fa";

const CoinTab = (coin) => {
  let {
    rank,
    name,
    id,
    logo_url,
    price,
    change,
    circulating_supply,
    market_cap,
    handleAddFavorite,
    favorite,
  } = coin;
  price = parseFloat(price).toFixed(4);
  circulating_supply = circulating_supply.replace(/(.)(?=(\d{3})+$)/g, "$1,");
  market_cap = market_cap.replace(/(.)(?=(\d{3})+$)/g, "$1,");
  change = parseFloat(change * 100).toFixed(2);

  return (
    <tr>
      <th className="is-vcentered">
        <button className="star-icon">
          {favorite ? (
            <FaStar />
          ) : (
            <FaRegStar onClick={() => handleAddFavorite(id)} />
          )}
        </button>
      </th>
      <th className="is-vcentered">{rank}</th>
      <th className="is-vcentered">
        <Link to={`/coins/${id}`}>
          <img className="coins-icons" src={logo_url} alt={logo_url} />
        </Link>
      </th>
      <th className="is-vcentered">
        <Link className="coin-name" to={`/coins/${id}`}>
          {name}
        </Link>
      </th>
      <th className="is-vcentered">${price}</th>
      <th
        className={
          change > 0
            ? "has-text-success is-vcentered"
            : "has-text-danger is-vcentered"
        }
      >
        {change} %
      </th>
      <th className="is-vcentered">{circulating_supply}</th>
      <th className="is-vcentered">${market_cap}</th>
      <th className="is-vcentered">
        {change > 0 ? (
          <img width="100" src={upMarket} alt="market chart" />
        ) : (
          <img width="100" src={downMarket} alt="market chart" />
        )}
      </th>
    </tr>
  );
};

export default CoinTab;
