import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <p><button className={"p-button--" + this.props.type}>{this.props.value}</button></p>
    )
  }
}

export default Button;
