import React from 'react';
import PropTypes from 'prop-types';
import './Breadcrumb.css';

const BreadcrumbItem = props => (
  <li className="p-breadcrumbs__item">
    { props.children }
  </li>
);

BreadcrumbItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BreadcrumbItem;
