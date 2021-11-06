import React from "react";
import chart from "../../assets/chart.png";

const index = ({ singleCoin }) => {
  return (
    <div>
      <img width="600" src={chart} alt="coin chart" />
      {console.log(singleCoin)}
    </div>
  );
};

export default index;
