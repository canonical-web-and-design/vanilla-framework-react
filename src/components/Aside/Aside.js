import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

class Aside extends React.Component {
  render() {
    return (
      <Router>
        <aside>
          <ul className="p-list">
            <li><NavLink exact to="/buttons" activeClassName="active">Buttons</NavLink></li>
            <li><NavLink exact to="/cards" activeClassName="active">Cards</NavLink></li>
            <li><NavLink exact to="/switches" activeClassName="active">Switches</NavLink></li>
          </ul>
        </aside>
      </Router>
    );
  }
}

export default Aside;
