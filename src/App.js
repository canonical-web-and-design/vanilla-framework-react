import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import ButtonBrand from './components/ButtonBrand';
import ButtonNegative from './components/ButtonNegative';
import ButtonPositive from './components/ButtonPositive';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="navigation" className="p-navigation--light">
          <div className="row">
            <div className="p-navigation__banner">
              <div className="p-navigation__logo">
                <a className="p-navigation__link" href="/">
                  <img src={logo} className="App-logo" alt="logo" />Vanilla
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="p-strip">
          <div className="row">
          <div className="col-12">
            <h1 className="App-title">Vanilla Framework (in React)</h1>
            <p className="App-intro">
              This is a simple implementation of Vanilla Framework using React.
            </p>
          </div>
          </div>
        </div>
        <hr/>
        <div className="p-strip">
          <div className="row">
            <div className="col-6">
              <h2>Buttons</h2>
              <ButtonBrand value="Vanilla 💥" />
              <ButtonPositive value="Success 😁" />
              <ButtonNegative value="Error 😬" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
