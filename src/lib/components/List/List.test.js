import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import List from './List';
import ListItem from './ListItem';

describe('List component', () => {
  it('should render a simple list correctly', () => {
    const list = ReactTestRenderer.create(
      <List>
        <ListItem>Lorem</ListItem>
        <ListItem>Ipsum</ListItem>
        <ListItem>Dolor</ListItem>
      </List>,
    );
    const json = list.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a ticked list correctly', () => {
    const list = ReactTestRenderer.create(
      <List>
        <ListItem ticked>Lorem</ListItem>
        <ListItem ticked>Ipsum</ListItem>
        <ListItem ticked>Dolor</ListItem>
      </List>,
    );
    const json = list.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a divided list correctly', () => {
    const list = ReactTestRenderer.create(
      <List modifier="divided">
        <ListItem>Lorem</ListItem>
        <ListItem>Ipsum</ListItem>
        <ListItem>Dolor</ListItem>
      </List>,
    );
    const json = list.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a ticked and divided list correctly', () => {
    const list = ReactTestRenderer.create(
      <List modifier="divided">
        <ListItem ticked>Lorem</ListItem>
        <ListItem ticked>Ipsum</ListItem>
        <ListItem ticked>Dolor</ListItem>
      </List>,
    );
    const json = list.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an inline list correctly', () => {
    const list = ReactTestRenderer.create(
      <List modifier="inline">
        <ListItem>Lorem</ListItem>
        <ListItem>Ipsum</ListItem>
        <ListItem>Dolor</ListItem>
      </List>,
    );
    const json = list.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a middot list correctly', () => {
    const list = ReactTestRenderer.create(
      <List modifier="middot">
        <ListItem>Lorem</ListItem>
        <ListItem>Ipsum</ListItem>
        <ListItem>Dolor</ListItem>
      </List>,
    );
    const json = list.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a split list correctly', () => {
    const list = ReactTestRenderer.create(
      <List modifier="split">
        <ListItem ticked>Lorem</ListItem>
        <ListItem ticked>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec ipsum augue. Ut arcu
          erat, lacinia sit ametjusto quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ListItem>
        <ListItem ticked>Dolor</ListItem>
        <ListItem ticked>
          Aenean nec ipsum augue. Ut arcu erat, lacinia sit amet justo quis.
        </ListItem>
        <ListItem ticked>Ipsum</ListItem>
        <ListItem ticked>Ut arcu erat, lacinia sit amet justo quis.</ListItem>
      </List>,
    );
    const json = list.toJSON();
    expect(json).toMatchSnapshot();
  });
});
