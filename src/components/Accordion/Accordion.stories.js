import React from 'react';
import { storiesOf } from '@storybook/react';

import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

storiesOf('Accordion', module)
  .add('Default', () => (
    <Accordion>
      <AccordionItem title="Title of Item 1">
        <p>Lorem Ipsum has been the industrys standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
        </p>
      </AccordionItem>
      <AccordionItem title="Title of Item 2">
        <p>Lorem Ipsum has been the industrys standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
        </p>
      </AccordionItem>
      <AccordionItem title="Title of Item 3">
        <p>Lorem Ipsum has been the industrys standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
        </p>
      </AccordionItem>
    </Accordion>
  ));
