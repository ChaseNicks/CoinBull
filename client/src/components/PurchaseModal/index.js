import React, { useEffect, useState } from "react";
import { getCoin } from "../../utils/API";

const PurchaseModal = ({ handleModalRemoval, initializer, ticker }) => {
  const [currentCoin, setCurrentCoin] = useState({
    name: "",
    price: 0,
    logo_url: "",
    symbol: "",
  });
  const [cryptoInput, setCryptoInput] = useState(1);
  const [usdInput, setUsdInput] = useState(0);

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
          let cryptoCost = parseFloat(currentCoin.price).toFixed(2);
          setUsdInput(cryptoCost);
        } catch (err) {
          console.error(err);
        }
      };
      fetchCoin();
    }
  }, [currentCoin.price, initializer, ticker]);

  const handleInputChange = (e) => {
    const { target } = e;
    if (target.id === "crypto-input") {
      let cryptoCost = target.value * currentCoin.price;

      cryptoCost = parseFloat(cryptoCost).toFixed(2);

      setUsdInput(cryptoCost);
      setCryptoInput(target.value);
    } else {
      let cryptoWorth = target.value / currentCoin.price;

      cryptoWorth = parseFloat(cryptoWorth).toFixed(4);

      setCryptoInput(cryptoWorth);
      setUsdInput(target.value);
    }
  };

  return (
    <div className="modal">
      <div className="modal-background"></div>
      <div className="modal-content ">
        <div className="card modal-card">
          <div className="card-content">
            <div className="content">
              <div className="columns m-1">
                <div className="column is-one-fifth">
                  <img
                    className="modal-icon "
                    src={currentCoin.logo_url}
                    alt={currentCoin.logo_url}
                  />
                </div>

                <div className="column has-text-left">
                  <h1>
                    {currentCoin.name} ({currentCoin.symbol})
                  </h1>
                  <h1>Price: ${parseFloat(currentCoin.price).toFixed(4)}</h1>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded ">
                      <label className="label">{currentCoin.symbol}</label>
                      <input
                        className="input is-success"
                        type="number"
                        step="0.01"
                        placeholder={`Please enter the amount in ${currentCoin.symbol}`}
                        onChange={handleInputChange}
                        id="crypto-input"
                        value={cryptoInput}
                      />
                    </p>
                  </div>
                  <div className="field">
                    <p className="control is-expanded">
                      <label className="label">USD</label>
                      <input
                        className="input is-success"
                        type="number"
                        placeholder="Please enter the amount in USD"
                        onChange={handleInputChange}
                        id="usd-input"
                        value={usdInput}
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
              <div className="field">
                <div className="control ">
                  <button
                    className="button is-fullwidth close modal-close-button"
                    onClick={handleModalRemoval}
                  >
                    Close
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
