import React from 'react';

class ButtonNegative extends React.Component {
  render() {
    return (
      <p><button className="p-button--negative">{this.props.value}</button></p>
    );
  }
}

export default ButtonNegative;
