import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Buttons', module)
  .add('Base button', () => (
    <Button value="Base button 😶" />
  ))
  .add('Neutral button', () => (
    <Button value="Neutral button 😐" modifier="neutral" />
  ))
  .add('Brand button', () => (
    <Button value="Brand button 💥" modifier="brand" />
  ))
  .add('Negative button', () => (
    <Button value="Negative button 😡" modifier="negative" />
  ))
  .add('Positive button', () => (
    <Button value="Positive button 😁" modifier="positive" />
  ));
