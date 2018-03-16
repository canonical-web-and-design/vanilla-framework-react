import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

const FormGroup = (props) => {
  const { children, className } = props;

  const classNames = getClassName({
    [className]: className,
    'p-form__group': true,
  }) || undefined;

  return (
    <div className={classNames}>
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
