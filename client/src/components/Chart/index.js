import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const Chart = ({ singleCoin }) => {
  return (
    <div>
      <TradingViewWidget
        symbol={singleCoin + "USD"}
        theme={Themes.LIGHT}
        height={500}
        width={700}
      />
    </div>
  );
};

export default Chart;
