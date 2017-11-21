import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import MediaObject from './MediaObject';

describe('MediaObject component', () => {
  it('should not render anything if props object is empty', () => {
    const mediaObject = ReactTestRenderer.create(
      <MediaObject />,
    );
    const json = mediaObject.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render default style correctly', () => {
    const mediaObject = ReactTestRenderer.create(
      <MediaObject
        title={{ name: 'Event Title' }}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
      />,
    );
    const json = mediaObject.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render large prop correctly', () => {
    const mediaObject = ReactTestRenderer.create(
      <MediaObject
        large
        title={{ name: 'Event Title' }}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
      />,
    );
    const json = mediaObject.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render round prop correctly', () => {
    const mediaObject = ReactTestRenderer.create(
      <MediaObject
        round
        title={{ name: 'Event Title' }}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
      />,
    );
    const json = mediaObject.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render image correctly', () => {
    const mediaObject = ReactTestRenderer.create(
      <MediaObject
        img={{ src: 'http://placehold.it/72x72', alt: '' }}
        title={{ name: 'Event Title', link: '#' }}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
      />,
    );
    const json = mediaObject.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render title link correctly', () => {
    const mediaObject = ReactTestRenderer.create(
      <MediaObject
        title={{ name: 'Event Title', link: '#' }}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
      />,
    );
    const json = mediaObject.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render metadata correctly', () => {
    const mediaObject = ReactTestRenderer.create(
      <MediaObject
        title={{ name: 'Event Title', link: '#' }}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
        metadata={{
          topic: 'CSS frameworks',
          date: '21 - 23 February 2017',
          venue: 'Venue 360',
          location: 'Santa Clara, CA',
        }}
      />,
    );
    const json = mediaObject.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render a MediaObject with several optional props correctly', () => {
    const mediaObject = ReactTestRenderer.create(
      <MediaObject
        round
        large
        title={{ name: 'Event Title', link: '#' }}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
        metadata={{
          topic: 'CSS frameworks',
          date: '21 - 23 February 2017',
          venue: 'Venue 360',
          location: 'Santa Clara, CA',
        }}
      />,
    );
    const json = mediaObject.toJSON();
    expect(json).toMatchSnapshot();
  });
});
