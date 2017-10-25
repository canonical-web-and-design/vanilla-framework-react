import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

describe('Accordion component should render expected markup', () => {
  it('should compare the component with a snapshot', () => {
    const accordionComponent = ReactTestRenderer.create(
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
      </Accordion>,
    );
    const json = accordionComponent.toJSON();
    expect(json).toMatchSnapshot();
  });
});

