import React from "react";
import { Helmet } from "react-helmet";

const SingleCoinCard = ({ coin, handleDeleteCoin }) => {
  return (
    <div className="card p-2 widget-card">
      <div className="card-content">
        <Helmet>
          <script
            defer
            src="https://www.livecoinwatch.com/static/lcw-widget.js"
          ></script>
        </Helmet>
        <div
          className="livecoinwatch-widget-1 "
          lcw-coin={`${coin.ticker}`}
          lcw-base="USD"
          lcw-secondary="BTC"
          lcw-period="d"
          lcw-color-tx="#00d084"
          lcw-color-pr="#00d084"
          lcw-color-bg="#e6e6e6"
          lcw-border-w="1"
          lcw-digits="4"
        ></div>
        <div className="media">
          <div className="media-left">
            <figure className="image is-32x32">
              <img src={`${coin.logoURL}`} alt={`${coin.name}`} />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{coin.name}</p>
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <button
          className="card-footer-item cards-buttons"
          type="button"
          onClick={() => handleDeleteCoin(coin.name)}
        >
          Delete
        </button>
        <button className="card-footer-item cards-buttons" type="button">
          Purchase
        </button>
      </footer>
    </div>
  );
};

export default SingleCoinCard;
