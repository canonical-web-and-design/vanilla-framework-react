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
      <MediaObject title="Event Title">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </MediaObject>,
    );
    const json = mediaObject.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render title with link correctly', () => {
    const mediaObject = ReactTestRenderer.create(
      <MediaObject title="Event Title" href="#" />,
    );
    const json = mediaObject.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render large prop correctly', () => {
    const mediaObject = ReactTestRenderer.create(
      <MediaObject large />,
    );
    const json = mediaObject.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render image correctly', () => {
    const mediaObject = ReactTestRenderer.create(
      <MediaObject img={{ src: 'http://placehold.it/72x72', alt: 'alt' }} />,
    );
    const json = mediaObject.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render round image correctly', () => {
    const mediaObject = ReactTestRenderer.create(
      <MediaObject round img={{ src: 'http://placehold.it/72x72', alt: 'alt' }} />,
    );
    const json = mediaObject.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('should render metadata correctly', () => {
    const mediaObject = ReactTestRenderer.create(
      <MediaObject
        metadata={[
          {
            description: 'CSS frameworks',
          }, {
            description: '21 - 23 February 2017',
            type: 'date',
          }, {
            description: 'Venue 360',
            type: 'venue',
          }, {
            description: 'Santa Clara, CA',
            type: 'location',
          },
        ]}
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
        title="Event Title"
        href="#"
        metadata={[
          {
            description: 'CSS frameworks',
          }, {
            description: '21 - 23 February 2017',
            type: 'date',
          }, {
            description: 'Venue 360',
            type: 'venue',
          }, {
            description: 'Santa Clara, CA',
            type: 'location',
          },
        ]}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </MediaObject>,
    );
    const json = mediaObject.toJSON();
    expect(json).toMatchSnapshot();
  });
});
