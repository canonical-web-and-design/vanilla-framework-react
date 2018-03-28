import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Table from './Table';
import TableCell from './TableCell';
import TableRow from './TableRow';
import MediaObject from '../MediaObject/MediaObject';

const ExpandedCellExample = (props) => {
  const { name, location } = props; // eslint-disable-line
  return (
    <div className="row" style={{ padding: '0.25rem 0' }}>
      <div className="col-4">
        <MediaObject
          round
          img={{ src: 'http://placehold.it/120x120', alt: '' }}
          title={{ name }}
          description="Lorem ipsum dolor sit amet"
          metadata={{ location }}
        />
      </div>
      <div className="col-4">
        <h3>About me</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum dicta
          nostrum eligendi similique earum.
        </p>
      </div>
    </div>
  );
};

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
    expandedCell: <ExpandedCellExample name="Albert Einstein" location="Ulm, Germany" />,
  }, {
    id: 1,
    username: 'shawking',
    email: 'stephen.hawking@hotmail.com',
    height: 183,
    expandedCell: <ExpandedCellExample name="Stephen Hawking" location="Oxford, England" />,
  }, {
    id: 2,
    username: 'mcurie',
    email: 'marie.curie@gmail.com',
    height: 158,
    expandedCell: <ExpandedCellExample name="Marie Curie" location="Warsaw, Poland" />,
  }],
];

storiesOf('Table', module)
  .add('Static Table',
    withInfo('The Table component can be constructed in two ways - either manually using appropriate sub-components (TableRow and TableCell), or dynamically using two object props (data and columns). This is an example of a Static Table built manually.')(() => (
      <Table
        hasHeader={boolean('Header', true)}
        sortable={boolean('Sortable', false)}
        expandable={boolean('Expandable', false)}
        accordion={boolean('Accordion', false)}
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
          <TableCell expandedCell>
            <div className="row">
              <div className="col-6">
                <h3>Expanding table cell 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum
                dicta beatae nostrum eligendi similique earum, dolorem fuga quis, sequi voluptates
                architecto ipsa dolorum eaque rem expedita inventore voluptas odit aspernatur
                alias molestias facere, eum accusamus dolor, assumenda. Eaque, id! Dolorem
                perferendis reprehenderit eum, odio minima ad commodi earum non, iste suscipit.
                </p>
              </div>
              <div className="col-6">
                <img src="http://placehold.it/1024x325" alt="" />
              </div>
            </div>
          </TableCell>
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
          <TableCell expandedCell>
            <div className="row">
              <div className="col-6">
                <h3>Expanding table cell 2</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cum
                dicta beatae nostrum eligendi similique earum, dolorem fuga quis, sequi voluptates
                architecto ipsa dolorum eaque rem expedita inventore voluptas odit aspernatur
                alias molestias facere, eum accusamus dolor, assumenda. Eaque, id! Dolorem
                perferendis reprehenderit eum, odio minima ad commodi earum non, iste suscipit.
                </p>
              </div>
              <div className="col-6">
                <img src="http://placehold.it/1024x325" alt="" />
              </div>
            </div>
          </TableCell>
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
    withInfo('<Table> components can have the header row disabled.')(() => (
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
    withInfo('A Table can be pre-sorted if a valid "sortCondition" prop is provided. For an Object Table the sortCondition object key is the column key. In a Static Table, it is column(index) e.g. { column0: ascending }')(() => (
      <Table
        hasHeader={boolean('Header', true)}
        sortable={boolean('Sortable', true)}
        sortCondition={{ units: 'descending' }}
        columns={columns[1]}
        data={data[1]}
      />),
    ),
  )

  .add('Expandable',
    withInfo('Adding the "expandable" prop to a Table will allow expanding and hidden TableCell components which take up the full width of the TableRow. To make a TableRow expandable in an Object Table, you must pass in valid JSX to the key "expandedCell" on the relevant object in the data array, e.g. { id: 0, name: "name", expandedCell: <div>Hello World</div>. For a Static Table you simply add <TableCell expandedCell> to the TableRow you want to have expanded content, and pass in valid JSX as children. Adding the "accordion" prop as well limits the Table to having maximum one TableRow expanded at a time.')(() => (
      <Table
        hasHeader={boolean('Header', true)}
        sortable={boolean('Sortable', false)}
        expandable={boolean('Expandable', true)}
        accordion={boolean('Accordion', false)}
        columns={columns[2]}
        data={data[2]}
      />),
    ),
  );
