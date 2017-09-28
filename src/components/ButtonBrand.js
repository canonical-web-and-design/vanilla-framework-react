import React from 'react';

class ButtonBrand extends React.Component {
  render() {
    return (
      <p><button className="p-button--brand">{this.props.value}</button></p>
    )
  }
}

export default ButtonBrand;
