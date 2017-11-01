import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Card from './Card';

storiesOf('Card', module)
  .add('Default',
    withInfo('The purpose of the basic card is to display information, without user interaction.')(() => (
      <Card
        title="Card title"
        image={{
          src: 'http://placekitten.com/g/64/64',
          alt: 'Placeholder',
        }}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </Card>),
    ),
  )
  .add('Highlighted',
    withInfo('The highlighted card should be used when you can interact with the content.')(() => (
      <Card
        modifier="highlighted"
        title="Card title"
        image={{
          src: 'http://placekitten.com/g/64/64',
          alt: 'Placeholder',
        }}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </Card>),
    ),
  );
