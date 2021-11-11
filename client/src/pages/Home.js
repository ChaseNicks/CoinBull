import React from "react";
import pricesPhoto from '../assets/chart.png';
import pricingPhoto from '../assets/prices.png';
import favPhoto from '../assets/favs.png';
import newsPhoto from '../assets/newsss.png';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container backgroundbull" style={{ marginTop: "2rem" }}>
      {/* <CategoryMenu /> */}
      {/* <ProductList />
      <NewsCard symbol="ADA" /> */}
      <h1 className="is-size-1 is-size-2-mobile has-text-centered has-text-weight-bold" style={{ marginTop: "2.5rem", marginBottom: "2.5rem" }}> Designed & Created For You</h1>
      <div className="columns is-pricing" style={{ marginRight: "1rem", marginLeft: "1rem", marginTop: "2.5rem" }}>
        <div className="column is-half is-flex-direction-column is-align-items-center">
          <h1 className="is-size-2 is-size-3-mobile has-text-weight-medium">Technical Chart with Multiple Features and Studies</h1>
          <p style={{ marginTop: "1.3rem" }} className="is-size-5 is-size-6-mobile">Responsive charts that gives you the power to make your best analysis from high level all the way to the lowest level on granularity </p>
          <div className="is-flex is-justify-content-center">
            <Link to="/charts" style={{ textDecoration: "none" }}><button
              className="button is-block is-size-5 is-size-6-mobile is-fullwidth is-primary is-medium is-rounded"
              type="submit"
              style={{
                backgroundColor: "rgb(56, 200, 56)",
                marginTop: "1.3rem",
                marginBottom: "1.3rem",
                marginRight: "2rem",
                width: "15rem"
              }}
            > Check it Out</button>
            </Link>
          </div>
        </div>
        <div className="column is-half">
          <img src={pricesPhoto} alt="chart" />
        </div>
      </div>

      <div className="is-flex-direction-column is-justify-content-center is-align-content-center" style={{ marginRight: "1rem", marginLeft: "1rem", marginTop: "2.5rem" }}>

        <div className=" is-flex-direction-column is-align-items-center">
          <h1 className="is-size-2 is-size-3-mobile  has-text-weight-medium has-text-centered">Real Time Pricing For Your Favorite Coins</h1>
          <p style={{ marginTop: "1.3rem" }} className="is-size-5 is-size-6-mobile has-text-centered">Dynamic table with endless amounts of coins with all the data you could ever need to make better buying and selling decisions. Filter and sort by the data points thats going to help you lock in your future for the digital world.</p>

        </div>
        <div style={{ marginTop: "1.3rem" }} className="is-flex is-justify-content-center">
          <img src={pricingPhoto} alt="chart" />
        </div>
        <div className="is-flex is-justify-content-center">
          <Link to="/prices" style={{ textDecoration: "none" }}>
            <button
              className="button is-block is-fullwidth is-size-5 is-size-6-mobile is-primary is-medium is-rounded"
              type="submit"
              style={{
                backgroundColor: "rgb(56, 200, 56)",
                marginTop: "1.3rem",
                marginBottom: "1.3rem",
                marginRight: "2rem",
                width: "15rem"
              }}
            >View</button>
          </Link>
        </div>
      </div>

      <div className="columns is-pricing" style={{ marginRight: "1rem", marginLeft: "1rem", marginTop: "2.5rem", marginBottom: "2.5rem" }}>
        <div className="column is-half is-flex-direction-column is-align-items-center">
          <h1 className="is-size-2 is-size-3-mobile has-text-weight-medium">A Page Tailored Just For You</h1>
          <p style={{ marginTop: "1.3rem" }} className="is-size-5 is-size-6-mobile"> You tracking a particular coin or maybe even multiple? Favorite it so you can view all your favorite coins on the same page with chart, pricing, % change, and more.</p>
          <div className="is-flex is-justify-content-center">
            <Link to="/favorites" style={{ textDecoration: "none" }}>
              <button
                className="button is-block is-fullwidth is-size-5 is-size-6-mobile is-primary is-medium is-rounded"
                type="submit"
                style={{
                  backgroundColor: "rgb(56, 200, 56)",
                  marginTop: "1.3rem",
                  marginBottom: "1.3rem",
                  marginRight: "2rem",
                  width: "15rem"
                }}
              > Favorites</button>
            </Link>
          </div>
        </div>
        <div className="column is-half">
          <img src={favPhoto} alt="chart" />
        </div>
      </div>

      <div className="is-flex-direction-column is-justify-content-center is-align-content-center" style={{ marginRight: "1rem", marginLeft: "1rem", marginTop: "2.5rem", marginBottom: "2.5rem" }}>

        <div className=" is-flex-direction-column is-align-items-center">
          <h1 className="is-size-2 is-size-3-mobile  has-text-weight-medium has-text-centered">Always Know Whats Being Talked About</h1>
          <p style={{ marginTop: "1.3rem" }} className="is-size-5 is-size-6-mobile has-text-centered">Constent updating news feed so you'll always be on top of whats happening in the crypto world. Make better educated decisions based on what is being talked about in the media.</p>

        </div>
        <div style={{ marginTop: "1.3rem" }} className="is-flex is-justify-content-center">
          <img src={newsPhoto} alt="chart" />
        </div>
        <div className="is-flex is-justify-content-center">
        </div>
      </div>


    </div>
  );
};

export default Home;
