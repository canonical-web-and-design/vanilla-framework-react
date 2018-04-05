import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Table from './Table';
import TableCell from './TableCell';
import TableRow from './TableRow';

const columns = [
  [
    { key: 'header', label: '', header: true },
    { key: 'column1', label: 'Header' },
    { key: 'column2', label: 'Header' },
    { key: 'column3', label: 'Header', align: 'right' },
  ],
  [
    { key: 'name', label: 'Name' },
    { key: 'users', label: 'Users', align: 'right' },
    { key: 'units', label: 'Units', align: 'right' },
    { key: 'revenue', label: 'Revenue', align: 'right' },
  ],
  [
    { key: 'username', label: 'Username' },
    { key: 'email', label: 'Email' },
    { key: 'height', label: 'Height (cm)', align: 'right' },
  ],
];

const data = [
  [{
    id: 0, header: 'Header row', column1: 'Table cell', column2: 'Table cell', column3: 111,
  }, {
    id: 1, header: 'Header row', column1: 'Table cell', column2: 'Table cell', column3: 222,
  }, {
    id: 2, header: 'Header row', column1: 'Table cell', column2: 'Table cell', column3: 333,
  }],
  [{
    id: 0, name: 'Grape', users: 8, units: 19, revenue: '$70',
  }, {
    id: 1, name: 'Melon', users: 12, units: 23, revenue: '$99',
  }, {
    id: 2, name: 'Apple', users: 9, units: 17, revenue: '$120',
  }],
  [{
    id: 0,
    username: 'aeinstein',
    email: 'albert.einstein@yahoo.com',
    height: 175,
    expandedCell: 'Hello',
  }, {
    id: 1,
    username: 'shawking',
    email: 'stephen.hawking@hotmail.com',
    height: 183,
    expandedCell: 'Hello',
  }, {
    id: 2,
    username: 'mcurie',
    email: 'marie.curie@gmail.com',
    height: 158,
    expandedCell: 'Hello',
  }],
];

describe('<Table>', () => {
  it('should render a static table correctly', () => {
    const table = ReactTestRenderer.create(
      <Table>
        <TableRow tableHeader>
          <TableCell columnHeader />
          <TableCell>Header</TableCell>
          <TableCell>Header</TableCell>
          <TableCell align="right">Header</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Header row</TableCell>
          <TableCell>Table cell</TableCell>
          <TableCell>Table cell</TableCell>
          <TableCell>111</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Header row</TableCell>
          <TableCell>Table cell</TableCell>
          <TableCell>Table cell</TableCell>
          <TableCell>222</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Header row</TableCell>
          <TableCell>Table cell</TableCell>
          <TableCell>Table cell</TableCell>
          <TableCell>333</TableCell>
        </TableRow>
      </Table>,
    );
    const json = table.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a dynamic table correctly', () => {
    const table = ReactTestRenderer.create(
      <Table
        columns={columns[0]}
        data={data[0]}
      />,
    );
    const json = table.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a headerless table correctly', () => {
    const table = ReactTestRenderer.create(
      <Table
        hasHeader={false}
        columns={columns[0]}
        data={data[0]}
      />,
    );
    const json = table.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a sortable table correctly', () => {
    const table = ReactTestRenderer.create(
      <Table
        sortable
        columns={columns[1]}
        data={data[1]}
      />,
    );
    const json = table.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a pre-sorted table correctly', () => {
    const table = ReactTestRenderer.create(
      <Table
        sortCondition={{ units: 'descending' }}
        columns={columns[1]}
        data={data[1]}
      />,
    );
    const json = table.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an expandable table correctly', () => {
    const table = ReactTestRenderer.create(
      <Table
        expandable
        columns={columns[2]}
        data={data[2]}
      />,
    );
    const json = table.toJSON();
    expect(json).toMatchSnapshot();
  });
});
