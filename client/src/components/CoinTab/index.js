import upMarket from "../../assets/upmarket.png";
import downMarket from "../../assets/downmarket.png";

const CoinTab = (coin) => {
  let { name, logo_url, price, change, circulating_supply, market_cap } = coin;
  price = parseFloat(price).toFixed(4);

  return (
    <tr>
      <th>
        <img height="40" width="40" src={logo_url} alt={logo_url} />
      </th>
      <th>{name}</th>
      <th>$ {price}</th>
      <th className={change > 0 ? "has-text-success" : "has-text-danger"}>
        {change}
      </th>
      <th>{circulating_supply}</th>
      <th>{market_cap}</th>
      <th>
        {change > 0 ? (
          <img width="100" src={upMarket} alt="market chart" />
        ) : (
          <img width="100" src={downMarket} alt="market chart" />
        )}
      </th>
      <th>
        <button className="button is-small is-success">Favorite</button>
      </th>
    </tr>
  );
};

export default CoinTab;
