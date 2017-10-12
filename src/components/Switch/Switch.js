import React from 'react';
import PropTypes from 'prop-types';
import './Switch.css';

class Switch extends React.Component {
  render() {
    return (
      <span>
        <label id="switch-on-label" htmlFor="switch-on">{ this.props.label }</label>
        <button
          id="switch-on"
          className="p-switch"
          type="button"
          role="switch"
          aria-checked="true"
          aria-labelledby="switch-on-label"
        >
          <span>On</span>
          <span>Off</span>
        </button>
      </span>
    );
  }
}

Switch.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Switch;
