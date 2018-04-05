import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

import ContextualMenuGroup from './ContextualMenuGroup';

const ContextualMenuDropdown = (props) => {
  const { children, className, ...otherProps } = props;

  const classNames = getClassName({
    [className]: className,
    'p-contextual-menu__dropdown': true,
  }) || undefined;

  const dropdownItems = React.Children.map(children, (child) => {
    if (child.type !== ContextualMenuGroup) {
      const childClasses = getClassName({
        [child.props.className]: child.props.className,
        'p-contextual-menu__link': true,
      });
      return React.cloneElement(child, {
        className: childClasses,
      });
    }
    return child;
  });

  return (
    <span className={classNames} {...otherProps}>
      { dropdownItems }
    </span>
  );
};

ContextualMenuDropdown.defaultProps = {
  children: null,
  className: null,
};

ContextualMenuDropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

ContextualMenuDropdown.displayName = 'ContextualMenuDropdown';

export default ContextualMenuDropdown;
