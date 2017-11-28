import React from 'react';
import PropTypes from 'prop-types';
import './Breadcrumb.css';

const Breadcrumb = props => (
  <ul className="p-breadcrumbs">
    { props.children }
  </ul>
);

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired,
};

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
