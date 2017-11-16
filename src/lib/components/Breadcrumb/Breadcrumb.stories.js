import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';

storiesOf('Breadcrumb', module)
  .add('Default',
    withInfo('You can use the breadcrumbs pattern to indicate where the current page sits in the sites navigation. The separators between each item are added via CSS, so you dont have to include them manually.')(() => (
      <Breadcrumb>
        <BreadcrumbItem><a href="#a">Breadcrumb One</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#a">Breadcrumb Two</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#a">Breadcrumb Three</a></BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb Four</BreadcrumbItem>
      </Breadcrumb>),
    ),
  );
