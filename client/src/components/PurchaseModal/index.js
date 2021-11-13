import React, { useEffect, useState } from "react";
import { getCoin } from "../../utils/API";

const PurchaseModal = ({ handleModalRemoval, initializer, ticker }) => {
  const [currentCoin, setCurrentCoin] = useState({
    name: "",
    price: 0,
    logo_url: "",
    symbol: "",
  });

  // console.log("currentCoin", currentCoin);

  useEffect(() => {
    if (initializer === ticker) {
      const fetchCoin = async () => {
        try {
          const coinData = await getCoin(ticker);
          setCurrentCoin({
            name: coinData[0].name,
            price: coinData[0].price,
            logo_url: coinData[0].logo_url,
            symbol: coinData[0].symbol,
          });
        } catch (err) {
          console.error(err);
        }
      };
      fetchCoin();
    }
  }, [initializer, ticker]);

  return (
    <div className="modal">
      <div className="modal-background"></div>
      <div className="modal-content ">
        <div className="card modal-card">
          <img
            className="modal-icon ml-6 mt-6"
            src={currentCoin.logo_url}
            alt={currentCoin.logo_url}
          />
          <div className="card-content">
            <h1 className="label">Buy {currentCoin.name}</h1>
            <div className="content">
              <h1>
                {currentCoin.name} price: ${currentCoin.price}
              </h1>
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded ">
                      <input
                        className="input is-success"
                        type="number"
                        step="0.01"
                        placeholder={`Please enter the amount in ${currentCoin.symbol}`}
                      />
                    </p>
                  </div>
                  <div className="field">
                    <p className="control is-expanded">
                      <input
                        className="input is-success"
                        type="number"
                        placeholder="Please enter the amount in USD"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control modal-buttons">
                  <button
                    className="cards-buttons button is-fullwidth is-link"
                    type="button"
                  >
                    Add to cart
                  </button>
                </div>
                <div className="control modal-buttons">
                  <button
                    className="cards-buttons button is-fullwidth is-link cancel"
                    onClick={handleModalRemoval}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={handleModalRemoval}
      ></button>
    </div>
  );
};

export default PurchaseModal;
