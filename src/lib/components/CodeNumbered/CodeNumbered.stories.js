import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import CodeNumbered from './CodeNumbered';

storiesOf('Code Numbered', module)
  .add('Default',
    withInfo('The code numbered pattern can be used when displaying large blocks of code to enable users to quickly reference a specific line.')(() =>
      <CodeNumbered lines={[
        "this is a code sample line 1",
        "this is another code sample line 2 this is another code sample line 2 this is another code sample line 2",
        "this is the last code sample 3, and everyone knows this is the best code sample"
      ]} />,
    ),
  );
