import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Matrix from './Matrix';
import MatrixItem from './MatrixItem';

storiesOf('Matrix', module).addDecorator(withKnobs)
  .add('Default',
    withInfo('The Matrix component can be useful to display a selection of items in a format that is less linear than a normal list, using an image to describe each item. MatrixItem components will display in one column on small screens. At resolutions above $breakpoint-medium, the Matrix switches to three items per row.')(() => (
      <Matrix>
        <MatrixItem
          title={text('Title', 'Title')}
          href={text('Link', '#')}
          img={{ src: 'http://placehold.it/60x60', alt: 'icon' }}
        >
          {text('Text', 'Short description')}
        </MatrixItem>
        <MatrixItem title="Title" href="#" img={{ src: 'http://placehold.it/60x60', alt: 'icon' }}>
          Short description
        </MatrixItem>
        <MatrixItem title="Title" href="#" img={{ src: 'http://placehold.it/60x60', alt: 'icon' }}>
          Short description
        </MatrixItem>
        <MatrixItem title="Title" href="#" img={{ src: 'http://placehold.it/60x60', alt: 'icon' }}>
          Short description
        </MatrixItem>
        <MatrixItem title="Title" href="#" img={{ src: 'http://placehold.it/60x60', alt: 'icon' }}>
          Short description
        </MatrixItem>
        <MatrixItem title="Title" href="#" img={{ src: 'http://placehold.it/60x60', alt: 'icon' }}>
          Short description
        </MatrixItem>
        <MatrixItem title="Title" href="#" img={{ src: 'http://placehold.it/60x60', alt: 'icon' }}>
          Short description
        </MatrixItem>
        <MatrixItem title="Title" href="#" img={{ src: 'http://placehold.it/60x60', alt: 'icon' }}>
          Short description
        </MatrixItem>
      </Matrix>),
    ),
  );
