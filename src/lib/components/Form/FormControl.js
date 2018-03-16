import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';
import FormHelpText from './FormHelpText';
import Input from '../Input/Input';

const FormControl = (props) => {
  const {
    children, className, help, validation,
  } = props;

  const classNames = getClassName({
    [className]: className,
    'p-form__control': true,
    'p-form-validation': validation.status,
    [`is-${validation.status}`]: validation && validation.status,
  }) || undefined;

  const formControlItems = React.Children.map(children, (child) => {
    if (validation.status && child.type === Input) {
      return React.cloneElement(child, { hasValidation: true });
    }
    return child;
  });

  return (
    <div className={classNames}>
      { formControlItems }
      { validation.status && (
        <p className="p-form-validation__message">
          { validation.tag && <strong>{validation.tag}</strong> }
          { validation.message }
        </p>)
      }
      { help && <FormHelpText>{ help }</FormHelpText>}
    </div>
  );
};

FormControl.defaultProps = {
  children: null,
  className: undefined,
  help: null,
  validation: {
    tag: null,
    status: null,
    message: null,
  },
};

FormControl.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  help: PropTypes.node,
  validation: PropTypes.shape({
    tag: PropTypes.string,
    status: PropTypes.oneOf([null, 'caution', 'success', 'error']),
    message: PropTypes.node,
  }),
};

FormControl.displayName = 'FormControl';

export default FormControl;
