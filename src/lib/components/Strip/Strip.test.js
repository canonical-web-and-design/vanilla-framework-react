import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Strip from './Strip';
import StripRow from './StripRow';
import StripColumn from './StripColumn';

describe('Strip component', () => {
  it('should render a simple Strip correctly', () => {
    const strip = ReactTestRenderer.create(
      <Strip colour="light">
        <StripRow>
          <p>This is a light Strip</p>
        </StripRow>
      </Strip>,
    );
    const json = strip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a dark Strip correctly', () => {
    const strip = ReactTestRenderer.create(
      <Strip colour="dark">
        <StripRow>
          <p>This is a dark Strip</p>
        </StripRow>
      </Strip>,
    );
    const json = strip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an accented Strip correctly', () => {
    const strip = ReactTestRenderer.create(
      <Strip colour="accent">
        <StripRow>
          <p>This is an accented Strip</p>
        </StripRow>
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
          <StripRow>
            <p>This is an image Strip that has a light image</p>
          </StripRow>
        </Strip>
        <Strip image={{
          src: 'https://assets.ubuntu.com/v1/ab1a7e82-background.png?w=600',
          colour: 'dark',
          }}
        >
          <StripRow>
            <p>This is an image Strip that has a dark image</p>
          </StripRow>
        </Strip>
      </div>,
    );
    const json = strip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a bordered Strip correctly', () => {
    const strip = ReactTestRenderer.create(
      <Strip bordered>
        <StripRow>
          <p>This is a bordered Strip</p>
        </StripRow>
      </Strip>,
    );
    const json = strip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a shallow Strip correctly', () => {
    const strip = ReactTestRenderer.create(
      <Strip padding="shallow">
        <StripRow>
          <p>This is a shallow Strip</p>
        </StripRow>
      </Strip>,
    );
    const json = strip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a deep Strip correctly', () => {
    const strip = ReactTestRenderer.create(
      <Strip padding="deep">
        <StripRow>
          <p>This is a deep Strip</p>
        </StripRow>
      </Strip>,
    );
    const json = strip.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render StripColumns correctly', () => {
    const strip = ReactTestRenderer.create(
      <Strip>
        <StripRow>
          <StripColumn size={6}>
            6 columns
          </StripColumn>
          <StripColumn size={2}>
            2 columns
          </StripColumn>
          <StripColumn size={4}>
            4 columns
          </StripColumn>
        </StripRow>
        <StripRow>
          <StripColumn size={3}>
            3 columns
          </StripColumn>
          <StripColumn size={9}>
            9 columns
          </StripColumn>
        </StripRow>
        <StripRow>
          <StripColumn size={2}>
            2 columns
          </StripColumn>
          <StripColumn size={7}>
            7 columns
          </StripColumn>
          <StripColumn size={3}>
            3 columns
          </StripColumn>
        </StripRow>
      </Strip>,
    );
    const json = strip.toJSON();
    expect(json).toMatchSnapshot();
  });
});
