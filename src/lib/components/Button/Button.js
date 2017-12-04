import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.getClassString = this.getClassString.bind(this);
  }

  onClick(event) {
    if (!this.props.disabled) {
      this.props.onClick(event);
    }
  }

  getClassString() {
    let classString = 'p-button--base';

    if (this.props.positive) classString = 'p-button--positive';
    else if (this.props.negative) classString = 'p-button--negative';
    else if (this.props.brand) classString = 'p-button--brand';
    else if (this.props.neutral) classString = 'p-button--neutral';
    if (this.props.inline) classString = `${classString} is-inline`;

    return classString;
  }

  render() {
    return (
      <button
        className={this.getClassString()}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >
        {this.props.value}
      </button>
    );
  }
}

Button.defaultProps = {
  neutral: false,
  brand: false,
  negative: false,
  positive: false,
  disabled: false,
  inline: false,
  onClick: () => null,
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  neutral: PropTypes.bool,
  brand: PropTypes.bool,
  negative: PropTypes.bool,
  positive: PropTypes.bool,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.displayName = 'Button';

export default Button;
