import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles/nav.css";

const NavbarLogo = (props) => (
  <Link
    className="navbar-item is-capitalized is-size-3"
    to="/"
    style={{ color: "rgb(56,200,56)", textDecoration: "none" }}
    onClick={props.isOpen ? props.toggleMenu : null}
  >
    CoinBull
  </Link>
);

const SignIn = (props) => (
  <div
    className="navbar-item is-capitalized  signin"
    style={{ marginTop: ".2rem" }}
  >
    <div
      className="is-size-5"
      // href={`#${props.page}`}
      style={{ textDecoration: "none", color: "white" }}
      onClick={props.toggleMenu}
    >
      {props.page}
    </div>
  </div>
);

const SignUp = (props) => (
  <div
    className="navbar-item is-capitalized is-size-5 signup"
    // href={`#${props.page}`}
    style={{ textDecoration: "none", marginTop: ".2rem" }}
    onClick={props.toggleMenu}
  >
    {props.page}
  </div>
);

const NavbarItem = (props) => (
  <Link
    className="navbar-item is-capitalized is-size-5 nav-item-styles"
    to={`${props.page === "home" ? "/" : props.page}`}
    style={{ textDecoration: "none" }}
    onClick={props.toggleMenu}
  >
    {props.page}
  </Link>
);

const NavbarBurger = (props) => (
  <button
    onClick={props.toggleMenu}
    className={`button navbar-burger ${props.active ? "is-active" : ""}`}
    aria-label={"menu"}
    aria-expanded={props.active ? true : false}
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
      <NavbarItem page={page} key={page} toggleMenu={this.toggleMenu} />
    ));
    const signout = (event) => {
      event.preventDefault();
      Auth.logout();
    };
    return (
      <nav
        className={`navbar is-${color}`}
        // style={{ position: "fixed", top: "0", width: "100%" }}
      >
        <div className="navbar-brand">
          <NavbarLogo
            page="CoinBull"
            toggleMenu={this.toggleMenu}
            isOpen={this.state.activeMenu}
          />
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
              <div
                onClick={signout}
                className="navbar-item is-capitalized nav-item-styles"
              >
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="/"
                  className="is-size-5"
                >
                  Sign Out
                </a>
              </div>
            </>
          ) : (
            <>
              <Link to="/login">
                <SignIn page="Sign In" toggleMenu={this.toggleMenu} />
              </Link>
              <Link to="/signup">
                <SignUp page="Sign Up" toggleMenu={this.toggleMenu} />
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
