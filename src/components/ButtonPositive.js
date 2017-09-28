import React from 'react';

class ButtonPositive extends React.Component {
  render() {
    return (
      <p><button className="p-button--positive">{this.props.value}</button></p>
    )
  }
}

export default ButtonPositive;
