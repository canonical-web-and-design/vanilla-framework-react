import React from 'react';
import PropTypes from 'prop-types';
import './Strip.css';

const Row = props => (
  <div className="row" style={props.style}>
    {props.children}
  </div>
);

Row.defaultProps = {
  style: {},
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

Row.displayName = 'Row';

export default Row;
