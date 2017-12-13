import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import HeadingIcon from './HeadingIcon';

storiesOf('Heading Icon', module).addDecorator(withKnobs)
  .add('Default',
    withInfo('The HeadingIcon component can be used to add an icon to a standard header.')(() => (
      <HeadingIcon
        title={text('Title', 'Lorem ipsum dolor')}
        alt="Lorem ipsum dolor"
        src={text('Image Source', 'https://assets.ubuntu.com/v1/a4d31b28-icon-quote.svg')}
      />),
    ),
  )

  .add('With Children',
    withInfo('The HeadingIcon component can be used to add an icon to a standard header.')(() => (
      <HeadingIcon
        title={text('Title', 'Lorem ipsum dolor')}
        alt="Lorem ipsum dolor"
        src={text('Image Source', 'https://assets.ubuntu.com/v1/a4d31b28-icon-quote.svg')}
      >
        <p>
          {text('Text', 'Sit amet, consectetur adipisicing elit. Enim excepturi, repudiandae blanditiis odio perferendis voluptatibus dolorum, dicta illum quae ipsa voluptatum, sunt quasi? Nulla reiciendis magnam nostrum aliquam, beatae doloribus.')}
        </p>
      </HeadingIcon>),
    ),
  );
