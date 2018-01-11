import React from 'react';
import PropTypes from 'prop-types';

import AccordionItem from './AccordionItem';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSection = this.toggleSection.bind(this);

    this.state = { open: props.selected };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.selected });
  }

  toggleSection(index) {
    const { allowMultiple } = this.props;
    let newOpenArray = [...this.state.open];

    if (newOpenArray.includes(index)) {
      newOpenArray = newOpenArray.filter(item => item !== index);
    } else {
      newOpenArray = allowMultiple ? [...newOpenArray, index] : [index];
    }

    this.setState({ open: newOpenArray });
  }

  render() {
    const { open } = this.state;
    const accordionItems = React.Children.map(this.props.children,
      (child, index) => React.cloneElement(child, {
        index,
        isOpen: open.includes(index),
        onClick: this.toggleSection,
      }),
    );

    return (
      <aside className="p-accordion" role="tablist">
        <ul className="p-accordion__list">
          { accordionItems }
        </ul>
      </aside>
    );
  }
}

Accordion.defaultProps = {
  children: null,
  selected: [],
  allowMultiple: false,
};

Accordion.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;

    React.Children.forEach(prop, (child) => {
      if (child.type !== AccordionItem) {
        error = new Error(`${componentName} children should be of type "AccordionItem".`);
      }
    });

    return error;
  },
  selected: PropTypes.arrayOf(PropTypes.number),
  allowMultiple: PropTypes.bool,
};

Accordion.displayName = 'Accordion';

export default Accordion;
