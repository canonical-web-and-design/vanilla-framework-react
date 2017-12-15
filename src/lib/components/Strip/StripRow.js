import React from 'react';
import PropTypes from 'prop-types';
import './Strip.scss';

const StripRow = props => (
  <div className="row" style={props.style}>
    {props.children}
  </div>
);

StripRow.defaultProps = {
  style: {},
};

StripRow.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

StripRow.displayName = 'StripRow';

export default StripRow;
