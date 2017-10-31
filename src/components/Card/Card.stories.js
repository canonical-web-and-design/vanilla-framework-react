import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './Card';

storiesOf('Card', module)
  .add('Default', () => (
    <Card
      title="Card title"
      image={{
        src: 'http://placekitten.com/g/64/64',
        alt: 'Placeholder',
      }}
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    </Card>
  ))
  .add('Highlighted', () => (
    <Card
      modifier="highlighted"
      title="Card title"
      image={{
        src: 'http://placekitten.com/g/64/64',
        alt: 'Placeholder',
      }}
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    </Card>
  ));
