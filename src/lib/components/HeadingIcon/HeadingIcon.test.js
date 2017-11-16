import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import HeadingIcon from './HeadingIcon';

describe('HeadingIcon component', () => {
  it('should render an icon and title without children correctly', () => {
    const headingIcon = ReactTestRenderer.create(
      <HeadingIcon
        title="Lorem ipsum dolor"
        alt="Lorem ipsum dolor"
        src="https://assets.ubuntu.com/v1/a4d31b28-icon-quote.svg"
      />,
    );
    const json = headingIcon.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render children correctly', () => {
    const headingIcon = ReactTestRenderer.create(
      <HeadingIcon
        title="Lorem ipsum dolor"
        alt="Lorem ipsum dolor"
        src="https://assets.ubuntu.com/v1/a4d31b28-icon-quote.svg"
      >
        <p>
          sit amet, consectetur adipisicing elit. Enim excepturi, repudiandae blanditiis odio
          perferendis voluptatibus dolorum, dicta illum quae ipsa voluptatum, sunt quasi? Nulla
          reiciendis magnam nostrum aliquam, beatae doloribus.
        </p>
      </HeadingIcon>,
    );
    const json = headingIcon.toJSON();
    expect(json).toMatchSnapshot();
  });
});
