import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Switch from './Switch';

describe('Switch component', () => {
  it('should compare with a snapshot', () => {
    const switchComponent = ReactTestRenderer.create(
      <Switch id="switch" label="Turn On/Off" />,
    );
    const json = switchComponent.toJSON();
    expect(json).toMatchSnapshot();
  });
});

