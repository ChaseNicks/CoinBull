import upMarket from "../../assets/upmarket.png";
import downMarket from "../../assets/downmarket.png";
import { Link } from "react-router-dom";
import "./styles/SingleCoin.css";

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
  } = coin;
  price = parseFloat(price).toFixed(4);
  circulating_supply = circulating_supply.replace(/(.)(?=(\d{3})+$)/g, "$1,");
  market_cap = market_cap.replace(/(.)(?=(\d{3})+$)/g, "$1,");
  change = parseFloat(change * 100).toFixed(2);

  return (
    <tr>
      <th className="is-vcentered">
        <button className="star-icon" onClick={() => handleAddFavorite(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-star"
            viewBox="0 0 16 16"
          >
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg>
        </button>
      </th>
      <th className="is-vcentered">{rank}</th>
      <th className="is-vcentered">
        <Link to={`/coins/${id}`}>
          <img className="coins-icons" src={logo_url} alt={logo_url} />
        </Link>
      </th>
      <th className="is-vcentered">{name}</th>
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
