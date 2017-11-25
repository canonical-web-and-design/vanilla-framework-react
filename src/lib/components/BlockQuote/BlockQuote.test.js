import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import BlockQuote from './BlockQuote';

describe('BlockQuote component', () => {
  it('should render a basic blockquote correctly', () => {
    const blockQuote = ReactTestRenderer.create(
      <BlockQuote
        quote="Ubuntu is an ancient African word meaning 'humanity to others'.
        Ubuntu is an ancient African word meaning 'humanity to others'."
      />,
    );
    const json = blockQuote.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a basic blockquote with citation correctly', () => {
    const blockQuote = ReactTestRenderer.create(
      <BlockQuote
        quote="Ubuntu is an ancient African word meaning 'humanity to others'.
        Ubuntu is an ancient African word meaning 'humanity to others'."
        citation="Canonical"
      />,
    );
    const json = blockQuote.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a pull quote correctly', () => {
    const blockQuote = ReactTestRenderer.create(
      <BlockQuote
        pull
        quote="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        citation="A. N. Author"
      />,
    );
    const json = blockQuote.toJSON();
    expect(json).toMatchSnapshot();
  });
});
