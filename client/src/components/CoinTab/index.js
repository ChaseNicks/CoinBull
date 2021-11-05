const CoinTab = (coin) => {
  const { name, logo_url, price, change, circulating_supply, market_cap } =
    coin;
  return (
    <tr>
      <th>
        <img height="40" width="40" src={logo_url} alt={logo_url} />
      </th>
      <th>{name}</th>
      <th>${price}</th>
      <th class={change > 0 ? "has-text-success" : "has-text-danger"}>
        {change}
      </th>
      <th>{circulating_supply}</th>
      <th>{market_cap}</th>
      <th></th>
      <th>
        <button class="button is-small is-success">Favorite</button>
      </th>
    </tr>
  );
};

export default CoinTab;
