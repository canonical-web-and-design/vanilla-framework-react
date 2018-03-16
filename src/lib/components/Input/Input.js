import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

function inputTag(type) {
  if (type === 'select') {
    return 'select';
  } else if (type === 'textarea') {
    return 'textarea';
  }
  return 'input';
}

const Input = (props) => {
  const {
    className, hasValidation, type, ...otherProps
  } = props;

  const classNames = getClassName({
    [className]: className,
    'p-form-validation__input': hasValidation,
  }) || undefined;

  const Tag = inputTag(type);

  return (
    <Tag
      className={classNames}
      type={type}
      {...otherProps}
    />
  );
};

Input.defaultProps = {
  className: undefined,
  type: 'text',
  hasValidation: false,
};

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'text', 'password', 'file', 'checkbox', 'radio', 'select', 'textarea', 'date',
    'hidden', 'month', 'time', 'week', 'color', 'number', 'email', 'url', 'tel',
  ]),
  hasValidation: PropTypes.bool,
};

Input.displayName = 'Input';

export default Input;
