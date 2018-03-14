import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

const FieldSet = (props) => {
  const { children, className, ...otherProps } = props;

  const classNames = getClassName({
    [`${className}`]: className,
  });

  return (
    <fieldset className={classNames} {...otherProps}>
      { children }
    </fieldset>
  );
};

FieldSet.defaultProps = {
  className: undefined,
};

FieldSet.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

FieldSet.displayName = 'FieldSet';

export default FieldSet;
