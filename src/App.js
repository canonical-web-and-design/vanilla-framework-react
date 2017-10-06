import React, { Component } from 'react';
import './App.css';

// Components
import Button from './components/Button';
import Switch from './components/Switch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="navigation" className="p-navigation--light">
          <div className="row">
            <div className="p-navigation__banner">
              <div className="p-navigation__logo">
                <a className="p-navigation__link" href="/">
                  <img src="https://assets.ubuntu.com/v1/d96d86b5-vanilla_black-orange_hex.svg" className="App-logo" alt="logo" />
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="p-strip u-no-padding--bottom">
          <div className="row">
          <div className="col-12">
            <p>
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
              <Button value="Neutral button 😶" type="neutral" />
              <Button value="Brand button 💥" type="brand" />
              <Button value="Negative button 😡" type="negative" />
              <Button value="Positive button 😁" type="positive" />
            </div>
          </div>
        </div>
        <hr/>
        <div className="p-strip">
          <div className="row">
            <div className="col-6">
              <h2>Switch</h2>
              <Switch />
            </div>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

export default App;
