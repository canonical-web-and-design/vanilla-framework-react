import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import ListTree from './ListTree';
import ListTreeGroup from './ListTreeGroup';
import ListTreeItem from './ListTreeItem';

describe('ListTree component', () => {
  it('should render a basic ListTree correctly', () => {
    const listTree = ReactTestRenderer.create(
      <ListTree>
        <ListTreeGroup name="/group">
          <ListTreeItem>file</ListTreeItem>
        </ListTreeGroup>
      </ListTree>);
    const json = listTree.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a nested ListTree correctly', () => {
    const listTree = ReactTestRenderer.create(
      <ListTree>
        <ListTreeGroup name="/depth1">
          <ListTreeGroup name="/depth2">
            <ListTreeGroup name="/depth3">
              <ListTreeItem>file</ListTreeItem>
            </ListTreeGroup>
          </ListTreeGroup>
        </ListTreeGroup>
      </ListTree>);
    const json = listTree.toJSON();
    expect(json).toMatchSnapshot();
  });
});
