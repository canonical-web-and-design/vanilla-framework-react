import React from 'react';
import PropTypes from 'prop-types';

import TabsItem from './TabsItem';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSelected = this.toggleSelected.bind(this);
    this.state = {
      selected: props.selected,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selected: nextProps.selected });
  }

  toggleSelected(index) {
    if (this.state.selected !== index) {
      this.setState({ selected: index });
    }
  }

  render() {
    const { selected } = this.state;
    const { children } = this.props;

    const tabItems = React.Children.map(children,
      (child, index) => React.cloneElement(child, {
        index,
        isSelected: selected === index,
        onClick: this.toggleSelected,
      }),
    );

    return (
      <nav className="p-tabs">
        <ul className="p-tabs__list" role="tablist">
          { tabItems }
        </ul>
      </nav>
    );
  }
}

Tabs.defaultProps = {
  children: null,
  selected: 0,
};

Tabs.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;

    React.Children.forEach(prop, (child) => {
      if (child.type !== TabsItem) {
        error = new Error(`${componentName} children should be of type "TabsItem".`);
      }
    });

    return error;
  },
  selected: PropTypes.number,
};

Tabs.displayName = 'Tabs';

export default Tabs;
