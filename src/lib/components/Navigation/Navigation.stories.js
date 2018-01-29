import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Navigation from './Navigation';
import NavigationBanner from './NavigationBanner';
import NavigationLink from './NavigationLink';

storiesOf('Navigation', module)
  .add('Text Banner',
    withInfo('The Navigation component can be added to the top of your sites. NavigationLink components are collapsed behind a "Menu" link in small screens and displayed horizontally on larger screens.')(() => (
      <Navigation>
        <NavigationBanner
          href="#"
          title={text('Title', 'Vanilla')}
        />
        <NavigationLink
          selected={boolean('Selected1', true)}
          href="#"
          label={text('Label1', 'Link1')}
        />
        <NavigationLink
          selected={boolean('Selected2', false)}
          href="#"
          label={text('Label2', 'Link2')}
        />
        <NavigationLink
          selected={boolean('Selected3', false)}
          href="#"
          label={text('Label3', 'Link3')}
        />
      </Navigation>),
    ),
  )

  .add('Logo Banner',
    withInfo('A logo object prop can also be passed to NavigationBanner, which will replace a simple text banner.')(() => (
      <Navigation>
        <NavigationBanner
          href="#"
          logo={{
            src: text('Logo src', 'https://assets.ubuntu.com/v1/d96d86b5-vanilla_black-orange_hex.svg'),
            alt: '',
          }}
        />
        <NavigationLink
          selected={boolean('Selected1', true)}
          href="#"
          label={text('Label1', 'Link1')}
        />
        <NavigationLink
          selected={boolean('Selected2', false)}
          href="#"
          label={text('Label2', 'Link2')}
        />
        <NavigationLink
          selected={boolean('Selected3', false)}
          href="#"
          label={text('Label3', 'Link3')}
        />
      </Navigation>),
    ),
  );
