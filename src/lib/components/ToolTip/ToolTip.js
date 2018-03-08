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
    <span className={className} aria-describedby={id}>
      {children}
      <span className="p-tooltip__message" role="tooltip" id={id}>
        {message}
      </span>
    </span>
  );
};

ToolTip.defaultProps = {
  position: 'btm-right',
};

ToolTip.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf([
    'left',
    'right',
    'top-left',
    'btm-left',
    'top-right',
    'btm-right',
    'top-center',
    'btm-center',
  ]),
  id: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

ToolTip.displayName = 'ToolTip';

export default ToolTip;
