import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Tabs from './Tabs';
import TabsItem from './TabsItem';

const options = {
  range: true,
  min: 0,
  max: 2,
  step: 1,
};

storiesOf('Tabs', module).addDecorator(withKnobs)
  .add('Default',
    withInfo('Use the Tabs component when there are multiple categories/views/panes of content, but there is the need to only show one pane at a time. Don’t use Tabs for pagination of content or cases involve viewing content, not navigating between groups of content.')(() => (
      <Tabs
        selected={number('Selected', 0, options)}
      >
        <TabsItem href={text('Tab1 href', null)}>
          { text('Tab1 text', 'Section 1') }
        </TabsItem>
        <TabsItem href={text('Tab2 href', null)}>
          { text('Tab2 text', 'Section 2') }
        </TabsItem>
        <TabsItem href={text('Tab3 href', null)}>
          { text('Tab3 text', 'Section 3') }
        </TabsItem>
      </Tabs>),
    ),
  )

  .add('Pre-selected',
    withInfo('You can pre-select a tab using the selected prop. Note that it\'s 0-indexed')(() => (
      <Tabs
        selected={number('Selected', 2, options)}
      >
        <TabsItem href={text('Tab1 href', null)}>
          { text('Tab1 text', 'Section 1') }
        </TabsItem>
        <TabsItem href={text('Tab2 href', null)}>
          { text('Tab2 text', 'Section 2') }
        </TabsItem>
        <TabsItem href={text('Tab3 href', null)}>
          { text('Tab3 text', 'Section 3') }
        </TabsItem>
      </Tabs>),
    ),
  );
