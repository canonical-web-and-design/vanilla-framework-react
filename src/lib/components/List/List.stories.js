import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import List from './List';
import ListItem from './ListItem';

const modifiers = [null, 'divided', 'inline', 'middot', 'split'];

storiesOf('List', module)
  .add('Default',
    withInfo('If you want to display lists in a way that is more visually distinctive than the standard <ol> and <ul>, Vanilla has 7 list styles at your disposal.')(() => (
      <List modifier={select('Modifier', modifiers, null)}>
        <ListItem ticked={boolean('Ticked1', false)}>{text('Text1', 'Lorem')}</ListItem>
        <ListItem ticked={boolean('Ticked2', false)}>{text('Text2', 'Ipsum')}</ListItem>
        <ListItem ticked={boolean('Ticked3', false)}>{text('Text3', 'Dolor')}</ListItem>
      </List>),
    ),
  )

  .add('Ticked',
    withInfo('Add the prop "ticked" to each list item to display tick icons.')(() => (
      <List modifier={select('Modifier', modifiers, null)}>
        <ListItem ticked={boolean('Ticked1', true)}>{text('Text1', 'Lorem')}</ListItem>
        <ListItem ticked={boolean('Ticked2', true)}>{text('Text2', 'Ipsum')}</ListItem>
        <ListItem ticked={boolean('Ticked3', true)}>{text('Text3', 'Dolor')}</ListItem>
      </List>),
    ),
  )

  .add('Divided',
    withInfo('Use the prop "divided" to add horizontal lines between the items.')(() => (
      <List modifier={select('Modifier', modifiers, 'divided')}>
        <ListItem ticked={boolean('Ticked1', false)}>{text('Text1', 'Lorem')}</ListItem>
        <ListItem ticked={boolean('Ticked2', false)}>{text('Text2', 'Ipsum')}</ListItem>
        <ListItem ticked={boolean('Ticked3', false)}>{text('Text3', 'Dolor')}</ListItem>
      </List>),
    ),
  )

  .add('Inline List',
    withInfo('Apply the modifier "inline" to display all the list items in one line.')(() => (
      <List modifier={select('Modifier', modifiers, 'inline')}>
        <ListItem ticked={boolean('Ticked1', false)}>{text('Text1', 'Lorem')}</ListItem>
        <ListItem ticked={boolean('Ticked2', false)}>{text('Text2', 'Ipsum')}</ListItem>
        <ListItem ticked={boolean('Ticked3', false)}>{text('Text3', 'Dolor')}</ListItem>
      </List>),
    ),
  )

  .add('Middot-separated Inline List',
    withInfo('Apply the modifier "middot" to add a middot character between inline list items.')(() => (
      <List modifier={select('Modifier', modifiers, 'middot')}>
        <ListItem ticked={boolean('Ticked1', false)}>{text('Text1', 'Lorem')}</ListItem>
        <ListItem ticked={boolean('Ticked2', false)}>{text('Text2', 'Ipsum')}</ListItem>
        <ListItem ticked={boolean('Ticked3', false)}>{text('Text3', 'Dolor')}</ListItem>
      </List>),
    ),
  )

  .add('Split List',
    withInfo('If you wish to split the items in a list into two columns above $breakpoint-medium, you can do so by adding the modifier "split" to the List component.')(() => (
      <List modifier={select('Modifier', modifiers, 'split')}>
        <ListItem ticked={boolean('Ticked1', false)}>{text('Text1', 'Lorem.')}</ListItem>
        <ListItem ticked={boolean('Ticked2', false)}>{text('Text2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec ipsum augue. Ut arcu erat, lacinia sit ametjusto quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}</ListItem>
        <ListItem ticked={boolean('Ticked3', false)}>{text('Text3', 'Ipsum.')}</ListItem>
        <ListItem ticked={boolean('Ticked4', false)}>{text('Text4', 'Aenean nec ipsum augue. Ut arcu erat, lacinia sit amet justo quis.')}</ListItem>
        <ListItem ticked={boolean('Ticked5', false)}>{text('Text5', 'Dolor.')}</ListItem>
        <ListItem ticked={boolean('Ticked6', false)}>{text('Text6', 'Ut arcu erat, lacinia sit amet justo quis.')}</ListItem>
      </List>),
    ),
  );
