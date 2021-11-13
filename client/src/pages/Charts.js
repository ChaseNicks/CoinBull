import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const Charting = () => {
  return (
    <div>
      <div className="is-flex is-justify-content-center">
        <TradingViewWidget
          container_id="techincal-analysis"
          symbol={"BTC" + "USD"}
          theme={Themes.DARK}
          width={1400}
          height={700}
          local="en"
          toolbar_bg="#f1f3f6"
        />
      </div>
    </div>
  );
};

export default Charting;
