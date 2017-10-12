import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Card from './Card';

describe('Card component should render expected markup', () => {
  it('should compare the component with a snapshot', () => {
    const card = ReactTestRenderer.create(<Card
      className="p-card"
      title="Title"
      cardContent="Lorem ipsum dolor sit amet"
    />);
    const json = card.toJSON();
    expect(json).toMatchSnapshot();
  });
});
