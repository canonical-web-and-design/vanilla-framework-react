import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Strip from './Strip';
import Row from './Row';
import Column from './Column';

describe('Strip component', () => {
  it('should render a simple Strip correctly', () => {
    const strip = ReactTestRenderer.create(
      <Strip colour="light">
        <Row>
          <p>This is a light Strip</p>
        </Row>
      </Strip>,
    );
    const json = strip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a dark Strip correctly', () => {
    const strip = ReactTestRenderer.create(
      <Strip colour="dark">
        <Row>
          <p>This is a dark Strip</p>
        </Row>
      </Strip>,
    );
    const json = strip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an accented Strip correctly', () => {
    const strip = ReactTestRenderer.create(
      <Strip colour="accent">
        <Row>
          <p>This is an accented Strip</p>
        </Row>
      </Strip>,
    );
    const json = strip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an image Strip correctly', () => {
    const strip = ReactTestRenderer.create(
      <div style={{ maxWidth: '1030px' }}>
        <Strip image={{
          src: 'https://assets.ubuntu.com/v1/974c4e8c-background-origami.png?w=600',
          colour: 'light',
          }}
        >
          <Row>
            <p>This is an image Strip that has a light image</p>
          </Row>
        </Strip>
        <Strip image={{
          src: 'https://assets.ubuntu.com/v1/ab1a7e82-background.png?w=600',
          colour: 'dark',
          }}
        >
          <Row>
            <p>This is an image Strip that has a dark image</p>
          </Row>
        </Strip>
      </div>,
    );
    const json = strip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a bordered Strip correctly', () => {
    const strip = ReactTestRenderer.create(
      <Strip bordered>
        <Row>
          <p>This is a bordered Strip</p>
        </Row>
      </Strip>,
    );
    const json = strip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a shallow Strip correctly', () => {
    const strip = ReactTestRenderer.create(
      <Strip padding="shallow">
        <Row>
          <p>This is a shallow Strip</p>
        </Row>
      </Strip>,
    );
    const json = strip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a deep Strip correctly', () => {
    const strip = ReactTestRenderer.create(
      <Strip padding="deep">
        <Row>
          <p>This is a deep Strip</p>
        </Row>
      </Strip>,
    );
    const json = strip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render Columns correctly', () => {
    const strip = ReactTestRenderer.create(
      <Strip>
        <Row>
          <Column size={6}>
            6 columns
          </Column>
          <Column size={2}>
            2 columns
          </Column>
          <Column size={4}>
            4 columns
          </Column>
        </Row>
        <Row>
          <Column size={3}>
            3 columns
          </Column>
          <Column size={9}>
            9 columns
          </Column>
        </Row>
        <Row>
          <Column size={2}>
            2 columns
          </Column>
          <Column size={7}>
            7 columns
          </Column>
          <Column size={3}>
            3 columns
          </Column>
        </Row>
      </Strip>,
    );
    const json = strip.toJSON();
    expect(json).toMatchSnapshot();
  });
});
