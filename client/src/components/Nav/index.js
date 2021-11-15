import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles/nav.css";

// Render clickable Logo
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

// Render Signin page
const SignIn = (props) => (
  <div
    className="navbar-item is-capitalized  signin"
    style={{ marginTop: ".3rem" }}
  >
    <div
      className="is-size-5"
      style={{ textDecoration: "none", color: "white" }}
      onClick={props.toggleMenu}
    >
      {props.page}
    </div>
  </div>
);

// Render Signout page
const SignUp = (props) => (
  <div
    className="navbar-item is-capitalized  signup"
    style={{ marginTop: ".3rem" }}
    onClick={props.toggleMenu}
  >
    <div
      className="is-size-5"
      style={{ textDecoration: "none" }}
      onClick={props.toggleMenu}
    >
      {props.page}
    </div>
  </div>
);

const NavbarItem = (props) => (
  <Link
    className="navbar-item is-capitalized is-size-5 nav-item-styles"
    to={`${props.page === "home" ? "/" : "/" + props.page}`}
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

    // Determine whether to show user the favorites page
    pages = Auth.loggedIn()
      ? pages
      : pages.filter((page) => page !== "favorites");

    // Create navbar links for each page
    let navbarItems = pages.map((page) => (
      <NavbarItem page={page} key={page} toggleMenu={this.toggleMenu} />
    ));

    // Sign a user out
    const signout = (event) => {
      event.preventDefault();
      Auth.logout();
    };

    return (
      <nav className={`navbar is-${color}`}>
        {/* Render clickable Logo */}
        <div className="navbar-brand">
          <NavbarLogo
            page="CoinBull"
            toggleMenu={this.toggleMenu}
            isOpen={this.state.activeMenu}
          />

          {/* Render collapsable burger menu for smaller screens*/}
          <NavbarBurger
            active={this.state.activeMenu}
            toggleMenu={this.toggleMenu}
          />
        </div>
        <div
          className={`navbar-menu ${this.state.activeMenu ? "is-active" : ""}`}
        >
          {/* Populate navbar with page items */}
          <div className="navbar-start">{navbarItems}</div>

          {/* Display signout button if user is logged in */}
          {Auth.loggedIn() ? (
            <>
              <div
                onClick={signout}
                className="navbar-item is-capitalized nav-item-styles"
              >
                <a
                  style={{ textDecoration: "none", color: "#363636" }}
                  href="/"
                  className="is-size-5"
                >
                  Sign Out
                </a>
              </div>
            </>
          ) : (
            // Render login and signup pages if user is not logged in
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
