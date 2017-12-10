import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import CodeSnippet from './CodeSnippet';

storiesOf('Code Snippet', module).addDecorator(withKnobs)
  .add('Default',
    withInfo('Code snippet should be used when presenting the user with a small snippet of code that they will likely want to copy and paste.')(() =>
      <CodeSnippet value={text('Value', 'sudo apt-get update')} />,
    ),
  );
