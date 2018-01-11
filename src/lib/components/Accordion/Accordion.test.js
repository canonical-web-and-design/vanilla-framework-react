import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

describe('<Accordion>', () => {
  it('renders Accordion with AccordionItems correctly', () => {
    const accordion = ReactTestRenderer.create(
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
    const json = accordion.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('opens an AccordionItem when clicked', () => {
    const accordion = mount(
      <Accordion>
        <AccordionItem title="Accordion Title">
          <p>Accordion Content</p>
        </AccordionItem>
      </Accordion>);

    expect(accordion.find('[aria-expanded=true]')).toHaveLength(0);
    expect(accordion.find('[aria-hidden=true]')).toHaveLength(1);

    accordion.find('button').hostNodes().simulate('click');
    expect(accordion.find('[aria-expanded=true]')).toHaveLength(1);
    expect(accordion.find('[aria-hidden=true]')).toHaveLength(0);
  });

  it('only has maximum one AccordionItem open at a time if allowMultiple=false', () => {
    const accordion = mount(
      <Accordion>
        <AccordionItem title="Accordion Title 1">
          <p>Accordion Content 1</p>
        </AccordionItem>
        <AccordionItem title="Accordion Title 2">
          <p>Accordion Content 2</p>
        </AccordionItem>
      </Accordion>);

    expect(accordion.find('[aria-expanded=true]')).toHaveLength(0);

    accordion.find('#accordion-button-0').hostNodes().simulate('click');
    expect(accordion.find('[aria-expanded=true]')).toHaveLength(1);

    accordion.find('#accordion-button-1').hostNodes().simulate('click');
    expect(accordion.find('[aria-expanded=true]')).toHaveLength(1);

    accordion.find('#accordion-button-1').hostNodes().simulate('click');
    expect(accordion.find('[aria-expanded=true]')).toHaveLength(0);
  });

  it('allows multiple AccordionItems open at a time if allowMultiple=true', () => {
    const accordion = mount(
      <Accordion allowMultiple>
        <AccordionItem title="Accordion Title 1">
          <p>Accordion Content 1</p>
        </AccordionItem>
        <AccordionItem title="Accordion Title 2">
          <p>Accordion Content 2</p>
        </AccordionItem>
      </Accordion>);

    expect(accordion.find('[aria-expanded=true]')).toHaveLength(0);

    accordion.find('#accordion-button-0').hostNodes().simulate('click');
    expect(accordion.find('[aria-expanded=true]')).toHaveLength(1);

    accordion.find('#accordion-button-1').hostNodes().simulate('click');
    expect(accordion.find('[aria-expanded=true]')).toHaveLength(2);

    accordion.find('#accordion-button-1').hostNodes().simulate('click');
    expect(accordion.find('[aria-expanded=true]')).toHaveLength(1);
  });

  it('allows pre-selection of AccordionItems if selected prop provided', () => {
    const accordion = mount(
      <Accordion selected={[0]}>
        <AccordionItem title="Accordion Title 1">
          <p>Accordion Content 1</p>
        </AccordionItem>
        <AccordionItem title="Accordion Title 2">
          <p>Accordion Content 2</p>
        </AccordionItem>
      </Accordion>);

    expect(accordion.find('[aria-expanded=true]')).toHaveLength(1);
  });
});

