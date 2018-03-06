import React from 'react';
import PropTypes from 'prop-types';

const ToolTip = ({
  id, message, position, children,
}) => {
  const modifierClassPrefix = 'p-tooltip--';

  let className = 'p-tooltip';

  if (position) {
    className += ` ${modifierClassPrefix}${position}`;
  }

  return (
    <button className={className} aria-describedby={id}>
      {children}
      <span className="p-tooltip__message" role="tooltip" id={id}>
        {message}
      </span>
    </button>
  );
};

ToolTip.defaultProps = {
  position: '',
};

ToolTip.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.string,
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

ToolTip.displayName = 'ToolTip';

export default ToolTip;
