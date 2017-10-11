import React, { Component } from 'react';
import './App.css';

// Components
import Button from './components/Button/Button';
import Card from './components/Card/Card';

class App extends Component {

  cardImg = {
    url : "http://placehold.it/200x32",
    alt : "Placeholder"
  }

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
        <hr />
        <div className="p-strip">
          <div className="row">
            <div className="col-6">
              <h2>Buttons</h2>
              <p><Button value="Base button 😶" /></p>
              <p><Button value="Neutral button 😐" modifier="neutral" /></p>
              <p><Button value="Brand button 💥" modifier="brand" /></p>
              <p><Button value="Negative button 😡" modifier="negative" /></p>
              <p><Button value="Positive button 😁" modifier="positive" /></p>
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
                imgSrc={ this.cardImg.url }
                imgAlt={ this.cardImg.alt }
                cardContent="Lorem ipsum dolor sit amet, consectetur adipisicing."
              />
              <h2>Highlighted Card</h2>
              <Card
                modifier="highlighted"
                title="Card title"
                imgSrc={ this.cardImg.url }
                imgAlt={ this.cardImg.alt }
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
