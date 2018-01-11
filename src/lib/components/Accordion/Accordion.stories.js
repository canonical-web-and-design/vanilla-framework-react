import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

storiesOf('Accordion', module)
  .add('Default',
    withInfo('Side bar accordion, used in listing pages or as navigation. Can hold multiple navigation items or to be used as a filter of content. Use to hold filtering items (header and content if available). Do not use to display page content. Each tab styling can be changed to open or collapse using aria-expanded, set true for open and false to close. Using JS this can be changed and to point to what each tab controls via aria-controls. .p-accordion__panel visibility is effected by aria-hidden and again can be manipulated with JS.')(() => (
      <Accordion allowMultiple={boolean('Allow Multiple', false)}>
        <AccordionItem title={text('Title1', 'Title of Item 1')}>
          <p>
            {text('Text1', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')}
          </p>
        </AccordionItem>
        <AccordionItem title={text('Title2', 'Title of Item 2')}>
          <p>
            {text('Text2', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')}
          </p>
        </AccordionItem>
        <AccordionItem title={text('Title3', 'Title of Item 3')}>
          <p>
            {text('Text3', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')}
          </p>
        </AccordionItem>
      </Accordion>),
    ),
  )
  .add('Allow Multiple',
    withInfo('You can override single-open-only behaviour (i.e. a true accordion) by adding the allowMultiple prop.')(() => (
      <Accordion allowMultiple={boolean('Allow Multiple', true)}>
        <AccordionItem title={text('Title1', 'Title of Item 1')}>
          <p>
            {text('Text1', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')}
          </p>
        </AccordionItem>
        <AccordionItem title={text('Title2', 'Title of Item 2')}>
          <p>
            {text('Text2', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')}
          </p>
        </AccordionItem>
        <AccordionItem title={text('Title3', 'Title of Item 3')}>
          <p>
            {text('Text3', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')}
          </p>
        </AccordionItem>
      </Accordion>),
    ),
  )
  .add('Pre-selected',
    withInfo('You can pre-select panels to be open by default by adding the selected prop, which accepts a number or array of numbers (0-indexed).')(() => (
      <Accordion selected={[2]} allowMultiple={boolean('Allow Multiple', false)}>
        <AccordionItem title={text('Title1', 'Title of Item 1')}>
          <p>
            {text('Text1', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')}
          </p>
        </AccordionItem>
        <AccordionItem title={text('Title2', 'Title of Item 2')}>
          <p>
            {text('Text2', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')}
          </p>
        </AccordionItem>
        <AccordionItem title={text('Title3', 'Title of Item 3')}>
          <p>
            {text('Text3', 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')}
          </p>
        </AccordionItem>
      </Accordion>),
    ),
  );
