import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const Charting = () => {
  return (
    <div>
      <div style={{ marginLeft: ".3rem", marginRight: ".3rem" }}>
        <TradingViewWidget
          container_id="techincal-analysis"
          symbol={"BTC" + "USD"}
          theme={Themes.WHITE}
          width="100%"
          height="700px"
          local="en"
          toolbar_bg="#f1f3f6"
        />
      </div>
    </div>
  );
};

export default Charting;
