import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import DividerList from './DividerList';
import DividerListItem from './DividerListItem';

storiesOf('Divider List', module)
  .add('Two Children',
    withInfo('A DividerList component is used to separate related content items. The size of each divider is determined by the equation 12 / # of DividerListItems (12 / 2 = col-6).')(() => (
      <DividerList>
        <DividerListItem>
          <h2>Lorem ipsum</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, labore at suscipit
          necessitatibus cumque commodi velit.
          </p>
        </DividerListItem>
        <DividerListItem>
          <h2>Cumque commodi</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, labore at suscipit
            necessitatibus cumque commodi velit.
          </p>
        </DividerListItem>
      </DividerList>),
    ),
  )

  .add('Three Children',
    withInfo('A DividerList component is used to separate related content items. The size of each divider is determined by the equation 12 / # of DividerListItems (12 / 3 = col-4).')(() => (
      <DividerList>
        <DividerListItem>
          <h2>Lorem ipsum</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, labore at suscipit
          necessitatibus cumque commodi velit.
          </p>
        </DividerListItem>
        <DividerListItem>
          <h2>Dolor sit</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, labore at suscipit
            necessitatibus cumque commodi velit. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Quasi, labore at suscipit necessitatibus cumque commodi velit. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Quasi, labore at suscipit necessitatibus cumque
            commodi velit.
          </p>
        </DividerListItem>
        <DividerListItem>
          <h2>Cumque commodi</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, labore at suscipit
            necessitatibus cumque commodi velit.
          </p>
        </DividerListItem>
      </DividerList>),
    ),
  )

  .add('Four Children',
    withInfo('A DividerList component is used to separate related content items. The size of each divider is determined by the equation 12 / # of DividerListItems (12 / 4 = col-3).')(() => (
      <DividerList>
        <DividerListItem>
          <h2>Lorem ipsum</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, labore at suscipit
            necessitatibus cumque commodi velit.
          </p>
        </DividerListItem>
        <DividerListItem>
          <h2>Dolor sit</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, labore at suscipit
            necessitatibus cumque commodi velit. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Quasi, labore at suscipit necessitatibus cumque commodi velit. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Quasi, labore at suscipit necessitatibus cumque
            commodi velit.
          </p>
        </DividerListItem>
        <DividerListItem>
          <h2>Cumque commodi</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, labore at suscipit
            necessitatibus cumque commodi velit.
          </p>
        </DividerListItem>
        <DividerListItem>
          <h2>Sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </DividerListItem>
      </DividerList>),
    ),
  );
