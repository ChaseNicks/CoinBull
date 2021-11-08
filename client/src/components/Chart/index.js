import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const Chart = ({ singleCoin }) => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <TradingViewWidget
        symbol={singleCoin + "USD"}
        theme={Themes.WHITE}
        width={1200}
        height={700}
        local="en"
      />
    </div>
  );
};

export default Chart;
