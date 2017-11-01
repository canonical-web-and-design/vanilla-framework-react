import { configure, addDecorator, getStorybook, setAddon } from '@storybook/react';
import React from 'react';

import createPercyAddon from '@percy-io/percy-storybook';
const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

configure(
  () => {
    const req = require.context('../src', true, /.stories.js$/);
    req.keys().forEach((filename) => req(filename));
  },
  module
);

serializeStories(getStorybook);
