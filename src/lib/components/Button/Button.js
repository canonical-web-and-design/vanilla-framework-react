import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
      children, value, disabled, neutral, brand, negative, positive, inline, href,
    } = this.props;

    const Tag = href ? 'a' : 'button';

    const className = classNames({
      'p-button--base': !(positive || negative || neutral || brand),
      'p-button--positive': positive,
      'p-button--negative': negative,
      'p-button--neutral': neutral,
      'p-button--brand': brand,
      'is-inline': inline,
      'is--disabled': (Tag === 'a' && disabled),
    });

    return (
      <Tag
        className={className}
        href={Tag === 'a' ? href : undefined}
        onClick={this.onClick}
        disabled={disabled}
      >
        { value || children }
      </Tag>
    );
  }
}

Button.defaultProps = {
  brand: false,
  children: null,
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
