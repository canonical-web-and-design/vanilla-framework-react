import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

const ContextualMenuGroup = (props) => {
  const { children, className, ...otherProps } = props;

  const classNames = getClassName({
    [className]: className,
    'p-contextual-menu__group': true,
  }) || undefined;

  const items = React.Children.map(children, (child) => {
    const childClasses = getClassName({
      [child.props.className]: child.props.className,
      'p-contextual-menu__link': true,
    });
    return React.cloneElement(child, {
      className: childClasses,
    });
  });

  return (
    <span className={classNames} {...otherProps}>
      {items}
    </span>
  );
};

ContextualMenuGroup.defaultProps = {
  children: null,
  className: null,
};

ContextualMenuGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

ContextualMenuGroup.displayName = 'ContextualMenuGroup';

export default ContextualMenuGroup;
