import React from 'react';
import PropTypes from 'prop-types';
import './DividerList.scss';

const DividerListItem = props => (
  <div className={`col-${12 / props.items} p-divider__block`}>
    {props.children}
  </div>
);

DividerListItem.defaultProps = {
  items: 3,
};

DividerListItem.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.oneOf([2, 3, 4, 6]),
};

DividerListItem.displayName = 'DividerListItem';

export default DividerListItem;
