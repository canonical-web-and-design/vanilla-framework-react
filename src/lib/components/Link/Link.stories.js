import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Link from './Link';

storiesOf('Link', module)
  .add('Default',
    withInfo('The default Link component.')(() => (
      <Link
        external={boolean('External', false)}
        soft={boolean('Soft', false)}
        strong={boolean('Strong', false)}
        inverted={boolean('Inverted', false)}
        top={boolean('Back-to-top', false)}
        href={text('href', 'https://vanilla-framework.github.io/vanilla-framework-react/')}
      >
        {text('Text', 'Default Link')}
      </Link>),
    ),
  )

  .add('External',
    withInfo('The "external" modifier should be used on Link components that go to a different domain than the current one. ')(() => (
      <Link
        external={boolean('External', true)}
        soft={boolean('Soft', false)}
        strong={boolean('Strong', false)}
        inverted={boolean('Inverted', false)}
        top={boolean('Back-to-top', false)}
        href={text('href', 'https://vanilla-framework.github.io/vanilla-framework-react/')}
      >
        {text('Text', 'External Link')}
      </Link>),
    ),
  )

  .add('Soft',
    withInfo('The "soft" modifier should be used on Link components where many links are grouped together, such as a link cloud.')(() => (
      <Link
        external={boolean('External', false)}
        soft={boolean('Soft', true)}
        strong={boolean('Strong', false)}
        inverted={boolean('Inverted', false)}
        top={boolean('Back-to-top', false)}
        href={text('href', 'https://vanilla-framework.github.io/vanilla-framework-react/')}
      >
        {text('Text', 'Soft Link')}
      </Link>),
    ),
  )

  .add('Strong',
    withInfo('The "strong" modifier should be used on Link components that require emphasis or on a dark background.')(() => (
      <Link
        external={boolean('External', false)}
        soft={boolean('Soft', false)}
        strong={boolean('Strong', true)}
        inverted={boolean('Inverted', false)}
        top={boolean('Back-to-top', false)}
        href={text('href', 'https://vanilla-framework.github.io/vanilla-framework-react/')}
      >
        {text('Text', 'Strong Link')}
      </Link>),
    ),
  )

  .add('Inverted',
    withInfo('The "inverted" modifier should be used where Link components are placed on a dark background.')(() => (
      <div style={{ backgroundColor: '#333' }}>
        <Link
          external={boolean('External', false)}
          soft={boolean('Soft', false)}
          strong={boolean('Strong', false)}
          inverted={boolean('Inverted', true)}
          top={boolean('Back-to-top', false)}
          href={text('href', 'https://vanilla-framework.github.io/vanilla-framework-react/')}
        >
          {text('Text', 'Inverted Link')}
        </Link>
      </div>),
    ),
  )

  .add('Back to top',
    withInfo('The "top" prop can be used to make it easier to go back to the top on long pages. If the page is divided into different sections, you can use more than one per page.')(() => (
      <Link
        external={boolean('External', false)}
        soft={boolean('Soft', false)}
        strong={boolean('Strong', false)}
        inverted={boolean('Inverted', false)}
        top={boolean('Back-to-top', true)}
        href={text('href', 'https://vanilla-framework.github.io/vanilla-framework-react/')}
      >
        {text('Text', 'Back to top')}
      </Link>),
    ),
  );
