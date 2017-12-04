import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends React.Component {
  render() {
    return (
      <button className={`p-button--${this.props.modifier}`}>{this.props.value}</button>
    );
  }
}

Button.defaultProps = { modifier: 'base' };

Button.propTypes = {
  modifier: PropTypes.string,
  value: PropTypes.string.isRequired,
};

Button.displayName = 'Button';

export default Button;
