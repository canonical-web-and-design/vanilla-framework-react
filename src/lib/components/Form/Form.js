import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

const Form = (props) => {
  const {
    children, className, inline, stacked, ...otherProps
  } = props;

  const classNames = getClassName({
    'p-form': true,
    'p-form--inline': inline && !stacked,
    'p-form--stacked': stacked && !inline,
    [`${className}`]: className,
  }) || undefined;

  return (
    <form className={classNames} {...otherProps}>
      {children}
    </form>
  );
};

Form.defaultProps = {
  children: null,
  className: undefined,
  inline: false,
  stacked: false,
};

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  inline: PropTypes.bool,
  stacked: PropTypes.bool,
};

Form.displayName = 'Form';

export default Form;
