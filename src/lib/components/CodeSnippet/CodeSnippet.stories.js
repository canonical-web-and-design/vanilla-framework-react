import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import CodeSnippet from './CodeSnippet';

storiesOf('Code Snippet', module)
  .add('Default',
    withInfo('Code snippet should be used when presenting the user with a small snippet of code that they will likely want to copy and paste.')(() =>
      <CodeSnippet value="sudo apt-get update" />,
    ),
  );
