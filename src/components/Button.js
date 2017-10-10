import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button className={"p-button--" + this.props.type}>{this.props.value}</button>
    )
  }
}

Button.defaultProps = {type: 'base'};

export default Button;
