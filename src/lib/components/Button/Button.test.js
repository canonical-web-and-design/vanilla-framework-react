import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Button from './Button';

describe('Button component', () => {
  it('should render a simple Button correctly', () => {
    const button = ReactTestRenderer.create(
      <Button value="Submit" />);
    const json = button.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a modified Button correctly', () => {
    const button = ReactTestRenderer.create(
      <div>
        <Button neutral value="Neutral" />
        <Button negative value="Negative" />
        <Button positive value="Positive" />
        <Button brand value="Brand" />
        <Button inline value="Inline" />
        <Button disabled value="Disabled" />
      </div>);
    const json = button.toJSON();
    expect(json).toMatchSnapshot();
  });
});

