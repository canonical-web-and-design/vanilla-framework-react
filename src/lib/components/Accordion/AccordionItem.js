import React from 'react';
import PropTypes from 'prop-types';
import './Accordion.css';

class AccordionItem extends React.Component {
  constructor() {
    super();
    this.accordionItemToggle = this.accordionItemToggle.bind(this);
    this.state = {
      hidden: true,
    };
  }

  accordionItemToggle() {
    const currentState = this.state.hidden;
    this.setState({ hidden: !currentState });
  }

  render() {
    return (
      <li className="p-accordion__group">
        <button
          className="p-accordion__tab"
          id="status-tab"
          role="tab"
          aria-controls="#status"
          aria-expanded={!this.state.hidden}
          onClick={() => this.accordionItemToggle(this)}
          onKeyDown={() => this.accordionItemToggle(this)}
        >
          { this.props.title }
        </button>
        <section
          className="p-accordion__panel"
          id="status"
          role="tabpanel"
          aria-hidden={this.state.hidden}
          aria-labelledby="status-tab"
        >
          { this.props.children }
        </section>
      </li>
    );
  }
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default AccordionItem;
