import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

const Label = (props) => {
  const {
    children, htmlFor, className, ...otherProps
  } = props;

  const classNames = getClassName({
    [className]: className,
    'p-form__label': true,
  }) || undefined;

  return (
    <label className={classNames} htmlFor={htmlFor} {...otherProps}>{children}</label> // eslint-disable-line
  );
};

Label.defaultProps = {
  children: null,
  className: undefined,
};

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
};

Label.displayName = 'Label';

export default Label;
