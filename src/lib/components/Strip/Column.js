import React from 'react';
import PropTypes from 'prop-types';
import './Strip.css';

const Column = (props) => {
  if (props.size < 1 || props.size > 12) {
    return new Error('Column component must have size between 1 and 12');
  }
  return (
    <div className={`col-${props.size}`} style={props.style}>
      {props.children}
    </div>
  );
};

Column.defaultProps = {
  style: {},
  size: 12,
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  style: PropTypes.object,
};

Column.displayName = 'Column';

export default Column;
