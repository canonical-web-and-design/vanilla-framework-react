import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Strip from './Strip';
import StripRow from './StripRow';
import StripColumn from './StripColumn';
import Button from '../Button/Button';
import Image from '../Image/Image';

const stripColours = ['light', 'dark', 'accent'];
const imageColours = ['light', 'dark'];
const images = [
  'https://assets.ubuntu.com/v1/974c4e8c-background-origami.png?w=600',
  'https://assets.ubuntu.com/v1/ab1a7e82-background.png?w=600',
];
const paddings = [null, 'shallow', 'deep'];

storiesOf('Strip', module)
  .add('Light',
    withInfo('The Strip component provides a full width container in which to wrap StripRow components. The default colour is "light".')(() => (
      <div style={{ maxWidth: '1030px' }}>
        <Strip
          bordered={boolean('Bordered', false)}
          colour={select('Colour', stripColours, 'light')}
          padding={select('Padding', paddings, null)}
        >
          <StripRow>
            <p>{text('Text', 'This is a light Strip')}</p>
          </StripRow>
        </Strip>
      </div>),
    ),
  )

  .add('Dark',
    withInfo('The Strip component provides a full width container in which to wrap StripRow components. An alternative colour is "dark".')(() => (
      <div style={{ maxWidth: '1030px' }}>
        <Strip
          bordered={boolean('Bordered', false)}
          colour={select('Colour', stripColours, 'dark')}
          padding={select('Padding', paddings, null)}
        >
          <StripRow>
            <p>{text('Text', 'This is a dark Strip')}</p>
          </StripRow>
        </Strip>
      </div>),
    ),
  )

  .add('Accent',
    withInfo('The purpose of the "accent" colour is to display content with a highlighted site accent style.')(() => (
      <div style={{ maxWidth: '1030px' }}>
        <Strip
          bordered={boolean('Bordered', false)}
          colour={select('Colour', stripColours, 'accent')}
          padding={select('Padding', paddings, null)}
        >
          <StripRow>
            <p>{text('Text', 'This is an accented Strip')}</p>
          </StripRow>
        </Strip>
      </div>),
    ),
  )

  .add('Light Image',
    withInfo('The "image" prop allows for an image to appear as the background on a Strip. The image prop object can also be described with a "colour" key (with light or dark value). This will then override the text colour to ensure it remains visible.')(() => (
      <div style={{ maxWidth: '1030px' }}>
        <Strip
          bordered={boolean('Bordered', false)}
          padding={select('Padding', paddings, null)}
          image={{
            src: select('Image Src', images, 'https://assets.ubuntu.com/v1/974c4e8c-background-origami.png?w=600'),
            colour: select('Image Colour', imageColours, 'light'),
          }}
        >
          <StripRow>
            <p>{text('Text', 'This is an image Strip with a light background')}</p>
          </StripRow>
        </Strip>
      </div>),
    ),
  )

  .add('Dark Image',
    withInfo('The "image" prop allows for an image to appear as the background on a Strip. The image prop object can also be described with a "colour" key (with light or dark value). This will then override the text colour to ensure it remains visible.')(() => (
      <div style={{ maxWidth: '1030px' }}>
        <Strip
          bordered={boolean('Bordered', false)}
          padding={select('Padding', paddings, null)}
          image={{
            src: select('Image Src', images, 'https://assets.ubuntu.com/v1/ab1a7e82-background.png?w=600'),
            colour: select('Image Colour', imageColours, 'dark'),
          }}
        >
          <StripRow>
            <p>{text('Text', 'This is an image Strip with a dark background')}</p>
          </StripRow>
        </Strip>
      </div>),
    ),
  )

  .add('Bordered',
    withInfo('The "bordered" prop is used to add a dividing border at the bottom of the Strip. Note: This should be used when two Strips of the same type are used after each other.')(() => (
      <div style={{ maxWidth: '1030px' }}>
        <Strip
          bordered={boolean('Bordered', true)}
          colour={select('Colour', stripColours, 'light')}
          padding={select('Padding', paddings, null)}
        >
          <StripRow>
            <p>{text('Text', 'This is a light Strip')}</p>
          </StripRow>
        </Strip>
      </div>),
    ),
  )

  .add('Shallow',
    withInfo('The padding prop with value "shallow" gives the Strip smaller vertical padding.')(() => (
      <div style={{ maxWidth: '1030px' }}>
        <Strip
          bordered={boolean('Bordered', false)}
          colour={select('Colour', stripColours, 'light')}
          padding={select('Padding', paddings, 'shallow')}
        >
          <StripRow>
            <p>{text('Text', 'This is a light Strip')}</p>
          </StripRow>
        </Strip>
      </div>),
    ),
  )

  .add('Deep',
    withInfo('The padding prop with value "deep" gives the Strip larger vertical padding.')(() => (
      <div style={{ maxWidth: '1030px' }}>
        <Strip
          bordered={boolean('Bordered', false)}
          colour={select('Colour', stripColours, 'light')}
          padding={select('Padding', paddings, 'deep')}
        >
          <StripRow>
            <p>{text('Text', 'This is a light Strip')}</p>
          </StripRow>
        </Strip>
      </div>),
    ),
  )

  .add('StripColumns',
    withInfo('The StripRow component accepts StripColumn components as children. Vanilla uses a 12 column grid, so the sum of all column sizes must be 12. The default size is 12.')(() => {
      const style = { border: '1px solid #cdcdcd', textAlign: 'center' };
      return (
        <div style={{ maxWidth: '1030px' }}>
          <Strip>
            <StripRow>
              <StripColumn size={6} style={style}>
                6 columns
              </StripColumn>
              <StripColumn size={2} style={style}>
                2 columns
              </StripColumn>
              <StripColumn size={4} style={style}>
                4 columns
              </StripColumn>
            </StripRow>
            <StripRow>
              <StripColumn size={3} style={style}>
                3 columns
              </StripColumn>
              <StripColumn size={9} style={style}>
                9 columns
              </StripColumn>
            </StripRow>
            <StripRow>
              <StripColumn size={2} style={style}>
                2 columns
              </StripColumn>
              <StripColumn size={7} style={style}>
                7 columns
              </StripColumn>
              <StripColumn size={3} style={style}>
                3 columns
              </StripColumn>
            </StripRow>
          </Strip>
        </div>
      );
    }),
  )

  .add('Example',
    withInfo('Example of a Strip component with StripRows and StripColumns.')(() => (
      <Strip
        deep
        image={{
          src: 'https://assets.ubuntu.com/v1/ebdfffbf-Aubergine_suru_background.png',
          colour: 'dark',
        }}
        style={{ backgroundPosition: '77% 0%' }}
      >
        <StripRow style={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
          <StripColumn size={6}>
            <h2>Ubuntu Enterprise Summit</h2>
            <h3>5 &mdash; 6 December 2017</h3>
            <h4>Find out how the world&lsquo;s top companies use Ubuntu to succeed</h4>
            <div>
              <Button positive value="Sign up now" />
            </div>
          </StripColumn>
          <StripColumn size={6}>
            <Image src="https://assets.ubuntu.com/v1/9c1315fb-IOT_Ubuntu_devices_inforgrapic+v3.svg" alt="Ubuntu devices infographic" />
          </StripColumn>
        </StripRow>
      </Strip>),
    ),
  );
