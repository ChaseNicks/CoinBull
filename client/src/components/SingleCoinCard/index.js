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
    <div
      className="card m-3 p-2 widget-card is-flex is-justify-content-center"
      style={{ flexDirection: "column" }}
    >
      <div
        className="card-content"
        style={{ boxShadow: "8px 8px 15px #D9D9DA, -8px -8px 15px #D9D9DA" }}
      >
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
      <footer
        className="card-footer is-flex is-align-self-center"
        style={{ width: "17rem", marginTop: "1rem", gap: ".5rem" }}
      >
        <button
          className="card-footer-item cards-buttons"
          style={{ backgroundColor: "rgb(56, 200, 56)", color: "white" }}
          type="button"
          onClick={() => handleDeleteCoin(coin.name, coin.ticker)}
        >
          Delete
        </button>
        <button
          className="card-footer-item cards-buttons"
          id={coin.ticker}
          type="button"
          style={{ backgroundColor: "rgb(56, 200, 56)", color: "white" }}
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
