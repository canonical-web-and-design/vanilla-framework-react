import React from 'react';
import PropTypes from 'prop-types';

const TableCell = (props) => {
  const {
    align, ariaSort, children, columnHeader, onClick, role, rowHeader,
  } = props;
  const className = align ? `u-align--${align}` : null;

  if (columnHeader) {
    return (
      <th
        scope="col"
        role="columnheader"
        aria-sort={ariaSort}
        className={className}
        onClick={onClick}
      >
        {children}
      </th>);
  }

  if (rowHeader) {
    return (
      <th
        scope="row"
        role="rowheader"
        className={className}
      >
        {children}
      </th>);
  }

  return (
    <td
      role={role}
      className={className}
    >
      {children}
    </td>
  );
};

TableCell.defaultProps = {
  align: null,
  ariaSort: 'none',
  children: null,
  columnHeader: false,
  onClick: null,
  role: 'gridcell',
  rowHeader: false,
};

TableCell.propTypes = {
  align: PropTypes.string,
  ariaSort: PropTypes.string,
  children: PropTypes.node,
  columnHeader: PropTypes.bool,
  onClick: PropTypes.func,
  role: PropTypes.string,
  rowHeader: PropTypes.bool,
};

TableCell.displayName = 'TableCell';

export default TableCell;
