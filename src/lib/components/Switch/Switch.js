import React from 'react';
import PropTypes from 'prop-types';

const Switch = (props) => {
  const { checked, id, label } = props;

  return (
    <label htmlFor={id}>
      {label}
      <input
        id={id}
        type="checkbox"
        className="p-switch"
        value={checked ? 'on' : 'off'}
        checked={checked}
      />
      <div className="p-switch__slider" />
    </label>
  );
};

Switch.defaultProps = {
  checked: false,
  label: undefined,
};

Switch.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Switch.displayName = 'Switch';

export default Switch;
