import React from "react";
import chart from "../../assets/chart.png";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const Chart = ({ singleCoin }) => {
  return (
    <div>
      <TradingViewWidget
        symbol={singleCoin + "USD"}
        theme={Themes.DARK}
        width={700}
        height={500}
        local="en"
      />

      {console.log(singleCoin)}
    </div>
  );
};

export default Chart;
