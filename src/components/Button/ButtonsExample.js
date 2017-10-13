import React from 'react';
import Button from './Button';
import './Button.css';

class ButtonsExample extends React.Component {
  render() {
    return (
      <div>
        <h2>Buttons</h2>
        <p><Button value="Base button 😶" /></p>
        <p><Button value="Neutral button 😐" modifier="neutral" /></p>
        <p><Button value="Brand button 💥" modifier="brand" /></p>
        <p><Button value="Negative button 😡" modifier="negative" /></p>
        <p><Button value="Positive button 😁" modifier="positive" /></p>
      </div>
    );
  }
}

Button.defaultProps = { modifier: 'base' };

export default ButtonsExample;
