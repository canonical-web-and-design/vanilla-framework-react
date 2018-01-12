import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import CodeBlock from './CodeBlock';

storiesOf('Code Block', module)
  .add('Default',
    withInfo('The Code Block component is used to display a large amount of code. The preferred prop is a single template literal, to preserve formatting. Alternatively, markup can be used but will be formatted automatically. When you refer to code inline with other text, use the <code> tag instead.')(() => (
      <CodeBlock numbered={boolean('Numbered', false)}>
        {`this is code sample line 1
            this is code sample line 2
              this is code sample line 3

          this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4
          this is code sample line 5`}
      </CodeBlock>),
    ),
  ).add('Numbered',
    withInfo('The code numbered pattern can be used when displaying large blocks of code to enable users to quickly reference a specific line.')(() => (
      <CodeBlock numbered={boolean('Numbered', true)}>
        {`this is code sample line 1
            this is code sample line 2
              this is code sample line 3

          this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4 this is code sample line 4
          this is code sample line 5`}
      </CodeBlock>),
    ),
  );
