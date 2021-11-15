import { Link } from "react-router-dom";

const CoinSideTab = (coin) => {
  let { name, id, logo_url, price, change, circulating_supply, market_cap } =
    coin;
  price = parseFloat(price).toFixed(4);
  change = parseFloat(change * 100).toFixed(2);
  // circulating_supply = circulating_supply.replace(/(.)(?=(\d{3})+$)/g, "$1,");
  // market_cap = market_cap.replace(/(.)(?=(\d{3})+$)/g, "$1,");

  return (
    <tr>
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
