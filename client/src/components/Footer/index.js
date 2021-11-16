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
        style={{
          color: "white",
          textDecoration: "none",
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        CoinBull
      </Link>
      <div
        className="has-text-centered footer-cont"
        style={{ marginBottom: "1rem" }}
      >
        © 2021 | Designed & Created by
        <a
          href="https://chasenicks.github.io/Portfolio_Page/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          Chase Nicks,{" "}
        </a>
        <a
          href="https://muiasar-al-ani.github.io/my_personal_portfolio/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          Muiasar Alani,{" "}
        </a>
        <a
          href="https://ilelandhayes.github.io/Portfolio/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          Leland Hayes,{" "}
        </a>
        <a
          href="https://willberner.github.io/Portfolio/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          Will Berner,{" "}
        </a>
        <a
          href="https://tucker.tech"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          and Tucker Barrett{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
