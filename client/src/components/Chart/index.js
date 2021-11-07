import React from "react";
import chart from "../../assets/chart.png";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const Chart = ({ singleCoin }) => {
  return (
    <div>
      <TradingViewWidget
        symbol={singleCoin + "USD"}
        theme={Themes.WHITE}
        width={1200}
        height={700}
        local="en"
      />

      {console.log(singleCoin)}
    </div>
  );
};

export default Chart;
