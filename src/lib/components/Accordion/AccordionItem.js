import React from 'react';
import PropTypes from 'prop-types';
import './Accordion.css';

class AccordionItem extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.index);
  }

  render() {
    return (
      <li className="p-accordion__group">
        <button
          className="p-accordion__tab"
          id="status-tab"
          role="tab"
          aria-controls="#status"
          aria-expanded={this.props.isOpen}
          onClick={this.onClick}
          onKeyDown={this.onClick}
        >
          { this.props.title }
        </button>
        <section
          className="p-accordion__panel"
          id="status"
          role="tabpanel"
          aria-hidden={!this.props.isOpen}
          aria-labelledby="status-tab"
        >
          { this.props.children }
        </section>
      </li>
    );
  }
}

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

export default AccordionItem;
