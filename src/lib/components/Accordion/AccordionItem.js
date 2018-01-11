import React from 'react';
import PropTypes from 'prop-types';

const AccordionItem = (props) => {
  const {
    isOpen, onClick, index, title, children,
  } = props;

  return (
    <li className="p-accordion__group">
      <button
        className="p-accordion__tab"
        id={`accordion-button-${index}`}
        role="tab"
        aria-controls={`accordion-content-${index}`}
        aria-expanded={isOpen}
        onClick={() => onClick(index)}
        onKeyDown={key => key === 'Enter' && onClick(index)}
      >
        { title }
      </button>
      <section
        className="p-accordion__panel"
        id={`accordion-content-${index}`}
        role="tabpanel"
        aria-hidden={!isOpen}
        aria-labelledby={`accordion-button-${index}`}
      >
        { children }
      </section>
    </li>
  );
};

AccordionItem.defaultProps = {
  index: 0,
  isOpen: false,
  onClick: () => 1,
};

AccordionItem.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
