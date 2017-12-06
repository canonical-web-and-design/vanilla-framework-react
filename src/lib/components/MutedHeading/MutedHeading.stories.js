import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import MutedHeading from './MutedHeading';

storiesOf('Muted Heading', module)
  .add('Default',
    withInfo('The MutedHeading component can be used to introduce a collection of icons or images.')(() => (
      <MutedHeading>Muted heading</MutedHeading>),
    ),
  );
