import React from 'react';
import PropTypes from 'prop-types';
import naturalCompare from 'natural-compare-lite';

import TableCell from './TableCell';
import TableRow from './TableRow';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.generateData = this.generateData.bind(this);
    this.generateHeader = this.generateHeader.bind(this);
    this.generateRows = this.generateRows.bind(this);
    this.getNewSortCondition = this.getNewSortCondition.bind(this);
    this.sortData = this.sortData.bind(this);

    this.state = {
      columns: props.columns ? [...props.columns] : null,
      data: props.data ? [...props.data] : null,
      originalData: props.data ? [...props.data] : null,
      sortCondition: props.sortCondition,
    };
  }

  componentWillMount() {
    const { expanding } = this.props;

    if (!expanding) {
      const { columns, data, sortCondition } = this.state;

      // If Table is static, convert data to object
      if (!data || !columns) {
        this.generateData();
      }

      // Pre-sort Table if sortCondition prop is non-zero
      if (Object.keys(sortCondition).length === 1) {
        const columnKey = Object.keys(sortCondition)[0];
        this.sortData(columnKey);
      }
    }
  }

  getNewSortCondition(columnKey) {
    const { sortCondition } = this.state;
    const newSortCondition = {};
    const options = ['ascending', 'descending', 'none'];

    // Move to next option in options array
    newSortCondition[columnKey] = (
      options[(options.indexOf(sortCondition[columnKey]) + 1) % options.length]
    );

    this.setState({ sortCondition: newSortCondition }, () => {
      this.sortData(columnKey);
    });
  }

  sortData(columnKey) {
    const { data, sortCondition } = this.state;

    if (sortCondition[columnKey] === 'none') {
      const unsortedData = this.state.originalData;
      this.setState({ data: [...unsortedData] });
    } else {
      const sortedData = data.sort((a, b) => {
        const x = a[columnKey];
        const y = b[columnKey];
        return (
          sortCondition[columnKey] === 'ascending' ? naturalCompare(x, y) : naturalCompare(y, x)
        );
      });

      this.setState({ data: sortedData });
    }
  }

  generateData() {
    const { children } = this.props;
    const columns = [];
    const data = [];

    children.forEach((row, rowIndex) => {
      if (row.props.tableHeader) {
        row.props.children.forEach((cell, cellIndex) => {
          let value = '';
          if (typeof cell.props.children === 'string') value = cell.props.children;
          columns.push({
            key: `column${cellIndex}`,
            label: value,
            align: cell.props.align,
            header: cell.props.columnHeader,
          });
        });
      } else {
        const index = rowIndex - 1;
        data[index] = {};
        data[index].id = rowIndex;
        row.props.children.forEach((cell, cellIndex) => {
          let value = '';
          if (typeof cell.props.children === 'string') value = cell.props.children;
          data[index][`column${cellIndex}`] = value;
        });
      }
    });

    this.setState({
      columns,
      data: [...data],
      originalData: data,
    });
  }

  generateHeader() {
    const { columns, sortCondition } = this.state;
    const { sortable } = this.props;

    const columnHeaders = columns.map((headerData) => {
      const ariaSort = sortCondition[headerData.key];
      const onClick = sortable ? () => this.getNewSortCondition(headerData.key) : null;
      return (
        <TableCell
          columnHeader
          key={headerData.key}
          ariaSort={ariaSort}
          align={headerData.align}
          onClick={onClick}
        >
          {headerData.label}
        </TableCell>);
    });

    const header = (
      <thead>
        <TableRow key="header-row">
          {columnHeaders}
          {this.props.expanding && (
            <TableCell className="u-hide" />
          )}
        </TableRow>
      </thead>
    );

    return header;
  }

  generateRows() {
    const { data } = this.state;
    const rows = data.map((row) => {
      const cells = this.generateCells(row);
      return (
        <TableRow key={`row-${row.id}`}>
          {cells}
        </TableRow>
      );
    });

    return rows;
  }

  generateCells(row) {
    const { columns } = this.state;
    const cells = columns.map(headerData => (
      <TableCell
        rowHeader={headerData.header}
        key={`${headerData.key}-row-${row.id}`}
        align={headerData.align}
      >
        {row[headerData.key]}
      </TableCell>),
    );

    return cells;
  }

  render() {
    const {
      hasHeader,
      sortable,
      expanding,
      children,
    } = this.props;

    let className = null;

    if (sortable) {
      className = 'p-table--sortable';
    }

    if (expanding) {
      className = 'p-table-expanding';
    }

    return (
      <table role="grid" className={className}>
        {hasHeader && this.generateHeader()}
        <tbody>
          {expanding ? children : this.generateRows()}
        </tbody>
      </table>
    );
  }
}

Table.defaultProps = {
  children: null,
  columns: null,
  data: null,
  expanding: false,
  hasHeader: true,
  sortable: false,
  sortCondition: {},
};

Table.propTypes = {
  children: PropTypes.node,
  columns: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  expanding: PropTypes.bool,
  hasHeader: PropTypes.bool,
  sortable: PropTypes.bool,
  sortCondition: PropTypes.object,
};

Table.displayName = 'Table';

export default Table;
