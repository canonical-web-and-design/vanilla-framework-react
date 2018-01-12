import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

storiesOf('Buttons', module)
  .add('Base',
    withInfo('Buttons will accept children or a value prop for the inner text. A base button is usually used alongside a neutral button.')(() => (
      <Button
        neutral={boolean('Neutral', false)}
        brand={boolean('Brand', false)}
        negative={boolean('Negative', false)}
        positive={boolean('Positive', false)}
        inline={boolean('Inline', false)}
        disabled={boolean('Disabled', false)}
        href={text('href', null)}
      >
        {text('Value', 'Base button 😶')}
      </Button>),
    ),
  )
  .add('Link',
    withInfo('If an href prop is provided, the Button will be rendered as an anchor tag with button styling.')(() => (
      <Button
        neutral={boolean('Neutral', false)}
        brand={boolean('Brand', false)}
        negative={boolean('Negative', false)}
        positive={boolean('Positive', false)}
        inline={boolean('Inline', false)}
        disabled={boolean('Disabled', false)}
        href={text('href', 'https://vanilla-framework.github.io/vanilla-framework-react/')}
      >
        {text('Value', 'Link button')}
      </Button>),
    ),
  )
  .add('Neutral',
    withInfo('A neutral button can be used to indicate a positive action that isn\'t necessarily the main call-to-action.')(() => (
      <Button
        neutral={boolean('Neutral', true)}
        brand={boolean('Brand', false)}
        negative={boolean('Negative', false)}
        positive={boolean('Positive', false)}
        inline={boolean('Inline', false)}
        disabled={boolean('Disabled', false)}
        href={text('href', null)}
        value={text('Value', 'Neutral button 😐')}
      />),
    ),
  )
  .add('Brand',
    withInfo('You can use the brand button with the main color of your brand.')(() => (
      <Button
        neutral={boolean('Neutral', false)}
        brand={boolean('Brand', true)}
        negative={boolean('Negative', false)}
        positive={boolean('Positive', false)}
        inline={boolean('Inline', false)}
        disabled={boolean('Disabled', false)}
        href={text('href', null)}
        value={text('Value', 'Brand button 💥')}
      />),
    ),
  )
  .add('Negative',
    withInfo('A negative button can be used to indicate a negative action that is destructive or permanent.')(() => (
      <Button
        neutral={boolean('Neutral', false)}
        brand={boolean('Brand', false)}
        negative={boolean('Negative', true)}
        positive={boolean('Positive', false)}
        inline={boolean('Inline', false)}
        disabled={boolean('Disabled', false)}
        href={text('href', null)}
        value={text('Value', 'Negative button 😡')}
      />),
    ),
  )
  .add('Positive',
    withInfo('A positive button can be used to indicate a positive action that is the main call-to-action.')(() => (
      <Button
        neutral={boolean('Neutral', false)}
        brand={boolean('Brand', false)}
        negative={boolean('Negative', false)}
        positive={boolean('Positive', true)}
        inline={boolean('Inline', false)}
        disabled={boolean('Disabled', false)}
        href={text('href', null)}
        value={text('Value', 'Positive button 😁')}
      />),
    ),
  )
  .add('Inline',
    withInfo('Should you wish to place a button after a line of inline text, as a CTA for example, you can do so by adding the prop "inline" to the Button component.')(() => (
      <p>
        This button is inline: <Button
          neutral={boolean('Neutral', true)}
          brand={boolean('Brand', false)}
          negative={boolean('Negative', false)}
          positive={boolean('Positive', false)}
          inline={boolean('Inline', true)}
          disabled={boolean('Disabled', false)}
          href={text('href', null)}
          value={text('Value', 'Inline button')}
        />
      </p>),
    ),
  )
  .add('Disabled',
    withInfo('You can disable a button by adding the "disabled" prop.')(() => (
      <Button
        neutral={boolean('Neutral', false)}
        brand={boolean('Brand', false)}
        negative={boolean('Negative', false)}
        positive={boolean('Positive', false)}
        inline={boolean('Inline', false)}
        disabled={boolean('Disabled', true)}
        href={text('href', null)}
        value={text('Value', 'Disabled button')}
      />),
    ),
  )
  .add('Function',
    withInfo('Custom functions are passed to the Button component via the onClick prop')(() => (
      <Button
        neutral={boolean('Neutral', false)}
        brand={boolean('Brand', false)}
        negative={boolean('Negative', false)}
        positive={boolean('Positive', true)}
        inline={boolean('Inline', false)}
        disabled={boolean('Disabled', false)}
        href={text('href', null)}
        onClick={() => alert('You clicked a button!')} // eslint-disable-line no-alert
      >
        {text('Value', 'Click me!')}
      </Button>),
    ),
  );
