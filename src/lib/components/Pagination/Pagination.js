import React from 'react';

import PaginationItem from './PaginationItem';

const Pagination = props => (
  <div className="p-pagination">
    { props.children }
  </div>
);

Pagination.defaultProps = {
  children: null,
};

Pagination.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;

    React.Children.forEach(prop, (child) => {
      if (child.type !== PaginationItem) {
        error = new Error(`${componentName} children should be of type "PaginationItem".`);
      }
    });

    return error;
  },
};

Pagination.displayName = 'Pagination';

export default Pagination;
