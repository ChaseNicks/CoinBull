import React, { useEffect, useState } from "react";
import CoinSideTab from "../CoinSideTab";
import Pagination from "../Pagination";
import { getAllCoins } from "../../utils/API";

function SideList() {
  // const [state, dispatch] = useStoreContext();

  // const { currentCategory } = state;
  const [coinsState, setCoinsState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(200);

  // const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const coins = await getAllCoins();
        setCoinsState(coins);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCoins();
  }, []);

  
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coinsState.slice(indexOfFirstCoin, indexOfLastCoin);

  return (

    <div className="is-flex-direction-column">
      <div className="is-capitalized is-size-3 has-text-left">Explore</div>
      <div className="is-flex-direction-column" style={{ height: "740px", overflow: "scroll" }}>
        <div className="is-flex is-justify-content-center">
          <table className="table mt-1">
            <thead>
              <tr>
                <th>Coin</th>
                <th>Name</th>
                <th>Price</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {currentCoins.map((coin) => (
                <CoinSideTab
                  key={coin.id}
                  id={coin.id}
                  name={coin.name}
                  logo_url={coin.logo_url}
                  price={coin.price}
                  change={coin["1d"].price_change_pct}
                />
              ))}
            </tbody>
          </table>
        </div>

    <>
    <div className="is-flex-direction-column" style={{ height: "740px", overflow: "scroll", marginTop: "5rem"}}>
      <div className="is-flex is-justify-content-center">
        <table className="table mt-1">
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {currentCoins.map((coin) => (
              <CoinSideTab
                key={coin.id}
                id={coin.id}
                name={coin.name}
                logo_url={coin.logo_url}
                price={coin.price}
                change={coin["1d"].price_change_pct}
              />
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default SideList;