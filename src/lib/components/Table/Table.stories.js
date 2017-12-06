import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

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
];

storiesOf('Table', module).addDecorator(withKnobs)
  .add('Static Table',
    withInfo('The Table component can be constructed in two ways - either manually using appropriate sub-components (TableRow and TableCell), or dynamically using two object props (data and columns). This is an example of a Static Table built manually.')(() => (
      <Table
        hasHeader={boolean('Header', true)}
        sortable={boolean('Sortable', false)}
      >
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
      </Table>),
    ),
  )

  .add('Object Table',
    withInfo('An Object Table is built using object props for the data as well as for the column headers.')(() => (
      <Table
        hasHeader={boolean('Header', true)}
        sortable={boolean('Sortable', false)}
        columns={columns[0]}
        data={data[0]}
      />),
    ),
  )

  .add('No Header',
    withInfo('Tables can have the header row disabled.')(() => (
      <Table
        hasHeader={boolean('Header', false)}
        sortable={boolean('Sortable', false)}
        columns={columns[0]}
        data={data[0]}
      />),
    ),
  )

  .add('Sortable',
    withInfo('Adding a "sortable" prop to a Table allows each column to cycle through ascending, descending and no sort.')(() => (
      <Table
        hasHeader={boolean('Header', true)}
        sortable={boolean('Sortable', true)}
        columns={columns[1]}
        data={data[1]}
      />),
    ),
  )

  .add('Pre-sorted',
    withInfo('A Table can be pre-sorted if a valid sortCondition prop is provided. For Object Tables the sortCondition object key is the column key. In Static Tables, it is column(index) e.g. { column0: ascending }')(() => (
      <Table
        hasHeader={boolean('Header', true)}
        sortable={boolean('Sortable', true)}
        sortCondition={{ units: 'descending' }}
        columns={columns[1]}
        data={data[1]}
      />),
    ),
  );
