import React, { Component } from 'react';
import './App.css';

// Components
import ButtonBrand from './components/ButtonBrand';
import ButtonNegative from './components/ButtonNegative';
import ButtonPositive from './components/ButtonPositive';
import Switch from './components/Switch';
import Card from './components/Card';

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
              <ButtonBrand value="Vanilla 💥" />
              <ButtonPositive value="Success 😁" />
              <ButtonNegative value="Error 😬" />
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
        <div className="p-strip">
          <div className="row">
            <div className="col-6">
              <h2>Card</h2>
              <Card
                title="Card title"
                imgSrc="http://placehold.it/200x32"
                cardContent="Lorem ipsum dolor sit amet, consectetur adipisicing."
              />
              <h2>Highlighted Card</h2>
              <Card
                modifier="highlighted"
                title="Card title"
                imgSrc="http://placehold.it/200x32"
                cardContent="Lorem ipsum dolor sit amet, consectetur adipisicing."
              />
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default App;
