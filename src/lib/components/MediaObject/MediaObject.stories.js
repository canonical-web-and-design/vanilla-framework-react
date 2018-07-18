import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import MediaObject from './MediaObject';

const metadataOptions = [undefined, 'date', 'location', 'venue'];

storiesOf('Media Object', module)
  .add('Default',
    withInfo('The MediaObject component should be used to display events or articles.')(() => (
      <MediaObject
        round={boolean('Round', false)}
        large={boolean('Large', false)}
        href={text('href', '#')}
        img={{ src: text('Image', 'http://placehold.it/72x72'), alt: '' }}
        title={text('Title', 'Event Title')}
        metadata={[
          {
            description: text('Metadata description', 'CSS frameworks'),
            type: select('Metadata type', metadataOptions),
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
        <p>{text('Description', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')}</p>
      </MediaObject>),
    ),
  )

  .add('Round',
    withInfo('You can add the "round" prop to the MediaObject component to create a circular image style, which we recommend to be used for head shots of people.')(() => (
      <MediaObject
        round={boolean('Round', true)}
        large={boolean('Large', false)}
        img={{ src: text('Image', 'http://placehold.it/72x72'), alt: '' }}
        title={text('Title', 'Person Name')}
        href={text('href', '#')}
        metadata={[
          {
            description: text('Metadata description', 'London, UK'),
            type: select('Metadata type', metadataOptions, 'location'),
          },
        ]}
      >
        <p>{text('Description', 'Lorem ipsum dolor sit amet')}</p>
      </MediaObject>),
    ),
  )

  .add('Large',
    withInfo('Add the "large" prop to display details of a single object on a page.')(() => (
      <MediaObject
        round={boolean('Round', false)}
        large={boolean('Large', true)}
        img={{ src: text('Image', 'http://placehold.it/96x96'), alt: '' }}
        title={text('Title', 'Title')}
        href={text('href', undefined)}
      >
        <p>{text('Description', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')}</p>
      </MediaObject>),
    ),
  );
