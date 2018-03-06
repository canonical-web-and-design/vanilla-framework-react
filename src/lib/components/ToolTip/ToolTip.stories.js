import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ToolTip from './ToolTip';

storiesOf('ToolTip', module)
  .add('Bottom left tooltip',
    withInfo('Use this tooltip when you want the message to appear at bottom left')(() => (
      <ToolTip id="default-tooltip" message="Lorem ipsum dolor sit amet">
        Bottom left tooltip
      </ToolTip>
    ),
    ),
  )
  .add('Bottom center tooltip',
    withInfo('Use this tooltip when you want the message to appear at bottom center')(() => (
      <ToolTip id="btm-cntr" message="Lorem ipsum dolor sit amet" position="btm-center">
        Bottom center tooltip
      </ToolTip>
    ),
    ),
  )
  .add('Bottom right tooltip',
    withInfo('Use this tooltip when you want the message to appear at bottom right')(() => (
      <ToolTip id="btm-right" message="Lorem ipsum dolor sit amet" position="btm-right">
        Bottom right tooltip
      </ToolTip>
    ),
    ),
  )
  .add('Left tooltip',
    withInfo('Use this tooltip when you want the message to appear to the left')(() => (
      <ToolTip id="left" message="Lorem ipsum dolor sit amet" position="left">
        Left tooltip
      </ToolTip>
    ),
    ),
  )
  .add('Right tooltip',
    withInfo('Use this tooltip when you want the message to appear to the right')(() => (
      <ToolTip id="right" message="Lorem ipsum dolor sit amet" position="right">
        Right tooltip
      </ToolTip>
    ),
    ),
  )
  .add('Top left tooltip',
    withInfo('Use this tooltip when you want the message to appear at top left')(() => (
      <ToolTip id="to-lft" message="Lorem ipsum dolor sit amet" position="top-left">
        Top left tooltip
      </ToolTip>
    ),
    ),
  )
  .add('Top center tooltip',
    withInfo('Use this tooltip when you want the message to appear at top center')(() => (
      <ToolTip id="tp-cntr" message="Lorem ipsum dolor sit amet" position="top-center">
        Top center tooltip
      </ToolTip>
    ),
    ),
  )
  .add('Top right tooltip',
    withInfo('Use this tooltip when you want the message to appear at top right')(() => (
      <ToolTip id="tp-right" message="Lorem ipsum dolor sit amet" position="top-right">
        Top right tooltip
      </ToolTip>
    ),
    ),
  );
