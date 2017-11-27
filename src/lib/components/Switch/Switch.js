import React from 'react';
import PropTypes from 'prop-types';
import './Switch.css';

class Switch extends React.Component {
  constructor() {
    super();
    this.switchToggle = this.switchToggle.bind(this);
    this.state = {
      checked: false,
    };
  }

  switchToggle() {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  }

  render() {
    const { checked } = this.state;
    return (
      <span>
        <label id="switch-on-label" htmlFor="switch-on">{ this.props.label }
          <button
            id="switch-on"
            className="p-switch"
            type="button"
            role="switch"
            aria-checked={checked}
            aria-labelledby="switch-on-label"
            onClick={() => this.switchToggle(this)}
          >
            <span>On</span>
            <span>Off</span>
          </button>
        </label>
      </span>
    );
  }
}

Switch.propTypes = {
  label: PropTypes.string.isRequired,
};

Switch.displayName = 'Switch';

export default Switch;
