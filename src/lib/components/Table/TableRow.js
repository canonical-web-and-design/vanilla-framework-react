import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => {
  const { children, ...otherProps } = props;

  return (
    <tr role="row" {...otherProps}>
      {children}
    </tr>
  );
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

TableRow.displayName = 'TableRow';

export default TableRow;
