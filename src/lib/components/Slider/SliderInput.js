import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

const SliderInput = (props) => {
  const {
    className, value, ...otherProps
  } = props;

  const classNames = getClassName({
    [className]: className,
    'p-slider__input': true,
  }) || undefined;

  return (
    <input
      className={classNames}
      type="text"
      value={value}
      {...otherProps}
    />
  );
};

SliderInput.defaultProps = {
  className: undefined,
  maxLength: 3,
  value: undefined,
};

SliderInput.propTypes = {
  className: PropTypes.string,
  maxLength: PropTypes.number,
  value: PropTypes.number,
};

SliderInput.displayName = 'SliderInput';

export default SliderInput;
