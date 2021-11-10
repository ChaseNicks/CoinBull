import React from "react";

const SingleCoinCard = ({ coin }) => {
  return (
    <div class="card">
      <div class="card-content">
        {coin.name}
        <img src={coin.logoURL} alt={coin.name} />
      </div>
    </div>
  );
};

export default SingleCoinCard;
