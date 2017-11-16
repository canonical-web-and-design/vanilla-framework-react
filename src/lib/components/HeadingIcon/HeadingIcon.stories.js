import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import HeadingIcon from './HeadingIcon';

storiesOf('Heading Icon', module)
  .add('Default',
    withInfo('The HeadingIcon component can be used to add an icon to a standard header.')(() => (
      <HeadingIcon
        title="Lorem ipsum dolor"
        alt="Lorem ipsum dolor"
        src="https://assets.ubuntu.com/v1/a4d31b28-icon-quote.svg"
      />),
    ),
  )

  .add('With Children',
    withInfo('The HeadingIcon component can be used to add an icon to a standard header.')(() => (
      <HeadingIcon
        title="Lorem ipsum dolor"
        alt="Lorem ipsum dolor"
        src="https://assets.ubuntu.com/v1/a4d31b28-icon-quote.svg"
      >
        <p>
          sit amet, consectetur adipisicing elit. Enim excepturi, repudiandae blanditiis odio
          perferendis voluptatibus dolorum, dicta illum quae ipsa voluptatum, sunt quasi? Nulla
          reiciendis magnam nostrum aliquam, beatae doloribus.
        </p>
      </HeadingIcon>),
    ),
  );
