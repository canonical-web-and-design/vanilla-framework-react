import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

storiesOf('Buttons', module)
  .add('Base',
    withInfo('A base button is usually used alongside a neutral button. Precedence for button type is: base < neutral < brand < negative < positive.')(() =>
      <Button value="Base button 😶" />,
    ),
  )
  .add('Neutral',
    withInfo('A neutral button can be used to indicate a positive action that isn\'t necessarily the main call-to-action.')(() =>
      <Button neutral value="Neutral button 😐" />,
    ),
  )
  .add('Brand',
    withInfo('You can use the brand button with the main color of your brand.')(() =>
      <Button brand value="Brand button 💥" />,
    ),
  )
  .add('Negative',
    withInfo('A negative button can be used to indicate a negative action that is destructive or permanent.')(() =>
      <Button negative value="Negative button 😡" />,
    ),
  )
  .add('Positive',
    withInfo('A positive button can be used to indicate a positive action that is the main call-to-action.')(() =>
      <Button positive value="Positive button 😁" />,
    ),
  )
  .add('Inline',
    withInfo('Should you wish to place a button after a line of inline text, as a CTA for example, you can do so by adding the prop "inline" to the Button component.')(() => (
      <p>
        This is an inline button. <Button neutral inline value="Inline button" />
      </p>),
    ),
  )
  .add('Disabled',
    withInfo('You can disable a button by adding the "disabled" prop.')(() =>
      <Button disabled value="Disabled button" />,
    ),
  );
