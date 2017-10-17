import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Switch from './Switch';

describe('Switch component should render expected markup', () => {
  it('should compare the component with a snapshot', () => {
    const switchComponent = ReactTestRenderer.create(
      <Switch label="Turn On/Off" />,
    );
    const json = switchComponent.toJSON();
    expect(json).toMatchSnapshot();
  });
});

