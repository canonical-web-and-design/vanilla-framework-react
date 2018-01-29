import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import Pagination from './Pagination';
import PaginationItem from './PaginationItem';

describe('<Pagination>', () => {
  it('renders default Pagination with PaginationItem correctly', () => {
    const pagination = ReactTestRenderer.create(
      <Pagination>
        <PaginationItem />
      </Pagination>,
    );
    const json = pagination.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders PaginationItem with next prop correctly', () => {
    const pagination = ReactTestRenderer.create(
      <Pagination>
        <PaginationItem next />
      </Pagination>,
    );
    const json = pagination.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders PaginationItem with previous prop correctly', () => {
    const pagination = ReactTestRenderer.create(
      <Pagination>
        <PaginationItem previous />
      </Pagination>,
    );
    const json = pagination.toJSON();
    expect(json).toMatchSnapshot();
  });
});
