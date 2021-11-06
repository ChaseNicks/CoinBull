import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import CoinTab from "../CoinTab";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import spinner from "../../assets/spinner.gif";
import { getAllCoins } from "../../utils/API";

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;
  const [coinsState, setCoinsState] = useState([]);
  // console.log(coinsState);

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const coins = await getAllCoins();
        setCoinsState(coins);
        console.log("helloooooooooooo");
      } catch (err) {
        console.error(err);
      }
    };
    fetchCoins();
  }, []);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

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

      <table class="table mt-2">
        <thead>
          <tr>
            <th>
              <abbr title="Coin">Coin</abbr>
            </th>
            <th>
              <abbr title="Name">Name</abbr>
            </th>
            <th>
              <abbr title="Price">Price</abbr>
            </th>
            <th>
              <abbr title="Change">Change</abbr>
            </th>
            <th>
              <abbr title="Circulating_Supply">Circulating supply</abbr>
            </th>
            <th>
              <abbr title="Price_Chart">Market Cap</abbr>
            </th>
            <th>
              <abbr title="Price_Chart">Price Chart</abbr>
            </th>
            <th>Add to favorites</th>
          </tr>
        </thead>
        <tbody>
          {coinsState.map((coin) => (
            <CoinTab
              key={coin.id}
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
    </>
  );
}

export default ProductList;
