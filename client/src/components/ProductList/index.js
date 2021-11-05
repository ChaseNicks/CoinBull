import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import SingleCoin from "../SingleCoin";
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
      <div className="my-2">
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
      </div>
      <div>
        {coinsState.map((coin) => (
          <SingleCoin key={coin.id} logo_url={coin.logo_url} />
        ))}
        {console.log(coinsState)}
      </div>
    </>
  );
}

export default ProductList;
