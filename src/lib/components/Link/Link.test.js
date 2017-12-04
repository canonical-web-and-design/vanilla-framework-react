import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Link from './Link';

describe('Link component', () => {
  it('should render a simple link correctly', () => {
    const link = ReactTestRenderer.create(
      <Link href="https://vanilla-framework.github.io/vanilla-framework-react/">Default Link</Link>,
    );
    const json = link.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should accept modifiers correctly', () => {
    const link = ReactTestRenderer.create(
      <div>
        <Link external href="https://vanillaframework.io/">External Link</Link>
        <Link soft href="https://vanilla-framework.github.io/vanilla-framework-react/">Soft Link</Link>
        <Link strong href="https://vanilla-framework.github.io/vanilla-framework-react/">Strong Link</Link>
        <Link inverted href="https://vanilla-framework.github.io/vanilla-framework-react/">Inverted Link</Link>
        <Link top href="https://vanilla-framework.github.io/vanilla-framework-react/">Back to top</Link>
        <Link external strong href="https://vanillaframework.io/">External/Strong Link</Link>
        <Link external soft href="https://vanillaframework.io/">External/Soft Link</Link>
        <Link top strong href="https://vanilla-framework.github.io/vanilla-framework-react/">Strong/Back to top Link</Link>
      </div>,
    );
    const json = link.toJSON();
    expect(json).toMatchSnapshot();
  });
});
