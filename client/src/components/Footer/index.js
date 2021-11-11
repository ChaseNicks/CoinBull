import React from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer
      className="footerr
    "
    >
      <Link
        className="is-capitalized is-size-2"
        to="/"
        style={{ color: "white", textDecoration: "none" }}
      >
        CoinBull
      </Link>
      <div className="has-text-centered footer-cont">
        © 2021 | Designed & Created by Chase Nicks, Muiasar Alani, Leland Hayes, Tucker Barrett, and Will Berner
      </div>
    </footer>
  );
};

export default Footer;
