import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Link from './Link';

storiesOf('Link', module)
  .add('Default',
    withInfo('The default Link component.')(() => (
      <Link href="https://vanilla-framework.github.io/vanilla-framework-react/">Default Link</Link>),
    ),
  )

  .add('External',
    withInfo('The "external" modifier should be used on Link components that go to a different domain than the current one. ')(() => (
      <Link modifier="external" href="https://vanillaframework.io/">External Link</Link>),
    ),
  )

  .add('Soft',
    withInfo('The "soft" modifier should be used on Link components where many links are grouped together, such as a link cloud.')(() => (
      <Link modifier="soft" href="https://vanilla-framework.github.io/vanilla-framework-react/">Soft Link</Link>),
    ),
  )

  .add('Strong',
    withInfo('The "strong" modifier should be used on Link components that require emphasis or on a dark background.')(() => (
      <Link modifier="strong" href="https://vanilla-framework.github.io/vanilla-framework-react/">Strong Link</Link>),
    ),
  )

  .add('Inverted',
    withInfo('The "inverted" modifier should be used where Link components are placed on a dark background.')(() => (
      <div style={{ backgroundColor: '#333' }}>
        <Link modifier="inverted" href="https://vanilla-framework.github.io/vanilla-framework-react/">Inverted Link</Link>
      </div>),
    ),
  )

  .add('Back to top',
    withInfo('The "top" prop can be used to make it easier to go back to the top on long pages. If the page is divided into different sections, you can use more than one per page.')(() => (
      <Link top href="https://vanilla-framework.github.io/vanilla-framework-react/">Back to top</Link>),
    ),
  )

  .add('Combination',
    withInfo('You can combine Link modifiers in the modifier prop, either space or comma-separated.')(() => (
      <div>
        <p><Link modifier="external strong" href="https://vanillaframework.io/">External/Strong Link</Link></p>
        <p><Link modifier="external, soft" href="https://vanillaframework.io/">External/Soft Link</Link></p>
        <p><Link top modifier="strong" href="https://vanilla-framework.github.io/vanilla-framework-react/">Strong/Back to top Link</Link></p>
      </div>),
    ),
  );
