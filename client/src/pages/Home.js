import React from "react";
// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import NewsCard from "../components/NewsCard";
import pricesPhoto from '../assets/chart.png'
import pricingPhoto from '../assets/prices.png'
import favPhoto from '../assets/favs.png'

const Home = () => {
  return (
    <div className="container" style={{ marginTop: "2rem" }}>
      {/* <CategoryMenu /> */}
      {/* <ProductList />
      <NewsCard symbol="ADA" /> */}
      <h1 className="is-size-1 has-text-centered has-text-weight-bold" style={{ marginTop: "1.2rem", marginBottom: "2.5rem"}}> Made and Designed For You</h1>
      <div className="columns is-pricing" style={{ marginRight: "2rem", marginLeft: "2rem" }}>
        <div className="column is-half is-flex-direction-column is-align-items-center">
          <h1 className="is-size-2 has-text-weight-medium">Techincal Chart with Multiple Features and Studies</h1>
          <p style={{ marginTop: "1.3rem" }} className="is-size-5">Responsive charts that gives you the power to make your best analysis from high level all the way to the lowest level on granularity </p>
          <div className="is-flex is-justify-content-center">
            <button
              className="button is-block is-fullwidth is-primary is-medium is-rounded"
              type="submit"
              style={{
                backgroundColor: "rgb(56, 200, 56)",
                marginTop: "1.3rem",
                marginBottom: "1.3rem",
                marginRight: "2rem",
                width: "15rem"
              }}
            > Check it Out</button>
          </div>
        </div>
        <div className="column is-half">
          <img src={pricesPhoto} alt="chart" />
        </div>
      </div>

      <div className="is-flex-direction-column is-justify-content-center is-align-content-center" style={{ marginRight: "2rem", marginLeft: "2rem" }}>

        <div className=" is-flex-direction-column is-align-items-center">
          <h1 className="is-size-2 has-text-weight-medium has-text-centered">Real Time Pricing For Your Favorite Coins</h1>
          <p style={{ marginTop: "1.3rem" }} className="is-size-5 has-text-centered">Dynamic table with endless amounts of coins with all the data you could ever need to make better buying and selling decisions. Filter and sort by the data points thats going to help you lock in your future for the digital world.</p>

        </div>
        <div style={{ marginTop: "1.3rem" }} className="is-flex is-justify-content-center">
          <img src={pricingPhoto} alt="chart" />
        </div>
        <div className="is-flex is-justify-content-center">
            <button
              className="button is-block is-fullwidth is-primary is-medium is-rounded"
              type="submit"
              style={{
                backgroundColor: "rgb(56, 200, 56)",
                marginTop: "1.3rem",
                marginBottom: "1.3rem",
                marginRight: "2rem",
                width: "15rem"
              }}
            >View</button>
          </div>
      </div>

      <div className="columns is-pricing" style={{ marginRight: "2rem", marginLeft: "2rem", marginTop: "1.3rem" }}>
        <div className="column is-half is-flex-direction-column is-align-items-center">
          <h1 className="is-size-2 has-text-weight-medium">A Page Tailored Just For You</h1>
          <p style={{ marginTop: "1.3rem" }} className="is-size-5"> You tracking a particular coin or maybe even multiple? Favorite it so you can view all your favorite coins on the same page with chart, pricing, % change, and more.</p>
          <div className="is-flex is-justify-content-center">
            <button
              className="button is-block is-fullwidth is-primary is-medium is-rounded"
              type="submit"
              style={{
                backgroundColor: "rgb(56, 200, 56)",
                marginTop: "1.3rem",
                marginBottom: "1.3rem",
                marginRight: "2rem",
                width: "15rem"
              }}
            > Favorites</button>
          </div>
        </div>
        <div className="column is-half">
          <img src={favPhoto} alt="chart" />
        </div>
      </div>

    </div>
  );
};

export default Home;
