import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import MutedHeading from './MutedHeading';

storiesOf('Muted Heading', module).addDecorator(withKnobs)
  .add('Default',
    withInfo('The MutedHeading component can be used to introduce a collection of icons or images.')(() => (
      <MutedHeading>{text('Text', 'Muted heading')}</MutedHeading>),
    ),
  );
