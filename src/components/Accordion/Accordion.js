import React from 'react';
import AccordionItem from './AccordionItem';
import './Accordion.css';

class Accordion extends React.Component {
  render() {
    return (
      <aside className="p-accordion" role="tablist">
        <ul className="p-accordion__list">
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
        </ul>
      </aside>
    );
  }
}

export default Accordion;
