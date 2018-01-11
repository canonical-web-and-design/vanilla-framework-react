import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Card from './Card';
import Strip from '../Strip/Strip';
import StripColumn from '../Strip/StripColumn';
import StripRow from '../Strip/StripRow';

storiesOf('Card', module)
  .add('Default',
    withInfo('The purpose of the basic card is to display information, without user interaction.')(() => (
      <Card
        highlighted={boolean('Highlighted', false)}
        overlay={boolean('Overlay', false)}
        header={text('Header')}
        title={text('Title', 'Card title')}
      >
        <p>{text('Text', 'Lorem ipsum dolor sit amet, consectetur adipisicing.')}</p>
      </Card>),
    ),
  )

  .add('With Header',
    withInfo('Card components accept either a header or image prop for an optional header.')(() => (
      <Card
        highlighted={boolean('Highlighted', false)}
        overlay={boolean('Overlay', false)}
        header={text('Header', 'Card header')}
        title={text('Title', 'Card title')}
      >
        <p>{text('Text', 'Lorem ipsum dolor sit amet, consectetur adipisicing.')}</p>
      </Card>),
    ),
  )

  .add('With Image',
    withInfo('Card components accept either a header or image prop for an optional header.')(() => (
      <Card
        highlighted={boolean('Highlighted', false)}
        overlay={boolean('Overlay', false)}
        title={text('Title', 'Card title')}
        image={{
          src: 'http://placekitten.com/g/64/64',
          alt: 'Placeholder',
        }}
      >
        <p>{text('Text', 'Lorem ipsum dolor sit amet, consectetur adipisicing.')}</p>
      </Card>),
    ),
  )

  .add('Highlighted',
    withInfo('The highlighted card should be used when you can interact with the content.')(() => (
      <Card
        highlighted={boolean('Highlighted', true)}
        overlay={boolean('Overlay', false)}
        title={text('Title', 'Card title')}
        image={{
          src: 'http://placekitten.com/g/64/64',
          alt: 'Placeholder',
        }}
      >
        <p>{text('Text', 'Lorem ipsum dolor sit amet, consectetur adipisicing.')}</p>
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
        <StripRow>
          <StripColumn size={6}><div /></StripColumn>
          <StripColumn size={6}>
            <Card
              highlighted={boolean('Highlighted', false)}
              overlay={boolean('Overlay', true)}
              title={text('Title', 'Card title')}
              image={{
                src: 'http://placekitten.com/g/64/64',
                alt: 'Placeholder',
              }}
            >
              <p>{text('Text', 'Lorem ipsum dolor sit amet, consectetur adipisicing.')}</p>
            </Card>
          </StripColumn>
        </StripRow>
      </Strip>),
    ),
  );
