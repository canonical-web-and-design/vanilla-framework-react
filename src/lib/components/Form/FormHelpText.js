import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

const FormHelpText = (props) => {
  const { children, className } = props;

  const classNames = getClassName({
    'p-form-help-text': true,
    [`${className}`]: className,
  }) || undefined;

  return (
    <p className={classNames}>{ children }</p>
  );
};

FormHelpText.defaultProps = {
  children: null,
  className: undefined,
};

FormHelpText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

FormHelpText.displayName = 'FormHelpText';

export default FormHelpText;
