import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

const FormGroup = (props) => {
  const { children } = props;

  const customClasses = props.className;
  const className = getClassName({
    'p-form__group': true,
    [`${customClasses}`]: customClasses,
  }) || undefined;

  return (
    <div className={className}>
      { children }
    </div>
  );
};

FormGroup.defaultProps = {
  children: undefined,
  className: '',
};

FormGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

FormGroup.displayName = 'FormGroup';

export default FormGroup;
