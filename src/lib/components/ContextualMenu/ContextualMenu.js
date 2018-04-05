import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

import ContextualMenuDropdown from './ContextualMenuDropdown';

class ContextualMenu extends React.Component {
  constructor() {
    super();

    this.toggleOpen = this.toggleOpen.bind(this);
    this.state = { open: false };
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const {
      className, children, id, position, ...otherProps
    } = this.props;

    const classNames = getClassName({
      [className]: className,
      'p-contextual-menu': true,
      [`p-contextual-menu--${position}`]: position,
    }) || undefined;

    const toggle = React.Children.map(children, (child) => {
      if (child.type !== ContextualMenuDropdown) {
        return React.cloneElement(child, {
          className: 'p-contextual-menu__toggle',
          'aria-controls': id,
          'aria-expanded': this.state.open,
          'aria-haspopup': 'true',
          role: 'link',
          onClick: this.toggleOpen,
          tabIndex: 0,
        });
      } else if (child.type === ContextualMenuDropdown) {
        return React.cloneElement(child, {
          id,
          'aria-hidden': !this.state.open,
        });
      }
      return child;
    });

    return (
      <span
        className={classNames}
        {...otherProps}
      >
        {toggle}
      </span>
    );
  }
}

ContextualMenu.defaultProps = {
  children: null,
  className: null,
  position: null,
};

ContextualMenu.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;
    let count = 0;

    React.Children.forEach(prop, (child) => {
      if (child.type === ContextualMenuDropdown) {
        count += 1;
      }
    });

    if (count !== 1) {
      error = new Error(`${componentName} should have exactly one "ContextualMenuDropdown" child.`);
    }

    return error;
  },
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['left', 'center']),
};

ContextualMenu.displayName = 'ContextualMenu';

export default ContextualMenu;
