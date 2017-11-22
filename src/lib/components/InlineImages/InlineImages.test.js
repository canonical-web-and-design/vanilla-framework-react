import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import InlineImages from './InlineImages';
import Image from '../Image/Image';

describe('InlineImages component', () => {
  it('should render the InlineImages component correctly', () => {
    const inlineImages = ReactTestRenderer.create(
      <InlineImages>
        <Image bordered src="http://placekitten.com/g/200/200" alt="" />
        <Image bordered src="http://placekitten.com/g/400/400" alt="" />
        <Image bordered src="http://placekitten.com/g/300/300" alt="" />
        <Image bordered src="http://placekitten.com/g/500/500" alt="" />
        <Image bordered src="http://placekitten.com/g/800/800" alt="" />
        <Image bordered src="http://placekitten.com/g/700/700" alt="" />
      </InlineImages>);
    const json = inlineImages.toJSON();
    expect(json).toMatchSnapshot();
  });
});
