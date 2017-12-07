import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import MutedHeading from './MutedHeading';

describe('MutedHeading component', () => {
  it('should render correctly', () => {
    const mutedHeading = ReactTestRenderer.create(
      <MutedHeading>Muted heading</MutedHeading>);
    const json = mutedHeading.toJSON();
    expect(json).toMatchSnapshot();
  });
});
