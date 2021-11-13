import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const Chart = ({ singleCoin }) => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <TradingViewWidget
        container_id="techincal-analysis"
        symbol={singleCoin + "USD"}
        theme={Themes.WHITE}
        width="100%"
        height="700px"
        local="en"
        toolbar_bg="#f1f3f6"
      />
    </div>
  );
};

export default Chart;
