import React from 'react';
import PropTypes from 'prop-types';
import './Switch.css';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.switchToggle = this.switchToggle.bind(this);
    this.state = {
      checked: false,
    };
  }

  switchToggle() {
    const currentState = this.state.checked;
    this.setState({ checked: !currentState });
  }

  render() {
    return (
      <span>
        <label id="switch-on-label" htmlFor="switch-on">{ this.props.label }</label>
        <button
          id="switch-on"
          className="p-switch"
          type="button"
          role="switch"
          aria-checked={this.state.checked}
          aria-labelledby="switch-on-label"
          onClick={() => this.switchToggle(this)}
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
