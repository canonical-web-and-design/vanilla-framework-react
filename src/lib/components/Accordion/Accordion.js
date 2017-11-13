import React from 'react';
import PropTypes from 'prop-types';
import './Accordion.css';

const Accordion = props => (
  <aside className="p-accordion" role="tablist">
    <ul className="p-accordion__list">
      { props.children }
    </ul>
  </aside>
);

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Accordion;
