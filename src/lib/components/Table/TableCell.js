import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

const TableCell = (props) => {
  const {
    align, ariaSort, children, className, columnHeader, role, rowHeader, ...otherProps
  } = props;

  const classNames = getClassName({
    [className]: className,
    [`u-align--${align}`]: align,
  }) || undefined;

  if (columnHeader) {
    return (
      <th
        scope="col"
        role="columnheader"
        aria-sort={ariaSort}
        className={classNames}
        {...otherProps}
      >
        {children}
      </th>);
  }

  if (rowHeader) {
    return (
      <th
        scope="row"
        role="rowheader"
        className={classNames}
        {...otherProps}
      >
        {children}
      </th>);
  }

  return (
    <td
      role={role}
      className={classNames}
      {...otherProps}
    >
      {children}
    </td>
  );
};

TableCell.defaultProps = {
  align: null,
  ariaSort: 'none',
  children: null,
  className: undefined,
  columnHeader: false,
  role: 'gridcell',
  rowHeader: false,
};

TableCell.propTypes = {
  align: PropTypes.string,
  ariaSort: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  columnHeader: PropTypes.bool,
  role: PropTypes.string,
  rowHeader: PropTypes.bool,
};

TableCell.displayName = 'TableCell';

export default TableCell;
