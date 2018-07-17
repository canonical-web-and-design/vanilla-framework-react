import React from 'react';
import PropTypes from 'prop-types';
import naturalCompare from 'natural-compare-lite';
import getClassName from '../../utils/getClassName';

import TableCell from './TableCell';
import TableRow from './TableRow';
import Button from '../Button/Button';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.generateData = this.generateData.bind(this);
    this.generateHeader = this.generateHeader.bind(this);
    this.generateRows = this.generateRows.bind(this);
    this.generateCells = this.generateCells.bind(this);
    this.generateExpandedCell = this.generateExpandedCell.bind(this);
    this.getNewSortCondition = this.getNewSortCondition.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.sortData = this.sortData.bind(this);

    this.state = {
      columns: props.columns ? [...props.columns] : null,
      data: props.data ? [...props.data] : null,
      expandedRows: [],
      originalData: props.data ? [...props.data] : null,
      sortCondition: props.sortCondition,
    };
  }

  componentWillMount() {
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({ data: [...nextProps.data], columns: [...nextProps.columns] });
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

  handleExpand(rowId) {
    const { accordion, expandable } = this.props;

    if (expandable) {
      const { expandedRows } = this.state;
      const isExpanded = expandedRows.includes(rowId);
      let newExpandedRows;

      if (isExpanded) {
        newExpandedRows = expandedRows.filter(id => id !== rowId);
      } else if (accordion) {
        newExpandedRows = [rowId];
      } else {
        newExpandedRows = expandedRows.concat(rowId);
      }

      this.setState({ expandedRows: newExpandedRows });
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
          if (typeof cell.props.children === 'string') {
            value = cell.props.children;
          }
          if (cell.props.expandedCell) {
            data[index].expandedCell = cell.props.children;
          } else {
            data[index][`column${cellIndex}`] = value;
          }
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
    const { expandable, sortable } = this.props;

    let columnHeaders = columns.map(column => (
      <TableCell
        columnHeader
        key={column.key}
        ariaSort={sortCondition[column.key]}
        align={column.align}
        onClick={sortable ? () => this.getNewSortCondition(column.key) : null}
      >
        {column.label}
      </TableCell>),
    );

    if (expandable) {
      columnHeaders = columnHeaders.concat([
        <TableCell
          columnHeader
          key="expandCol"
          align="right"
          style={{ flexBasis: '4rem', flexGrow: '0' }}
          ariaSort={null}
        />,
        <TableCell className="u-hide" key="nullHeader" />,
      ]);
    }

    const header = (
      <thead>
        <TableRow key="header-row">
          {columnHeaders}
        </TableRow>
      </thead>
    );

    return header;
  }

  generateRows() {
    const { data } = this.state;
    const { expandable } = this.props;
    const rows = data.map((row) => {
      const cells = this.generateCells(row);

      return (
        <TableRow key={`row-${row.id}`}>
          {cells}
          {expandable && this.generateExpandedCell(row.id)}
        </TableRow>
      );
    });

    return rows;
  }

  generateCells(row) {
    const { columns, expandedRows } = this.state;
    const { expandable } = this.props;
    const isExpandable = 'expandedCell' in row;
    const isExpanded = expandedRows.includes(row.id);

    let cells = columns.map(column => (
      <TableCell
        rowHeader={column.header}
        key={`${column.key}-row-${row.id}`}
        align={column.align}
      >
        {row[column.key]}
      </TableCell>),
    );

    if (expandable) {
      cells = cells.concat(
        <TableCell
          key={`expandable-cell-${row.id}`}
          align="right"
          style={{ flexBasis: '4rem', flexGrow: '0' }}
        >
          {isExpandable ?
            <Button style={{ padding: '0' }} onClick={() => this.handleExpand(row.id)}>
              <i className={isExpanded ? 'p-icon--minus' : 'p-icon--plus'} />
            </Button> :
            ''
          }
        </TableCell>,
      );
    }

    return cells;
  }

  generateExpandedCell(rowId) {
    const { data, expandedRows } = this.state;
    const { expandedCell } = data.find(obj => obj.id === rowId);
    const isExpanded = expandedRows.includes(rowId);

    const classNames = getClassName({
      'p-table-expanding__panel': true,
      'u-hide': !expandedCell || !isExpanded,
    }) || undefined;

    return (
      <TableCell
        expandedCell
        style={{ borderTop: '0' }}
        className={classNames}
        aria-hidden={!expandedCell || !isExpanded}
      >
        {expandedCell}
      </TableCell>
    );
  }

  render() {
    const {
      className, expandable, hasHeader, sortable,
    } = this.props;

    const classNames = getClassName({
      [className]: className,
      'p-table-expanding': expandable,
      'p-table--sortable': sortable,
    }) || undefined;

    return (
      <table role="grid" className={classNames}>
        {hasHeader && this.generateHeader()}
        <tbody>
          {this.generateRows()}
        </tbody>
      </table>
    );
  }
}

Table.defaultProps = {
  accordion: false,
  children: null,
  className: undefined,
  columns: null,
  data: null,
  expandable: false,
  hasHeader: true,
  sortable: false,
  sortCondition: {},
};

Table.propTypes = {
  accordion: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object),
  expandable: PropTypes.bool,
  hasHeader: PropTypes.bool,
  sortable: PropTypes.bool,
  sortCondition: PropTypes.object,
};

Table.displayName = 'Table';

export default Table;
