import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Tabs from './Tabs';
import TabsItem from './TabsItem';

describe('Tabs component', () => {
  it('should render a Tabs component with one TabsItem and autoselect it', () => {
    const tabs = ReactTestRenderer.create(
      <Tabs>
        <TabsItem>Tab 1</TabsItem>
      </Tabs>,
    );
    const json = tabs.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a Tabs component with more than one TabsItem and autoselect the first tab', () => {
    const tabs = ReactTestRenderer.create(
      <Tabs>
        <TabsItem>Tab 1</TabsItem>
        <TabsItem>Tab 2</TabsItem>
        <TabsItem>Tab 3</TabsItem>
      </Tabs>,
    );
    const json = tabs.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a Tabs component with a different TabItem selected if prop is provided', () => {
    const tabs = ReactTestRenderer.create(
      <Tabs selected={2}>
        <TabsItem>Tab 1</TabsItem>
        <TabsItem>Tab 2</TabsItem>
        <TabsItem>Tab 3</TabsItem>
      </Tabs>,
    );
    const json = tabs.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render anchor tags if href prop is provided', () => {
    const tabs = ReactTestRenderer.create(
      <Tabs>
        <TabsItem href="/link1">Tab 1</TabsItem>
        <TabsItem href="/link2">Tab 2</TabsItem>
        <TabsItem href="/link3">Tab 3</TabsItem>
      </Tabs>,
    );
    const json = tabs.toJSON();
    expect(json).toMatchSnapshot();
  });
});

