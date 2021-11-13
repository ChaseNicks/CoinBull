import React from "react";
import { Helmet } from "react-helmet";
import PurchaseModal from "../PurchaseModal";

const SingleCoinCard = ({
  coin,
  handleDeleteCoin,
  handlePurchaseButton,
  handleModalRemoval,
  initializer,
}) => {
  return (
    <div className="card m-3 p-2 widget-card">
      <div className="card-content">
        <div
          className="nomics-ticker-widget"
          data-name={`${coin.name}`}
          data-base={`${coin.ticker}`}
          data-quote="USD"
        ></div>
        <Helmet>
          <script src="https://widget.nomics.com/embed.js"></script>
        </Helmet>
      </div>
      <footer className="card-footer">
        <button
          className="card-footer-item cards-buttons"
          style={{ backgroundColor: "rgb(56, 200, 56)" }}
          type="button"
          onClick={() => handleDeleteCoin(coin.name)}
        >
          Delete
        </button>
        <button
          className="card-footer-item cards-buttons"
          id={coin.ticker}
          type="button"
          style={{ backgroundColor: "rgb(56, 200, 56)" }}
          onClick={handlePurchaseButton}
        >
          Calculate
        </button>
        <PurchaseModal
          handleModalRemoval={handleModalRemoval}
          initializer={initializer}
          ticker={coin.ticker}
        />
      </footer>
    </div>
  );
};

export default SingleCoinCard;
