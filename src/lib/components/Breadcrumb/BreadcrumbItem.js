import React from 'react';
import PropTypes from 'prop-types';

const BreadcrumbItem = props => (
  <li className="p-breadcrumbs__item">
    { props.children }
  </li>
);

BreadcrumbItem.propTypes = {
  children: PropTypes.node.isRequired,
};

BreadcrumbItem.displayName = 'BreadcrumbItem';

export default BreadcrumbItem;
