import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean, text } from '@storybook/addon-knobs';

import Switch from './Switch';

storiesOf('Switch', module)
  .add('Default',
    withInfo('You can use this switch pattern to display on and off content, such as for settings or simple controls. By changing the aria-checked attribute from true or false will animate the switch on/off.')(() =>
      (<Switch
        id="switch"
        checked={boolean('Checked', false)}
        label={text('Label', 'Switch')}
      />),
    ),
  );
