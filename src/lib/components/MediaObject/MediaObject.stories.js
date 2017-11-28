import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import MediaObject from './MediaObject';

storiesOf('Media Object', module)
  .add('Default',
    withInfo('The MediaObject component should be used to display events or articles.')(() => (
      <MediaObject
        img={{ src: 'http://placehold.it/72x72', alt: '' }}
        title={{ name: 'Event Title', link: '#' }}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
        metadata={{
          topic: 'CSS frameworks',
          date: '21 - 23 February 2017',
          venue: 'Venue 360',
          location: 'Santa Clara, CA',
        }}
      />),
    ),
  )

  .add('Round',
    withInfo('You can add the "round" prop to the MediaObject component to create a circular image style, which we recommend to be used for head shots of people.')(() => (
      <MediaObject
        round
        img={{ src: 'http://placehold.it/72x72', alt: '' }}
        title={{ name: 'Person Name', link: '#' }}
        description="Lorem ipsum dolor sit amet"
        metadata={{ location: 'London, UK' }}
      />),
    ),
  )

  .add('Large',
    withInfo('Add the "large" prop to display details of a single object on a page.')(() => (
      <MediaObject
        large
        img={{ src: 'http://placehold.it/96x96', alt: '' }}
        title={{ name: 'Title' }}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua."
      />),
    ),
  )

  .add('Examples',
    withInfo('All of the props are optional, allowing many levels of customisation.')(() => (
      <div>
        <div style={{ margin: '10px 0', borderBottom: 'solid 1px #ccc' }} />
        <MediaObject
          large
          round
          img={{ src: 'http://placehold.it/96x96', alt: '' }}
          metadata={{
            topic: 'CSS frameworks',
            date: '21 - 23 February 2017',
            location: 'Santa Clara, CA',
          }}
        />
        <div style={{ margin: '10px 0', borderBottom: 'solid 1px #ccc' }} />
        <MediaObject
          title={{ name: 'Event Title' }}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua."
          metadata={{
            date: '21 - 23 February 2017',
            venue: 'Venue 360',
          }}
        />
        <div style={{ margin: '10px 0', borderBottom: 'solid 1px #ccc' }} />
        <MediaObject
          img={{ src: 'http://placehold.it/72x72', alt: '' }}
          title={{ name: 'Event Title', link: '#' }}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua."
        />
        <div style={{ margin: '10px 0', borderBottom: 'solid 1px #ccc' }} />
        <MediaObject />
      </div>),
    ),
  );
