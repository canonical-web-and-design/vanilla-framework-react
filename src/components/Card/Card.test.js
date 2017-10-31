import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Card from './Card';

describe('Card component', () => {
  it('should compare with a snapshot', () => {
    const image = {
      src: 'http://placekitten.com/g/64/64',
      alt: 'Placeholder',
    };

    const card = ReactTestRenderer.create(
      <Card className="p-card" title="Title" image={image}>
        Lorem ipsum dolor sit amet
      </Card>);
    const json = card.toJSON();
    expect(json).toMatchSnapshot();
  });
});
