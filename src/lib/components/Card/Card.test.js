import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Card from './Card';

describe('Card component', () => {
  it('should render a basic Card correctly', () => {
    const card = ReactTestRenderer.create(
      <Card title="Card title">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </Card>);
    const json = card.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render Card with an image correctly', () => {
    const card = ReactTestRenderer.create(
      <Card
        title="Card title"
        image={{
          src: 'http://placekitten.com/g/64/64',
          alt: 'Placeholder',
        }}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </Card>);
    const json = card.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a highlighted Card correctly', () => {
    const card = ReactTestRenderer.create(
      <Card
        highlighted
        title="Card title"
        image={{
          src: 'http://placekitten.com/g/64/64',
          alt: 'Placeholder',
        }}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </Card>);
    const json = card.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an overlay Card correctly', () => {
    const card = ReactTestRenderer.create(
      <Card
        overlay
        title="Card title"
        image={{
          src: 'http://placekitten.com/g/64/64',
          alt: 'Placeholder',
        }}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </Card>);
    const json = card.toJSON();
    expect(json).toMatchSnapshot();
  });
});
