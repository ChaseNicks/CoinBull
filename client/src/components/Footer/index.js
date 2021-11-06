import React from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <Link
        className="is-capitalized is-size-3"
        to="/"
        style={{ color: "white", textDecoration: "none" }}
      >
        CoinBull
      </Link>
    </footer>
  );
};

export default Footer;
