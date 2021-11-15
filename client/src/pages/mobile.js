import React from "react";
import stepone from "../assets/step1.png";
import steptwo from "../assets/step2.png";
import stepthree from "../assets/step3.png";
import stepfour from "../assets/step4.JPG";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Mobile = () => {
  return (
    <div>
      <div
        className="container backgroundbull"
        style={{ marginTop: "-2rem", width: "100%" }}
      >
        <h1
          className="is-size-1 is-size-2-mobile has-text-centered has-text-weight-bold"
          style={{
            marginTop: "2.5rem",
            marginBottom: "2rem",
            marginRight: ".8rem",
            marginLeft: ".8rem",
          }}
        >
          {" "}
          App Set Up
        </h1>
        <div
          className="is-flex-direction-column is-justify-content-center is-align-content-center"
          style={{
            marginRight: ".2rem",
            marginLeft: ".2rem",
            marginTop: "2.5rem",
          }}
        >
          <div className=" is-flex-direction-column is-align-items-center">
            <h1 className="is-size-2 is-size-3-mobile  has-text-weight-medium has-text-centered">
              Step 1
            </h1>
            <p
              style={{
                marginTop: "1.3rem",
                marginLeft: ".3rem",
                marginRight: ".3rem",
              }}
              className="is-size-5 is-size-6-mobile has-text-centered"
            >
              Within Saferia or Google you'll see the below "share" icon
              indicated in the below picture, click there.
            </p>
          </div>
          <div
            style={{ marginTop: "1.3rem" }}
            className="is-flex is-justify-content-center"
          >
            <img src={stepone} alt="chart" style={{ height: "40rem" }} />
          </div>
        </div>

        <div
          className="is-flex-direction-column is-justify-content-center is-align-content-center"
          style={{
            marginRight: ".2rem",
            marginLeft: ".2rem",
            marginTop: "2.5rem",
          }}
        >
          <div className=" is-flex-direction-column is-align-items-center">
            <h1 className="is-size-2 is-size-3-mobile  has-text-weight-medium has-text-centered">
              Step 2
            </h1>
            <p
              style={{
                marginTop: "1.3rem",
                marginLeft: ".3rem",
                marginRight: ".3rem",
              }}
              className="is-size-5 is-size-6-mobile has-text-centered"
            >
              Scroll down and you'll see the option "Add to Home Screen" and
              click.
            </p>
          </div>
          <div
            style={{ marginTop: "1.3rem" }}
            className="is-flex is-justify-content-center"
          >
            <img src={steptwo} alt="chart" style={{ height: "40rem" }} />
          </div>
        </div>

        <div
          className="is-flex-direction-column is-justify-content-center is-align-content-center"
          style={{
            marginRight: ".2rem",
            marginLeft: ".2rem",
            marginTop: "2.5rem",
          }}
        >
          <div className=" is-flex-direction-column is-align-items-center">
            <h1 className="is-size-2 is-size-3-mobile  has-text-weight-medium has-text-centered">
              Step 3
            </h1>
            <p
              style={{
                marginTop: "1.3rem",
                marginLeft: ".3rem",
                marginRight: ".3rem",
              }}
              className="is-size-5 is-size-6-mobile has-text-centered"
            >
              You'll then be taken to this screen, here is where you name the
              app whatever you please and hit add for it to be on your mobile
              device homescreen.
            </p>
          </div>
          <div
            style={{ marginTop: "1.3rem" }}
            className="is-flex is-justify-content-center"
          >
            <img src={stepthree} alt="chart" style={{ height: "40rem" }} />
          </div>
        </div>

        <div
          className="is-flex-direction-column is-justify-content-center is-align-content-center"
          style={{
            marginRight: ".2rem",
            marginLeft: ".2rem",
            marginTop: "2.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <div className=" is-flex-direction-column is-align-items-center">
            <h1 className="is-size-2 is-size-3-mobile  has-text-weight-medium has-text-centered">
              Final Step
            </h1>
            <p
              style={{
                marginTop: "1.3rem",
                marginLeft: ".3rem",
                marginRight: ".3rem",
              }}
              className="is-size-5 is-size-6-mobile has-text-centered"
            >
              Congrats! You're all done, now just move the app where ever you'd
              like and enjoy!
            </p>
          </div>
          <div
            style={{ marginTop: "1.3rem" }}
            className="is-flex is-justify-content-center"
          >
            <img
              src={stepfour}
              alt="chart"
              style={{ height: "20rem", width: "20rem" }}
            />
          </div>
        </div>
      </div>
      <Helmet>
        <script defer src="https://cryptorank.io/widget/marquee.js"></script>
      </Helmet>
      <div
        id="cr-widget-marquee"
        data-coins="ripple,binance-coin,bitcoin,ethereum,tether,eos,monero,dogecoin,shiba-inu,luna,avalanche,chainlink,wrapped-bitcoin,algorand,uniswap,usdcoin,binance-usd,bitcoin-cash,stellar,ethereum-classic"
        data-theme="light"
        data-show-symbol="true"
        data-show-icon="true"
        data-show-period-change="true"
        data-period-change="24H"
        data-api-url="https://api.cryptorank.io/v0"
      ></div>
    </div>
  );
};

export default Mobile;
