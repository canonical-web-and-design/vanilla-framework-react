import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => {
  const tableRow = (
    <tr role="row">
      {props.children}
    </tr>
  );

  return tableRow;
};

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

TableRow.displayName = 'TableRow';

export default TableRow;
