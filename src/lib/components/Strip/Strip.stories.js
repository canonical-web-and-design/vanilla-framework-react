import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Strip from './Strip';
import Row from './Row';
import Column from './Column';
import Button from '../Button/Button';
import Image from '../Image/Image';

storiesOf('Strip', module)
  .add('Light',
    withInfo('The Strip component provides a full width container in which to wrap Row components. The default colour is "light".')(() => (
      <div style={{ maxWidth: '1030px' }}>
        <Strip>
          <Row>
            <p>This is a light Strip</p>
          </Row>
        </Strip>
      </div>),
    ),
  )

  .add('Dark',
    withInfo('The Strip component provides a full width container in which to wrap Row components. An alternative colour is "dark".')(() => (
      <div style={{ maxWidth: '1030px' }}>
        <Strip colour="dark">
          <Row>
            <p>This is a dark Strip</p>
          </Row>
        </Strip>
      </div>),
    ),
  )

  .add('Accent',
    withInfo('The purpose of the "accent" colour is to display content with a highlighted site accent style.')(() => (
      <div style={{ maxWidth: '1030px' }}>
        <Strip colour="accent">
          <Row>
            <p>This is an accented Strip</p>
          </Row>
        </Strip>
      </div>),
    ),
  )

  .add('Image',
    withInfo('The "image" prop allows for an image to appear as the background on a Strip. The image prop object can also be described with a "colour" key (with light or dark value). This will then override the text colour to ensure it remains visible.')(() => (
      <div style={{ maxWidth: '1030px' }}>
        <Strip image={{
          src: 'https://assets.ubuntu.com/v1/974c4e8c-background-origami.png?w=600',
          colour: 'light',
          }}
        >
          <Row>
            <p>This is an image Strip that has a light image</p>
          </Row>
        </Strip>
        <Strip image={{
          src: 'https://assets.ubuntu.com/v1/ab1a7e82-background.png?w=600',
          colour: 'dark',
          }}
        >
          <Row>
            <p>This is an image Strip that has a dark image</p>
          </Row>
        </Strip>
      </div>),
    ),
  )

  .add('Bordered',
    withInfo('The "bordered" prop is used to add a dividing border at the bottom of the Strip. Note: This should be used when two Strips of the same type are used after each other.')(() => (
      <div style={{ maxWidth: '1030px' }}>
        <Strip bordered>
          <Row>
            <p>This is a bordered Strip</p>
          </Row>
        </Strip>
      </div>),
    ),
  )

  .add('Shallow',
    withInfo('The padding prop with value "shallow" gives the Strip smaller vertical padding.')(() => (
      <div style={{ maxWidth: '1030px' }}>
        <Strip colour="accent" padding="shallow">
          <Row>
            <p>This is a shallow Strip</p>
          </Row>
        </Strip>
      </div>),
    ),
  )

  .add('Deep',
    withInfo('The padding prop with value "deep" gives the Strip larger vertical padding.')(() => (
      <div style={{ maxWidth: '1030px' }}>
        <Strip colour="accent" padding="deep">
          <Row>
            <p>This is a deep Strip</p>
          </Row>
        </Strip>
      </div>),
    ),
  )

  .add('Columns',
    withInfo('The Row component accepts Column components as children. Vanilla uses a 12 column grid, so the sum of all column sizes must be 12. The default size is 12.')(() => {
      const style = { border: '1px solid #cdcdcd', textAlign: 'center' };
      return (
        <div style={{ maxWidth: '1030px' }}>
          <Strip>
            <Row>
              <Column size={6} style={style}>
                6 columns
              </Column>
              <Column size={2} style={style}>
                2 columns
              </Column>
              <Column size={4} style={style}>
                4 columns
              </Column>
            </Row>
            <Row>
              <Column size={3} style={style}>
                3 columns
              </Column>
              <Column size={9} style={style}>
                9 columns
              </Column>
            </Row>
            <Row>
              <Column size={2} style={style}>
                2 columns
              </Column>
              <Column size={7} style={style}>
                7 columns
              </Column>
              <Column size={3} style={style}>
                3 columns
              </Column>
            </Row>
          </Strip>
        </div>
      );
    }),
  )

  .add('Example',
    withInfo('Example of a Strip component with Rows and Columns.')(() => (
      <Strip
        deep
        image={{
          src: 'https://assets.ubuntu.com/v1/ebdfffbf-Aubergine_suru_background.png',
          colour: 'dark',
        }}
        style={{ backgroundPosition: '77% 0%' }}
      >
        <Row style={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
          <Column size={6}>
            <h2>Ubuntu Enterprise Summit</h2>
            <h3>5 &mdash; 6 December 2017</h3>
            <h5>Find out how the world&lsquo;s top companies use Ubuntu to succeed</h5>
            <p>
              <Button value="Sign up now" modifier="positive" />
            </p>
          </Column>
          <Column size={6}>
            <Image src="https://assets.ubuntu.com/v1/9c1315fb-IOT_Ubuntu_devices_inforgrapic+v3.svg" alt="Ubuntu devices infographic" />
          </Column>
        </Row>
      </Strip>),
    ),
  );
