import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Image from './Image';

storiesOf('Image', module)
  .add('Default',
    withInfo('Default Image component.')(() => (
      <Image
        bordered={boolean('Bordered', false)}
        shadowed={boolean('Shadowed', false)}
        src={text('src', 'http://placekitten.com/g/300/300')}
        alt={text('alt', 'cat')}
      />),
    ),
  )
  .add('Bordered',
    withInfo('Bordered Image component.')(() => (
      <Image
        bordered={boolean('Bordered', true)}
        shadowed={boolean('Shadowed', false)}
        src={text('src', 'http://placekitten.com/g/300/300')}
        alt={text('alt', 'cat')}
      />),
    ),
  )
  .add('Shadowed',
    withInfo('Image component with drop-shadow.')(() => (
      <Image
        bordered={boolean('Bordered', false)}
        shadowed={boolean('Shadowed', true)}
        src={text('src', 'http://placekitten.com/g/300/300')}
        alt={text('alt', 'cat')}
      />),
    ),
  );
