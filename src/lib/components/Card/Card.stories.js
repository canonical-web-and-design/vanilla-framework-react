import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Card from './Card';
import Column from '../Strip/Column';
import Row from '../Strip/Row';
import Strip from '../Strip/Strip';

storiesOf('Card', module)
  .add('Default',
    withInfo('The purpose of the basic card is to display information, without user interaction.')(() => (
      <Card title="Card title">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </Card>),
    ),
  )

  .add('With Header',
    withInfo('Card components accept either a header or image prop for an optional header.')(() => (
      <Card header="Card header" title="Card title">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </Card>),
    ),
  )

  .add('With Image',
    withInfo('Card components accept either a header or image prop for an optional header.')(() => (
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
        highlighted
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

  .add('Overlay',
    withInfo('The purpose of the overlay prop is to make the text visible in conjunction with a Strip image component.')(() => (
      <Strip image={{
        src: 'https://assets.ubuntu.com/v1/ab1a7e82-background.png?w=600',
        colour: 'dark',
        }}
      >
        <Row>
          <Column size={6}><div /></Column>
          <Column size={6}>
            <Card
              overlay
              title="Card title"
              image={{
                src: 'http://placekitten.com/g/64/64',
                alt: 'Placeholder',
              }}
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </Card>
          </Column>
        </Row>
      </Strip>),
    ),
  );
