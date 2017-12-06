import React from 'react';
import PropTypes from 'prop-types';
import './MutedHeading.scss';

const MutedHeading = props => (
  <h4 className="p-muted-heading">
    {props.children}
  </h4>
);

MutedHeading.defaultProps = {
  children: '',
};

MutedHeading.propTypes = {
  children: PropTypes.node,
};

MutedHeading.displayName = 'MutedHeading';

export default MutedHeading;
