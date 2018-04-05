import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

class Link extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { onClick } = this.props;

    if (onClick) {
      event.preventDefault();
      onClick(event);
    }
  }

  render() {
    const {
      children, className, soft, strong, inverted, external, top, href,
    } = this.props;

    const classNames = getClassName({
      [className]: className,
      'p-link': true,
      'p-link--soft': soft,
      'p-link--strong': strong,
      'p-link--inverted': inverted,
      'p-link--external': external,
      'p-top__link': top,
    });

    if (top) {
      return (
        <div className="p-top">
          <a href={href} className={classNames} onClick={this.onClick}>{children}</a>
        </div>
      );
    }

    return (
      <a href={href} className={classNames} onClick={this.onClick}>{children}</a>
    );
  }
}

Link.defaultProps = {
  className: '',
  soft: false,
  strong: false,
  inverted: false,
  external: false,
  top: false,
  onClick: null,
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  soft: PropTypes.bool,
  strong: PropTypes.bool,
  inverted: PropTypes.bool,
  external: PropTypes.bool,
  top: PropTypes.bool,
  onClick: PropTypes.func,
};

Link.displayName = 'Link';

export default Link;
