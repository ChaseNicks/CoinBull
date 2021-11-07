import React from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footerr
    ">
      <Link
        className="is-capitalized is-size-2"
        to="/"
        style={{ color: "white", textDecoration: "none" }}
      >
        CoinBull
      </Link>
      <div class="has-text-centered footer-cont">
      © 2021 | Designed & Created by Chase Nicks, Muiasar Alani, Leland Hayes, and Tucker Barrett
    </div>
    </footer>
  );
};

export default Footer;