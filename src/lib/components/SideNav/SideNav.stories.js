import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Link from '../Link/Link';
import List from '../List/List';
import ListItem from '../List/ListItem';
import SideNav from './SideNav';
import SideNavBanner from './SideNavBanner';
import SideNavGroup from './SideNavGroup';
import SideNavLink from './SideNavLink';

const options = {
  range: true,
  min: 3,
  max: 12,
  step: 1,
};

storiesOf('SideNav', module)
  .add('Text Banner',
    withInfo('The SideNav component allows for navigation from a collapsing menu on the side of the page. It requires a SideNavBanner which contains a title/logo, optional tagline, and a space for the small screen burger menu. SideNavLinks can be placed directly inside SideNav, or inside a SideNavGroup to keep them under section titles. This example will expand to fill the space available to it so it needs to be used in conjunction with the grid to set the layout.')(() => (
      <div className={`col-${number('Column size', 12, options)}`}>
        <SideNav>
          <SideNavBanner
            href="#"
            tagline={text('Tagline', 'Lorem ipsum')}
            title={text('Title', 'Vanilla')}
          />
          <SideNavGroup label="Section title 1">
            <SideNavLink href="#" label="Second level 1" />
            <SideNavLink href="#" label="Second level 2" />
            <SideNavGroup label="Second level 3">
              <SideNavLink href="#" label="Third level 1" />
              <SideNavLink href="#" label="Third level 2" />
              <SideNavLink href="#" label="Third level 3" />
              <SideNavLink href="#" label="Third level 4" />
              <SideNavLink href="#" label="Third level 5" />
            </SideNavGroup>
            <SideNavLink href="#" label="Second level 4" />
            <SideNavLink href="#" label="Second level 5" />
          </SideNavGroup>
          <SideNavGroup label="Section title 2">
            <SideNavLink href="#" label="Second level 1" />
            <SideNavLink href="#" label="Second level 2" />
            <SideNavGroup label="Second level 3">
              <SideNavLink href="#" label="Third level 1" />
              <SideNavLink href="#" label="Third level 2" />
              <SideNavLink href="#" label="Third level 3" />
              <SideNavLink href="#" label="Third level 4" />
              <SideNavLink href="#" label="Third level 5" />
            </SideNavGroup>
            <SideNavLink href="#" label="Second level 4" />
            <SideNavLink href="#" label="Second level 5" />
          </SideNavGroup>
          <SideNavGroup label="Section title 3">
            <SideNavLink href="#" label="Second level 1" />
            <SideNavLink href="#" label="Second level 2" />
            <SideNavGroup label="Second level 3">
              <SideNavLink href="#" label="Third level 1" />
              <SideNavLink href="#" label="Third level 2" />
              <SideNavLink href="#" label="Third level 3" />
              <SideNavLink href="#" label="Third level 4" />
              <SideNavLink href="#" label="Third level 5" />
            </SideNavGroup>
            <SideNavLink href="#" label="Second level 4" />
            <SideNavLink href="#" label="Second level 5" />
          </SideNavGroup>
          <SideNavLink href="#" label="First level 1" />
          <hr />
          <List>
            <ListItem>
              <Link external className="sidebar__link" href="#a">Supplementary link 1</Link>
            </ListItem>
            <ListItem>
              <Link external className="sidebar__link" href="#a">Supplementary link 2</Link>
            </ListItem>
          </List>
        </SideNav>
      </div>),
    ),
  )

  .add('Logo Banner',
    withInfo('A logo object prop can also be passed to SideNavBanner, which will replace a simple text banner.')(() => (
      <div className={`col-${number('Column size', 12, options)}`}>
        <SideNav>
          <SideNavBanner
            href="#"
            logo={{
              src: text('Logo src', 'https://assets.ubuntu.com/v1/d96d86b5-vanilla_black-orange_hex.svg'),
              alt: '',
            }}
            tagline={text('Tagline', 'Documentation')}
          />
          <SideNavGroup label="Basics">
            <SideNavLink href="#" label="Color" />
            <SideNavLink href="#" label="Font" />
            <SideNavLink href="#" label="Reset" />
            <SideNavLink href="#" label="Spacing" />
          </SideNavGroup>
          <SideNavGroup label="Global layout">
            <SideNavLink href="#" label="Breakpoints" />
            <SideNavLink href="#" label="Grid" />
            <SideNavLink href="#" label="Strip" />
            <SideNavLink href="#" label="Structure" />
          </SideNavGroup>
          <SideNavGroup label="One-off layout">
            <SideNavLink href="#" label="Alignment" />
            <SideNavLink href="#" label="Clearfix" />
            <SideNavLink href="#" label="Equal height" />
            <SideNavLink href="#" label="Floats" />
            <SideNavLink href="#" label="Hide" />
            <SideNavLink href="#" label="Image position" />
            <SideNavLink href="#" label="Margin collapse" />
            <SideNavLink href="#" label="Off-screen elements" />
            <SideNavLink href="#" label="Padding collapse" />
            <SideNavLink href="#" label="Show" />
            <SideNavLink href="#" label="Vertically center" />
          </SideNavGroup>
          <SideNavGroup label="Navigation">
            <SideNavLink href="#" label="Accordion" />
            <SideNavLink href="#" label="Aside" />
            <SideNavLink href="#" label="Breadcrumbs" />
            <SideNavLink href="#" label="Contextual menu" />
            <SideNavLink href="#" label="Footer" />
            <SideNavLink href="#" label="Global navigation" />
            <SideNavLink href="#" label="Pagination" />
            <SideNavLink href="#" label="Tabs" />
          </SideNavGroup>
          <SideNavGroup label="Page structure">
            <SideNavLink href="#" label="Cards" />
            <SideNavLink href="#" label="Divider list" />
            <SideNavLink href="#" label="Heading icon" />
            <SideNavLink href="#" label="Images" />
            <SideNavLink href="#" label="Inline images" />
            <SideNavLink href="#" label="Lists" />
            <SideNavLink href="#" label="Matrix" />
            <SideNavLink href="#" label="Media object" />
            <SideNavLink href="#" label="Muted heading" />
          </SideNavGroup>
          <SideNavGroup label="Text">
            <SideNavLink href="#" label="Code" />
            <SideNavLink href="#" label="Code numbered" />
            <SideNavLink href="#" label="Code snippet" />
            <SideNavLink href="#" label="Typography" />
            <SideNavLink href="#" label="Quotes" />
          </SideNavGroup>
          <SideNavGroup label="Interactive elements">
            <SideNavLink href="#" label="Buttons" />
            <SideNavLink href="#" label="Forms" />
            <SideNavLink href="#" label="Form layout" />
            <SideNavLink href="#" label="Form validation" />
            <SideNavLink href="#" label="Links" />
            <SideNavLink href="#" label="List tree" />
            <SideNavLink href="#" label="Modal" />
            <SideNavLink href="#" label="Notifications" />
            <SideNavLink href="#" label="Search box" />
            <SideNavLink href="#" label="Slider" />
            <SideNavLink href="#" label="Switch" />
            <SideNavLink href="#" label="Table" />
            <SideNavLink href="#" label="Table sortable" />
            <SideNavLink href="#" label="Table expanding" />
            <SideNavLink href="#" label="Table mobile card" />
            <SideNavLink href="#" label="Tooltips" />
          </SideNavGroup>
          <SideNavGroup label="Media">
            <SideNavLink href="#" label="Animations" />
            <SideNavLink href="#" label="Assets" />
            <SideNavLink href="#" label="Embedded media" />
            <SideNavLink href="#" label="Icons" />
            <SideNavLink href="#" label="Spin" />
          </SideNavGroup>
          <hr />
          <List>
            <ListItem>
              <Link external className="sidebar__link" href="https://vanillaframework.io">vanillaframework.io</Link>
            </ListItem>
          </List>
        </SideNav>
      </div>),
    ),
  );
