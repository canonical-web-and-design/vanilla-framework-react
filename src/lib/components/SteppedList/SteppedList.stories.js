import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import SteppedList from './SteppedList';
import SteppedListItem from './SteppedListItem';

storiesOf('Stepped List', module)
  .add('Default',
    withInfo('If you want to display a list of items that form a set of steps — like a tutorial or instructions — you can use the SteppedList component. This component is best used in a <Strip light> component as the description sections are displayed in a white box.')(() => (
      <div style={{ maxWidth: '45em' }}>
        <SteppedList detailed={boolean('Detailed', false)}>
          <SteppedListItem
            title={text('Title1', 'First step')}
            bullet={text('Bullet1')}
          >
            {text('Text1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem, dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl vitae turpis iaculis, ut tempor enim gravida.')}
          </SteppedListItem>
          <SteppedListItem
            title={text('Title2', 'Second step')}
            bullet={text('Bullet2')}
          >
            {text('Text2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem, dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl vitae turpis iaculis, ut tempor enim gravida.')}
          </SteppedListItem>
          <SteppedListItem
            title={text('Title3', 'Third step')}
            bullet={text('Bullet3')}
          >
            {text('Text3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem, dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl vitae turpis iaculis, ut tempor enim gravida.')}
          </SteppedListItem>
          <SteppedListItem
            title={text('Title4', 'Last but not least')}
            bullet={text('Bullet4', '99')}
          >
            {text('Text4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem, dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl vitae turpis iaculis, ut tempor enim gravida.')}
          </SteppedListItem>
        </SteppedList>
      </div>),
    ),
  )
  .add('Detailed',
    withInfo('Add the detailed modifier to separate content on either side of the container.')(() => (
      <div style={{ maxWidth: '45em' }}>
        <SteppedList detailed={boolean('Detailed', true)}>
          <SteppedListItem
            title={text('Title1', 'First step')}
            bullet={text('Bullet1')}
          >
            {text('Text1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem, dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl vitae turpis iaculis, ut tempor enim gravida.')}
          </SteppedListItem>
          <SteppedListItem
            title={text('Title2', 'Second step')}
            bullet={text('Bullet2')}
          >
            {text('Text2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem, dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl vitae turpis iaculis, ut tempor enim gravida.')}
          </SteppedListItem>
          <SteppedListItem
            title={text('Title3', 'Third step')}
            bullet={text('Bullet3')}
          >
            {text('Text3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem, dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl vitae turpis iaculis, ut tempor enim gravida.')}
          </SteppedListItem>
          <SteppedListItem
            title={text('Title4', 'Last but not least')}
            bullet={text('Bullet4', '99')}
          >
            {text('Text4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem, dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl vitae turpis iaculis, ut tempor enim gravida.')}
          </SteppedListItem>
        </SteppedList>
      </div>),
    ),
  );
