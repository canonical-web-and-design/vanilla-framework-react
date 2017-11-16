import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import List from './List';
import ListItem from './ListItem';

storiesOf('List', module)
  .add('Default',
    withInfo('If you want to display lists in a way that is more visually distinctive than the standard <ol> and <ul>, Vanilla has 7 list styles at your disposal.')(() => (
      <List>
        <ListItem>Lorem</ListItem>
        <ListItem>Ipsum</ListItem>
        <ListItem>Dolor</ListItem>
      </List>),
    ),
  )

  .add('Ticked',
    withInfo('Add the prop "ticked" to each list item to display tick icons.')(() => (
      <List>
        <ListItem ticked>Lorem</ListItem>
        <ListItem ticked>Ipsum</ListItem>
        <ListItem ticked>Dolor</ListItem>
      </List>),
    ),
  )

  .add('Divided',
    withInfo('Use the prop "divided" to add horizontal lines between the items.')(() => (
      <List modifier="divided">
        <ListItem>Lorem</ListItem>
        <ListItem>Ipsum</ListItem>
        <ListItem>Dolor</ListItem>
      </List>),
    ),
  )

  .add('Ticked and Divided',
    withInfo('You can combine both "ticked" and "divided" to style a list with horizontal dividers and tick icons.')(() => (
      <List modifier="divided">
        <ListItem ticked>Lorem</ListItem>
        <ListItem ticked>Ipsum</ListItem>
        <ListItem ticked>Dolor</ListItem>
      </List>),
    ),
  )

  .add('Inline List',
    withInfo('Apply the modifier "inline" to display all the list items in one line.')(() => (
      <List modifier="inline">
        <ListItem>Lorem</ListItem>
        <ListItem>Ipsum</ListItem>
        <ListItem>Dolor</ListItem>
      </List>),
    ),
  )

  .add('Middot-separated Inline List',
    withInfo('Apply the modifier "middot" to add a middot character between inline list items.')(() => (
      <List modifier="middot">
        <ListItem>Lorem</ListItem>
        <ListItem>Ipsum</ListItem>
        <ListItem>Dolor</ListItem>
      </List>),
    ),
  )

  .add('Split List',
    withInfo('If you wish to split the items in a list into two columns above $breakpoint-medium, you can do so by adding the modifier "split" to the List component.')(() => (
      <List modifier="split">
        <ListItem ticked>Lorem</ListItem>
        <ListItem ticked>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec ipsum augue. Ut arcu
          erat, lacinia sit ametjusto quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ListItem>
        <ListItem ticked>Dolor</ListItem>
        <ListItem ticked>
          Aenean nec ipsum augue. Ut arcu erat, lacinia sit amet justo quis.
        </ListItem>
        <ListItem ticked>Ipsum</ListItem>
        <ListItem ticked>Ut arcu erat, lacinia sit amet justo quis.</ListItem>
      </List>),
    ),
  );
