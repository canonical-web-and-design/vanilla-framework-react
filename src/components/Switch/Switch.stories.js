import React from 'react';
import { storiesOf } from '@storybook/react';

import Switch from './Switch';

storiesOf('Switch', module)
  .add('Default', () => (
    <Switch label="On/Off" />
  ));
