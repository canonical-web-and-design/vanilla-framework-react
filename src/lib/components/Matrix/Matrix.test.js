import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Matrix from './Matrix';
import MatrixItem from './MatrixItem';

describe('Matrix component', () => {
  it('should render a Matrix with one MatrixItem correctly', () => {
    const matrix = ReactTestRenderer.create(
      <Matrix>
        <MatrixItem>
          description
        </MatrixItem>
      </Matrix>,
    );
    const json = matrix.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a Matrix with multiple MatrixItem correctly', () => {
    const matrix = ReactTestRenderer.create(
      <Matrix>
        <MatrixItem>
          description
        </MatrixItem>
        <MatrixItem>
          description
        </MatrixItem>
        <MatrixItem>
          description
        </MatrixItem>
      </Matrix>,
    );
    const json = matrix.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a title when title prop provided', () => {
    const matrix = ReactTestRenderer.create(
      <Matrix>
        <MatrixItem title="Title">
          description
        </MatrixItem>
      </Matrix>,
    );
    const json = matrix.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should convert title to link when href prop provided', () => {
    const matrix = ReactTestRenderer.create(
      <Matrix>
        <MatrixItem title="Title" href="#">
          description
        </MatrixItem>
      </Matrix>,
    );
    const json = matrix.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render an image when img prop provided', () => {
    const matrix = ReactTestRenderer.create(
      <Matrix>
        <MatrixItem title="Title" href="#" img={{ src: 'http://placehold.it/60x60', alt: 'icon' }}>
          description
        </MatrixItem>
      </Matrix>,
    );
    const json = matrix.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should auto-fill to have a multiple of three MatrixItem children', () => {
    const matrix = ReactTestRenderer.create(
      <Matrix>
        <MatrixItem>
          description
        </MatrixItem>
        <MatrixItem>
          description
        </MatrixItem>
        <MatrixItem>
          description
        </MatrixItem>
        <MatrixItem>
          description
        </MatrixItem>
      </Matrix>,
    );
    const json = matrix.toJSON();
    expect(json).toMatchSnapshot();
  });
});
