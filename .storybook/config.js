import React from 'react';
import { configure, getStorybook, setAddon, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';
import createPercyAddon from '@percy-io/percy-storybook';

const storybookStyling = (storyFn) => {
  const style = {
    padding: '0 1.25rem',
  }

  return (
    <div style= {style}>
      { storyFn() }
    </div>
  )
}

function loadStories() {
  // Set custom global decorators
  addDecorator(storybookStyling);
  addDecorator(withKnobs);

  const req = require.context('../src', true, /.stories.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

// addon-info
setDefaults({
  inline: true, // Displays info inline vs click button to view
});

// Percy snaps
const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);
serializeStories(getStorybook);

// override option defaults:
setOptions({
  name: 'Vanilla Framework React',
  url: 'https://github.com/vanilla-framework/vanilla-framework-react',
  downPanelInRight: true,
});
