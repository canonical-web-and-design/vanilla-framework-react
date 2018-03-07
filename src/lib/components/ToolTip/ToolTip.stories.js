import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import ToolTip from './ToolTip';

const label = 'Positions';
const options = [
  'left',
  'right',
  'top-left',
  'top-right',
  'btm-left',
  'btm-right',
  'top-center',
  'btm-center',
];
const defaultValue = 'btm-left';

storiesOf('ToolTip', module)
  .add('Default ToolTip',
    withInfo('You can set the position of the tooltip by passing a position prop')(() => (
      <ToolTip
        id="default-tooltip"
        message="Lorem ipsum dolor sit amet"
        position={select(label, options, defaultValue)}
      >
        Example ToolTip
      </ToolTip>),
    ),
  );
