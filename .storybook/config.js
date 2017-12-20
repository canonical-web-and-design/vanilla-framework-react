import React from 'react';
import { configure, addDecorator, getStorybook, setAddon } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
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

// addon-info
setDefaults({
  inline: true, // Displays info inline vs click button to view
});

// Percy snaps
serializeStories(getStorybook);

// override option defaults:
setOptions({
  name: 'Vanilla React',
  url: 'https://github.com/vanilla-framework/vanilla-framework-react',
  downPanelInRight: true,
});
