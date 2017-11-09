import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import CodeNumbered from './CodeNumbered';

describe('CodeNumbered component', () => {
  it('should compare with a snapshot', () => {
    const codenumbered = ReactTestRenderer.create(<CodeNumbered lines={[
      "this is a code sample line 1",
      "this is another code sample line 2 this is another code sample line 2 this is another code sample line 2",
      "this is the last code sample 3, and everyone knows this is the best code sample"
    ]} />);
    const json = codenumbered.toJSON();
    expect(json).toMatchSnapshot();
  });
});
