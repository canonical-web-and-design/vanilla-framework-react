import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import './App.css';

// Components
import Header from '../Header/Header';
import Aside from '../Aside/Aside';
import Intro from '../Intro/Intro';

import CardsExample from '../Card/CardsExample';
import ButtonsExample from '../Button/ButtonsExample';
import SwitchesExample from '../Switch/SwitchesExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-12">
            <Header />
            <Aside />
            <main>
              <Route exact path="/" component={Intro} />
              <Route exact path="/cards" component={CardsExample} />
              <Route exact path="/buttons" component={ButtonsExample} />
              <Route exact path="/switches" component={SwitchesExample} />
            </main>
          </div>
        </div>
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object,
};

export default App;
