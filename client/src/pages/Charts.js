import React from "react";
import Chart from "../components/Chart";
import { useParams } from "react-router-dom";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const Charting = (singleCoin) => {

// const { id } = useParams();

  return (
    <div>
      <div className="is-flex is-justify-content-center">
        {/* <Chart singleCoin={id} />  */}
        <TradingViewWidget
        container_id = "techincal-analysis"
        symbol={singleCoin + "USD"}
        theme={Themes.WHITE}
        width={1800}
        height={900}
        local="en"
        toolbar_bg= "#f1f3f6"
      />       
      </div>
    </div>
  );
};

export default Charting;
