import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Slider from './Slider';

storiesOf('Slider', module)
  .add('Default',
    withInfo('The <Slider> component allows a user to select from a specified range of values, where the precise value is not considered important.')(() => (
      <Slider
        value={number('Value', 0)}
        max={number('Max', 100)}
        min={number('Min', 0)}
        step={number('Step', 1)}
        showValue={boolean('Show value', false)}
        disabled={boolean('Disabled', false)}
      />),
    ),
  )

  .add('With Value',
    withInfo('When the "showValue" prop is added to <Slider> an editable input will display, showing a numeric representation of the slider value.')(() => (
      <Slider
        max={number('Max', 100)}
        min={number('Min', 0)}
        step={number('Step', 1)}
        showValue={boolean('Show value', true)}
        disabled={boolean('Disabled', false)}
      />),
    ),
  );
