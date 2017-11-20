import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Image from './Image';

describe('Image component', () => {
  it('should render a default Image correctly', () => {
    const image = ReactTestRenderer.create(
      <Image src="http://placekitten.com/g/300/300" alt="" />);
    const json = image.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render bordered prop correctly', () => {
    const image = ReactTestRenderer.create(
      <Image bordered src="http://placekitten.com/g/300/300" alt="" />);
    const json = image.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render shadowed prop correctly', () => {
    const image = ReactTestRenderer.create(
      <Image shadowed src="http://placekitten.com/g/300/300" alt="" />);
    const json = image.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render both bordered and shadowed props correctly', () => {
    const image = ReactTestRenderer.create(
      <Image bordered shadowed src="http://placekitten.com/g/300/300" alt="" />);
    const json = image.toJSON();
    expect(json).toMatchSnapshot();
  });
});
