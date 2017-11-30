import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ListTree from './ListTree';
import ListTreeGroup from './ListTreeGroup';
import ListTreeItem from './ListTreeItem';
import Link from '../Link/Link';
import Image from '../Image/Image';

storiesOf('List Tree', module)
  .add('Default',
    withInfo('The ListTree component can be used to show a directory style listing, such as a list of files and folders within a directory.')(() => (
      <ListTree>
        <ListTreeGroup name="/folder">
          <ListTreeItem>file</ListTreeItem>
        </ListTreeGroup>
        <ListTreeItem>
          <Link strong href="#a">charm-helpers-sync.yaml</Link>
        </ListTreeItem>
        <ListTreeItem>
          <Link strong href="#a">config.yaml</Link>
        </ListTreeItem>
        <ListTreeGroup name="/files">
          <ListTreeItem>default_rsync</ListTreeItem>
          <ListTreeItem>nagios_plugin.py</ListTreeItem>
          <ListTreeGroup name="/plugins">
            <ListTreeItem>check_mem.pl</ListTreeItem>
          </ListTreeGroup>
          <ListTreeGroup name="/misc">
            <ListTreeGroup name="/cat">
              <ListTreeItem>
                <Image bordered src="http://placekitten.com/g/300/300" alt="" />
              </ListTreeItem>
            </ListTreeGroup>
          </ListTreeGroup>
        </ListTreeGroup>
      </ListTree>),
    ),
  );
