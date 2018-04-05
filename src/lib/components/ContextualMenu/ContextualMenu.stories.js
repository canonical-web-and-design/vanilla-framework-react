import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import ContextualMenu from './ContextualMenu';
import ContextualMenuDropdown from './ContextualMenuDropdown';
import ContextualMenuGroup from './ContextualMenuGroup';
import Button from '../Button/Button';
import Link from '../Link/Link';

storiesOf('ContextualMenu', module)
  .add('Default',
    withInfo('A ContextualMenu component can be wrapped around any component (button, link, navigation item etc.) to give it a secondary dropdown menu on click. One of the children must be a ContextualMenuDropdown that contains the links (or other elements) you would like to display. ContextualMenus must be given an "id" prop so the dropdown knows where in the DOM to appear, and it also accepts a "position" prop to determine which side of the element appears (default "right").')(() => (
      <div style={{ paddingLeft: '5rem' }}>
        <ContextualMenu id="menu" position={select('Position', [undefined, 'left', 'center'], undefined)}>
          <Button neutral>Menu</Button>
          <ContextualMenuDropdown>
            <Link href="#a">Link 1</Link>
            <Link href="#a">Link 2</Link>
            <Link href="#a">Link 3</Link>
          </ContextualMenuDropdown>
        </ContextualMenu>
      </div>),
    ),
  )

  .add('Groups',
    withInfo('Dropdown links can be grouped when placed inside a ContextualMenuGroup component, which separates groups by a dividing line.')(() => (
      <div style={{ paddingLeft: '5rem' }}>
        <ContextualMenu id="menu" position={select('Position', [undefined, 'left', 'center'], undefined)}>
          <Button neutral>Groups</Button>
          <ContextualMenuDropdown>
            <ContextualMenuGroup>
              <Link href="#a">Link 1</Link>
              <Link href="#a">Link 2</Link>
            </ContextualMenuGroup>
            <ContextualMenuGroup>
              <Link href="#a">Link 3</Link>
              <Link href="#a">Link 4</Link>
            </ContextualMenuGroup>
          </ContextualMenuDropdown>
        </ContextualMenu>
      </div>),
    ),
  )

  .add('Link',
    withInfo('ContextualMenus can be applied to any element, including links within paragraph text.')(() => (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi natus atque eligendi
        deleniti hic, dolores veritatis reiciendis officiis illo, facere facilis accusamus
        similique nulla nesciunt.&nbsp;
        <ContextualMenu id="menu" position={select('Position', [undefined, 'left', 'center'], undefined)}>
          <Link href="#a" onClick={() => null}>Nemo</Link>
          <ContextualMenuDropdown>
            <ContextualMenuGroup>
              <Link href="#a">Learn more</Link>
              <Link href="#a">Learn more</Link>
            </ContextualMenuGroup>
            <ContextualMenuGroup>
              <Link href="#a">Home</Link>
            </ContextualMenuGroup>
          </ContextualMenuDropdown>
        </ContextualMenu>
        &nbsp;reprehenderit officia assumenda error enim. Recusandae
        reiciendis ipsum, mollitia illo iusto excepturi alias dolore fugit eligendi nostrum, unde
        architecto consequuntur similique quo! Maxime iusto facere, commodi iste fuga officiis.
      </p>),
    ),
  );
