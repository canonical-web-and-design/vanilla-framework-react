import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import './App.css';

// Components
import Header from '../Header/Header';
import Intro from '../Intro/Intro';

import CardsExample from '../Card/CardsExample';
import ButtonsExample from '../Button/ButtonsExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact path="/" component={Intro} />
          <Route exact path="/cards" component={CardsExample} />
          <Route exact path="/buttons" component={ButtonsExample} />
        </main>
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object,
};

export default App;
