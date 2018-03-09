import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Table from './Table';
import TableCell from './TableCell';
import TableRow from './TableRow';
import TableExpandingRow from './TableExpandingRow';

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
    { key: 'name', label: 'Name' },
    { key: 'users', label: 'Users', align: 'right' },
    { key: 'units', label: 'Units', align: 'right' },
    { key: 'actions', label: 'Actions', align: 'right' },
  ],
];

const data = [
  [{
    id: 0, header: 'Header row', column1: 'Table cell', column2: 'Table cell', column3: 111,
  },
  {
    id: 1, header: 'Header row', column1: 'Table cell', column2: 'Table cell', column3: 222,
  },
  {
    id: 2, header: 'Header row', column1: 'Table cell', column2: 'Table cell', column3: 333,
  }],
  [{
    id: 0, name: 'Grape', users: 8, units: 19, revenue: '$70',
  },
  {
    id: 1, name: 'Melon', users: 12, units: 23, revenue: '$99',
  },
  {
    id: 2, name: 'Apple', users: 9, units: 17, revenue: '$120',
  }],
  [{
    id: 0,
    cellData: [{
      content: 'Grape',
      align: 'left',
    }, {
      content: 8,
      align: 'right',
    }, {
      content: 18,
      align: 'right',
    }, {
      content: '$70',
      align: 'right',
    }],
  }, {
    id: 1,
    cellData: [{
      content: 'Melon',
      align: 'left',
    }, {
      content: 12,
      align: 'right',
    }, {
      content: 23,
      align: 'right',
    }, {
      content: '$99',
      align: 'right',
    }],
  }, {
    id: 2,
    cellData: [{
      content: 'Apple',
      align: 'left',
    }, {
      content: 9,
      align: 'right',
    }, {
      content: 17,
      align: 'right',
    }, {
      content: '$120',
      align: 'right',
    }],
  }],
];

describe('Table component', () => {
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

  it('should render an expanding table correctly', () => {
    const tableExpanding = ReactTestRenderer.create(
      <Table
        columns={columns[2]}
        hasHeader
        expanding
      >
        {data[2].map(datum => (
          <TableExpandingRow key={`expanding-row-${datum.id}`} data={datum}>
            <div>Hello world!</div>
          </TableExpandingRow>
        ))}
      </Table>,
    );
    const json = tableExpanding.toJSON();
    expect(json).toMatchSnapshot();
  });
});
