import React from 'react';
import PropTypes from 'prop-types';
import ensureValueInRange from '../../utils/ensureValueInRange';
import getClassName from '../../utils/getClassName';
import SliderInput from './SliderInput';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    const value = ensureValueInRange(props.value, props.max, props.min);
    this.state = { value };
  }

  componentWillReceiveProps(nextProps) {
    const { value, max, min } = nextProps;
    const newValue = ensureValueInRange(value, max, min);

    this.setState({ value: newValue });
  }

  handleChange(e) {
    const { max, min } = this.props;
    const targetValue = Number(e.target.value);
    const newValue = ensureValueInRange(targetValue, max, min);

    this.setState({ value: newValue });
  }

  // Fix for Chrome and Safari as they don't support CSS slider progress
  handleStyle() {
    const { value } = this.state;
    const { max, min } = this.props;

    const ratio = (value - min) / (max - min);
    return { backgroundImage: `-webkit-gradient(linear, left top, right top, color-stop(${ratio}, #335280), color-stop(${ratio}, #fff))` };
  }

  render() {
    const {
      className, disabled, max, min, showValue, step,
    } = this.props;
    const { value } = this.state;

    let style;
    if (/Chrome/i.test(navigator.userAgent) || /Safari/i.test(navigator.userAgent)) {
      style = this.handleStyle();
    }

    const classNames = getClassName({
      [className]: className,
      'p-slider': true,
    }) || undefined;

    return (
      <div className="p-slider__wrapper">
        <input
          className={classNames}
          disabled={disabled}
          max={max}
          min={min}
          step={step}
          style={style}
          type="range"
          value={value}
          onChange={this.handleChange}
        />
        {showValue &&
        <SliderInput
          disabled={disabled}
          value={value}
          onChange={this.handleChange}
        />}
      </div>
    );
  }
}

Slider.defaultProps = {
  className: undefined,
  disabled: false,
  max: 100,
  min: 0,
  showValue: false,
  step: 1,
  value: undefined,
};

Slider.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  showValue: PropTypes.bool,
  step: PropTypes.number,
  value: PropTypes.number,
};

Slider.displayName = 'Slider';

export default Slider;
