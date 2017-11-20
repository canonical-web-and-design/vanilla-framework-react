import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import SteppedList from './SteppedList';
import SteppedListItem from './SteppedListItem';

storiesOf('Stepped List', module)
  .add('Default',
    withInfo('If you want to display a list of items that form a set of steps — like a tutorial or instructions — you can use the SteppedList component. This component is best used in a <Strip light> component as the description sections are displayed in a white box.')(() => (
      <div style={{ maxWidth: '45em' }}>
        <SteppedList>
          <SteppedListItem
            title="First step"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem,
            dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl
            vitae turpis iaculis, ut tempor enim gravida.
          </SteppedListItem>
          <SteppedListItem
            title="Second step"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem,
            dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl
            vitae turpis iaculis, ut tempor enim gravida.
          </SteppedListItem>
          <SteppedListItem
            title="Third step"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem,
            dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl
            vitae turpis iaculis, ut tempor enim gravida.
          </SteppedListItem>
          <SteppedListItem
            title="Last but not least"
            bullet="99"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem,
            dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl
            vitae turpis iaculis, ut tempor enim gravida.
          </SteppedListItem>
        </SteppedList>
      </div>),
    ),
  )
  .add('Detailed',
    withInfo('Add the detailed modifier to separate content on either side of the container.')(() => (
      <div style={{ maxWidth: '45em' }}>
        <SteppedList detailed>
          <SteppedListItem
            title="First step"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem,
            dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl
            vitae turpis iaculis, ut tempor enim gravida.
          </SteppedListItem>
          <SteppedListItem
            title="Second step"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem,
            dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl
            vitae turpis iaculis, ut tempor enim gravida.
          </SteppedListItem>
          <SteppedListItem
            title="Third step"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem,
            dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl
            vitae turpis iaculis, ut tempor enim gravida.
          </SteppedListItem>
          <SteppedListItem
            title="Last but not least"
            bullet="99"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed purus lorem,
            dictum vel dolor eu, tincidunt suscipit magna. Suspendisse dignissim nisl
            vitae turpis iaculis, ut tempor enim gravida.
          </SteppedListItem>
        </SteppedList>
      </div>),
    ),
  );
