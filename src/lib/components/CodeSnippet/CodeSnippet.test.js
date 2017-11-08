import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import CodeSnippet from './CodeSnippet';

describe('CodeSnippet component', () => {
  it('should compare with a snapshot', () => {
    const codesnippet = ReactTestRenderer.create(<CodeSnippet value="sudo apt-get update" />);
    const json = codesnippet.toJSON();
    expect(json).toMatchSnapshot();
  });
});

