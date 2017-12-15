import React from 'react';
import PropTypes from 'prop-types';
import './Strip.scss';

const StripColumn = (props) => {
  if (props.size < 1 || props.size > 12) {
    return new Error('StripColumn component must have size between 1 and 12');
  }
  return (
    <div className={`col-${props.size}`} style={props.style}>
      {props.children}
    </div>
  );
};

StripColumn.defaultProps = {
  style: {},
  size: 12,
};

StripColumn.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  style: PropTypes.object,
};

StripColumn.displayName = 'StripColumn';

export default StripColumn;
