import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <header id="navigation" className="p-navigation--light">
          <div className="row">
            <div className="p-navigation__banner">
              <div className="p-navigation__logo">
                <Router>
                  <Link className="p-navigation__link" to="/" href="/">
                    <img src="https://assets.ubuntu.com/v1/d96d86b5-vanilla_black-orange_hex.svg" className="App-logo" alt="logo" />
                  </Link>
                </Router>
              </div>
            </div>
          </div>
        </header>
        <hr />
      </div>
    );
  }
}

export default Header;
