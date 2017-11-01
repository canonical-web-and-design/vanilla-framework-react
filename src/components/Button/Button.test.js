import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Button from './Button';

describe('Button component', () => {
  it('should compare with a snapshot', () => {
    const button = ReactTestRenderer.create(<Button value="Submit" />);
    const json = button.toJSON();
    expect(json).toMatchSnapshot();
  });
});

