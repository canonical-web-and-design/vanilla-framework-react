import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

class Button extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { disabled, onClick } = this.props;

    if (disabled) {
      event.preventDefault();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  }

  render() {
    const {
      children, className, value, disabled, href, positive,
      negative, brand, neutral, inline, ...otherProps
    } = this.props;
    const Tag = href ? 'a' : 'button';

    const customClasses = this.props.className;
    const classNames = getClassName({
      'p-button--base': !(positive || negative || brand || neutral),
      'p-button--neutral': neutral,
      'p-button--positive': positive,
      'p-button--negative': negative,
      'p-button--brand': brand,
      'is-inline': inline,
      'is--disabled': disabled,
      [`${customClasses}`]: customClasses,
    });

    return (
      <Tag
        className={classNames}
        href={Tag === 'a' ? href : undefined}
        onClick={this.onClick}
        disabled={disabled}
        {...otherProps}
      >
        { value || children }
      </Tag>
    );
  }
}

Button.defaultProps = {
  brand: false,
  children: null,
  className: null,
  disabled: false,
  href: null,
  inline: false,
  negative: false,
  neutral: false,
  onClick: () => null,
  positive: false,
  value: null,
};

Button.propTypes = {
  brand: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  inline: PropTypes.bool,
  negative: PropTypes.bool,
  neutral: PropTypes.bool,
  onClick: PropTypes.func,
  positive: PropTypes.bool,
  value: PropTypes.string,
};

Button.displayName = 'Button';

export default Button;
