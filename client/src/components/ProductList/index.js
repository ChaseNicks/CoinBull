import React, { useEffect, useState } from "react";

// import ProductItem from "../ProductItem";
import CoinTab from "../CoinTab";
import Pagination from "../Pagination";

// import { useStoreContext } from "../../utils/GlobalState";
// import { UPDATE_PRODUCTS } from "../../utils/actions";
// import { useQuery } from "@apollo/client";
// import { QUERY_PRODUCTS } from "../../utils/queries";
// import { idbPromise } from "../../utils/helpers";
// import spinner from "../../assets/spinner.gif";
import { getAllCoins } from "../../utils/API";

function ProductList() {
  // const [state, dispatch] = useStoreContext();

  // const { currentCategory } = state;
  const [coinsState, setCoinsState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState({ sortTarget: "", value: false });
  console.log(sortOrder);
  console.log(coinsState);

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

  useEffect(() => {
    if (sortOrder.sortTarget !== "") {
      let toBeSorted;

      if (sortOrder.sortTarget === "coin") {
        toBeSorted = "id";
      }
      console.log(toBeSorted);

      function compare(a, b) {
        const toBeSortedA = a[toBeSorted].toLowerCase();
        const toBeSortedB = b[toBeSorted].toLowerCase();

        let comparison = 0;
        if (toBeSortedA > toBeSortedB) {
          comparison = 1;
        } else if (toBeSortedA < toBeSortedB) {
          comparison = -1;
        }
        if (sortOrder.value === true) {
          return comparison;
        } else {
          return comparison * -1;
        }
      }

      coinsState.sort(compare);
    }
  }, [coinsState, sortOrder]);

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coinsState.slice(indexOfFirstCoin, indexOfLastCoin);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSortChange = (event) => {
    let invokedTarget = event.target.id;
    setSortOrder({ sortTarget: invokedTarget, value: !sortOrder.value });
  };

  // useEffect(() => {
  //   if (data) {
  //     dispatch({
  //       type: UPDATE_PRODUCTS,
  //       products: data.products,
  //     });
  //     data.products.forEach(product => {
  //       idbPromise("products", "put", product);
  //     });
  //   } else if (!loading) {
  //     idbPromise("products", "get").then(products => {
  //       dispatch({
  //         type: UPDATE_PRODUCTS,
  //         products: products,
  //       });
  //     });
  //   }
  // }, [data, loading, dispatch]);

  // function filterProducts() {
  //   if (!currentCategory) {
  //     return state.products;
  //   }

  //   return state.products.filter(
  //     product => product.category._id === currentCategory
  //   );
  // }

  return (
    <>
      {/* <div className="my-2">
        <h2>Our Products:</h2>
        {state.products.length ? (
          <div className="flex-row">
            {filterProducts().map((product) => (
              <ProductItem
                key={product._id}
                _id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </div>
        ) : (
          <h3>You haven't added any products yet!</h3>
        )}
        {loading ? <img src={spinner} alt="loading" /> : null}
      </div> */}
      <div
        className="is-flex is-justify-content-center"
        style={{ marginTop: "5rem" }}
      >
        <table className="table mt-1">
          <thead>
            <tr>
              <th>
                <span id="coin" className="arrows" onClick={handleSortChange}>
                  &#8661;
                </span>
                Coin
              </th>
              <th>
                <span className="arrows">&#8661;</span>Name
              </th>
              <th>
                <span className="arrows">&#8661;</span>Price
              </th>
              <th>
                <span className="arrows">&#8661;</span>
                Change
              </th>
              <th>
                <span className="arrows">&#8661;</span>Circulating supply
              </th>
              <th>
                <span className="arrows">&#8661;</span>Market Cap
              </th>
              <th>Price Chart</th>
              <th>Add to favorites</th>
            </tr>
          </thead>
          <tbody>
            {currentCoins.map((coin) => (
              <CoinTab
                key={coin.id}
                id={coin.id}
                name={coin.name}
                logo_url={coin.logo_url}
                price={coin.price}
                change={coin["1d"].price_change_pct}
                circulating_supply={coin.circulating_supply}
                market_cap={coin.market_cap}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        coinsPerPage={coinsPerPage}
        totalCoins={coinsState.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
}

export default ProductList;
