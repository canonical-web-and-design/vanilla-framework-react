import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import BlockQuote from './BlockQuote';

storiesOf('Block Quote', module)
  .add('Default',
    withInfo('Basic blockquotes and citations.')(() => (
      <BlockQuote
        quote="Ubuntu is an ancient African word meaning 'humanity to others'.
        Ubuntu is an ancient African word meaning 'humanity to others'."
        citation="Canonical"
      />),
    ),
  )

  .add('Pull Quote',
    withInfo('Use the pull quote pattern to highlight content from different sources in a visually prominent way.')(() => (
      <BlockQuote
        pull
        quote="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        citation="A. N. Author"
      />),
    ),
  );
