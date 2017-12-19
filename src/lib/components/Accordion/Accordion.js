import React from 'react';
import PropTypes from 'prop-types';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSection = this.toggleSection.bind(this);
    this.state = {
      open: props.selected,
    };
  }

  toggleSection(index) {
    this.setState({ open: this.state.open === index ? null : index });
  }

  render() {
    const { open } = this.state;
    const accordionItems = React.Children.map(this.props.children,
      (child, index) => React.cloneElement(child, {
        index,
        isOpen: open === index,
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
  selected: null,
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.number,
};

Accordion.displayName = 'Accordion';

export default Accordion;
