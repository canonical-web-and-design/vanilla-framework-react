import React from 'react';

class Switch extends React.Component {
  render() {
    return (
      <button className="p-switch" id="switch-on" type="button" role="switch" aria-checked="true" aria-labelledby="switch-on-label">
        <span>On</span>
        <span>Off</span>
      </button>
    )
  }
}

export default Switch;
