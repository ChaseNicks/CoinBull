import React from "react";
import { Helmet } from "react-helmet";

const SingleCoinCard = ({ coin }) => {
  return (
    <div className="card">
      <div className="card-content">
        <Helmet>
          <script
            defer
            src="https://www.livecoinwatch.com/static/lcw-widget.js"
          ></script>
        </Helmet>
        <div
          className="livecoinwatch-widget-1 widget-card"
          lcw-coin={`${coin.ticker}`}
          lcw-base="USD"
          lcw-secondary="BTC"
          lcw-period="d"
          lcw-color-tx="#000000"
          lcw-color-pr="#0693e3"
          lcw-color-bg="#e6e6e6"
          lcw-border-w="1"
        ></div>
        {coin.name}
        <img src={coin.logoURL} alt={coin.name} />
      </div>
    </div>
  );
};

export default SingleCoinCard;
