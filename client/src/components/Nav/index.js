import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

// import NavbarItem from "./NavbarItem";
// import NavbarBurger from "./NavbarBurger";

const NavbarItem = props => (
  <a className="navbar-item is-capitalized" href={`#${props.page}`}>
    {props.page}
  </a>
);
const NavbarBurger = props => (
  <button
    onClick={props.toggleMenu}
    className={`button navbar-burger ${props.active ? 'is-active' : ''}`}
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
    let navbarItems = pages.map(page => <NavbarItem page={page} key={page} />);
    return (
      <nav className={`navbar is-fixed-top is-${color}`}>
        <div className="navbar-brand">
          <NavbarItem page="logo" />
          <NavbarBurger
            active={this.state.activeMenu}
            toggleMenu={this.toggleMenu}
          />
        </div>
        <div
          className={`navbar-menu ${this.state.activeMenu ? 'is-active' : ''}`}
        >
          <div className="navbar-start">{navbarItems}</div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  pages: PropTypes.array.isRequired,
  color: PropTypes.string,
};

