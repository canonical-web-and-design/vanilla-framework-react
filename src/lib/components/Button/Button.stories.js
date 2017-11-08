import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Button from './Button';

storiesOf('Buttons', module)
  .add('Base',
    withInfo('A base button is usually used alongside a neutral button.')(() =>
      <Button value="Base button 😶" />,
    ),
  )
  .add('Neutral',
    withInfo('A neutral button can be used to indicate a positive action that isn\'t necessarily the main call-to-action.')(() =>
      <Button value="Neutral button 😐" modifier="neutral" />,
    ),
  )
  .add('Brand',
    withInfo('You can use the brand button with the main color of your brand.')(() =>
      <Button value="Brand button 💥" modifier="brand" />,
    ),
  )
  .add('Negative',
    withInfo('A negative button can be used to indicate a negative action that is destructive or permanent.')(() =>
      <Button value="Negative button 😡" modifier="negative" />,
    ),
  )
  .add('Positive',
    withInfo('A positive button can be used to indicate a positive action that is the main call-to-action.')(() =>
      <Button value="Positive button 😁" modifier="positive" />,
    ),
  );
