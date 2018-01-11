import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import MediaObject from './MediaObject';

storiesOf('Media Object', module)
  .add('Default',
    withInfo('The MediaObject component should be used to display events or articles.')(() => (
      <MediaObject
        round={boolean('Round', false)}
        large={boolean('Large', false)}
        img={{ src: text('Image', 'http://placehold.it/72x72'), alt: '' }}
        title={{ name: text('Title', 'Event Title'), link: text('Link', '#') }}
        description={text('Description', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')}
        metadata={{
          topic: text('Topic', 'CSS frameworks'),
          date: text('Date', '21 - 23 February 2017'),
          venue: text('Venue', 'Venue 360'),
          location: text('Location', 'Santa Clara, CA'),
        }}
      />),
    ),
  )

  .add('Round',
    withInfo('You can add the "round" prop to the MediaObject component to create a circular image style, which we recommend to be used for head shots of people.')(() => (
      <MediaObject
        round={boolean('Round', true)}
        large={boolean('Large', false)}
        img={{ src: text('Image', 'http://placehold.it/72x72'), alt: '' }}
        title={{ name: text('Title', 'Person Name'), link: text('Link', '#') }}
        description={text('Description', 'Lorem ipsum dolor sit amet')}
        metadata={{
          topic: text('Topic'),
          date: text('Date'),
          venue: text('Venue'),
          location: text('Location', 'London, UK'),
        }}
      />),
    ),
  )

  .add('Large',
    withInfo('Add the "large" prop to display details of a single object on a page.')(() => (
      <MediaObject
        round={boolean('Round', false)}
        large={boolean('Large', true)}
        img={{ src: text('Image', 'http://placehold.it/96x96'), alt: '' }}
        title={{ name: text('Title', 'Title'), link: text('Link') }}
        description={text('Description', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')}
        metadata={{
          topic: text('Topic'),
          date: text('Date'),
          venue: text('Venue'),
          location: text('Location'),
        }}
      />),
    ),
  );
