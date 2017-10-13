import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <header id="navigation" className="p-navigation--light">
          <div className="row">
            <div className="p-navigation__banner">
              <div className="p-navigation__logo">
                <Link className="p-navigation__link" to="/" href="/">
                  <img src="https://assets.ubuntu.com/v1/d96d86b5-vanilla_black-orange_hex.svg" className="App-logo" alt="logo" />
                </Link>
              </div>
            </div>
          </div>
        </header>
        <hr />
        <NavLink exact to="/buttons" activeClassName="active">Buttons</NavLink>
        <NavLink exact to="/cards" activeClassName="active">Cards</NavLink>
        <hr />
      </div>
    );
  }
}

export default Header;
