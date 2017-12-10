import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

storiesOf('Buttons', module).addDecorator(withKnobs)
  .add('Base',
    withInfo('A base button is usually used alongside a neutral button. Precedence for button type is: base < neutral < brand < negative < positive.')(() => (
      <Button
        neutral={boolean('Neutral', false)}
        brand={boolean('Brand', false)}
        negative={boolean('Negative', false)}
        positive={boolean('Positive', false)}
        inline={boolean('Inline', false)}
        disabled={boolean('Disabled', false)}
        value={text('Value', 'Base button 😶')}
      />),
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
        value={text('Value', 'Disabled button')}
      />),
    ),
  );
