import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import InlineImages from './InlineImages';
import Image from '../Image/Image';

storiesOf('Inline Images', module)
  .add('Default',
    withInfo("The InlineImages component can be used to showcase a group of related images, such as a group of customer or partner logos. Vanilla's Image components and <img> tags are accepted children.")(() => (
      <InlineImages>
        <Image bordered src="http://placekitten.com/g/200/200" alt="" />
        <Image bordered src="http://placekitten.com/g/400/400" alt="" />
        <Image bordered src="http://placekitten.com/g/300/300" alt="" />
        <Image bordered src="http://placekitten.com/g/500/500" alt="" />
        <Image bordered src="http://placekitten.com/g/800/800" alt="" />
        <img src="http://placekitten.com/g/700/700" alt="" />
      </InlineImages>),
    ),
  );
