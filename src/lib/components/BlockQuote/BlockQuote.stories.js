import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import BlockQuote from './BlockQuote';

storiesOf('Block Quote', module).addDecorator(withKnobs)
  .add('Default',
    withInfo('Basic blockquotes and citations.')(() => (
      <BlockQuote
        pull={boolean('Pull Quote', false)}
        quote={text('Quote', "Ubuntu is an ancient African word meaning 'humanity to others'. Ubuntu is an ancient African word meaning 'humanity to others'.")}
        citation={text('Citation', 'Canonical')}
      />),
    ),
  )

  .add('Pull Quote',
    withInfo('Use the pull quote pattern to highlight content from different sources in a visually prominent way.')(() => (
      <BlockQuote
        pull={boolean('Pull Quote', true)}
        quote={text('Quote', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam')}
        citation={text('Citation', 'A. N. Author')}
      />),
    ),
  );
