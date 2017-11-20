import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Image from './Image';

storiesOf('Image', module)
  .add('Default',
    withInfo('Default Image component.')(() => (
      <Image src="http://placekitten.com/g/300/300" alt="" />),
    ),
  )
  .add('Bordered',
    withInfo('Bordered Image component.')(() => (
      <Image bordered src="http://placekitten.com/g/300/300" alt="" />),
    ),
  )
  .add('Shadowed',
    withInfo('Image component with drop-shadow.')(() => (
      <Image shadowed src="http://placekitten.com/g/300/300" alt="" />),
    ),
  )
  .add('Bordered and shadowed',
    withInfo('Image component with both border and drop-shadow.')(() => (
      <Image bordered shadowed src="http://placekitten.com/g/300/300" alt="" />),
    ),
  );
