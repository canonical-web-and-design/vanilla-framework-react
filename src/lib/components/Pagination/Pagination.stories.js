import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Pagination from './Pagination';
import PaginationItem from './PaginationItem';

storiesOf('Pagination', module)
  .add('Next',
    withInfo('The Pagination component should be used to navigate from one article to the next or previous in a chronological fashion.')(() => (
      <Pagination>
        <PaginationItem
          next={boolean('Next', true)}
          previous={boolean('Previous', false)}
          href={text('href', '')}
          label={text('Label', 'Next')}
          title={text('Title', 'Consectetur adipisicing elit')}
        />
      </Pagination>),
    ),
  )

  .add('Previous',
    withInfo('info')(() => (
      <Pagination>
        <PaginationItem
          next={boolean('Next', false)}
          previous={boolean('Previous', true)}
          href={text('href', '')}
          label={text('Label', 'Previous')}
          title={text('Title', 'Lorem ipsum dolor sit amet')}
        />
      </Pagination>),
    ),
  )

  .add('Both',
    withInfo('info')(() => (
      <Pagination>
        <PaginationItem
          previous
          href={text('Prev href', '')}
          label={text('Prev Label', 'Previous')}
          title={text('Prev Title', 'Lorem ipsum dolor sit amet')}
        />
        <PaginationItem
          next
          href={text('Next href', '')}
          label={text('Next Label', 'Next')}
          title={text('Next Title', 'Consectetur adipisicing elit')}
        />
      </Pagination>),
    ),
  );
