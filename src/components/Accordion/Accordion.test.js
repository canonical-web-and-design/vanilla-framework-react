import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Switch from './Accordion';

describe('Accordion component should render expected markup', () => {
  it('should compare the component with a snapshot', () => {
    const accordionComponent = ReactTestRenderer.create(
      <Switch label="Turn On/Off" />,
    );
    const json = accordionComponent.toJSON();
    expect(json).toMatchSnapshot();
  });
});

