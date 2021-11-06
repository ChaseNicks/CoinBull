import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles/nav.css";

const NavbarLogo = (props) => (
  <a
    className="navbar-item is-capitalized is-size-3"
    href={`#${props.page}`}
    style={{ color: "rgb(56,200,56)", textDecoration: "none" }}
  >
    {props.page}
  </a>
);

const SignIn = (props) => (
  <button className="navbar-item is-capitalized is-rounded is-size-5 signin">
    <a
      href={`#${props.page}`}
      style={{ textDecoration: "none", color: "white" }}
    >
      {props.page}
    </a>
  </button>
);

const SignUp = (props) => (
  <a
    className="navbar-item is-capitalized is-size-5 signup"
    href={`#${props.page}`}
    style={{ textDecoration: "none" }}
  >
    {props.page}
  </a>
);

const NavbarItem = (props) => (
  <a
    className="navbar-item is-capitalized is-size-5 nav-item-styles"
    href={`#${props.page}`}
    style={{ textDecoration: "none" }}
  >
    {props.page}
  </a>
);

const NavbarBurger = (props) => (
  <button
    onClick={props.toggleMenu}
    className={`button navbar-burger ${props.active ? "is-active" : ""}`}
  >
    <span />
    <span />
    <span />
  </button>
);

export default class Navbar extends React.Component {
  state = {
    activeMenu: false,
  };
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu,
    });
  };
  render() {
    let { pages = [], color } = this.props;
    let navbarItems = pages.map((page) => (
      <NavbarItem page={page} key={page} />
    ));
    const signout = (event) => {
      event.preventDefault();
      Auth.logout();
    };
    return (
      <nav
        className={`navbar is-${color}`}
        style={{ marginTop: ".2rem", marginBottom: ".2rem" }}
      >
        <div className="navbar-brand">
          <NavbarLogo page="CoinBull" />
          <NavbarItem />
          <NavbarBurger
            active={this.state.activeMenu}
            toggleMenu={this.toggleMenu}
          />
        </div>
        <div
          className={`navbar-menu ${this.state.activeMenu ? "is-active" : ""}`}
        >
          <div className="navbar-start">{navbarItems}</div>
          {Auth.loggedIn() ? (
            <>
              <button onClick={signout}>Signout</button>
            </>
          ) : (
            <>
              <Link to="/login">
                <SignIn page="Sign In" />
              </Link>
              <Link to="/signup">
                <SignUp page="Sign Up" />
              </Link>
            </>
          )}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  pages: PropTypes.array.isRequired,
  color: PropTypes.string,
};
