import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

const Link = (props) => {
  const {
    soft, strong, inverted, external, top,
  } = props;
  const customClasses = props.className;

  const className = getClassName({
    'p-link--soft': soft,
    'p-link--strong': strong,
    'p-link--inverted': inverted,
    'p-link--external': external,
    'p-top__link': top,
    [`${customClasses}`]: customClasses,
  });

  if (top) {
    return (
      <div className="p-top">
        <a href={props.href} className={className}>{props.children}</a>
      </div>
    );
  }

  return (
    <a href={props.href} className={className}>{props.children}</a>
  );
};

Link.defaultProps = {
  className: '',
  soft: false,
  strong: false,
  inverted: false,
  external: false,
  top: false,
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
};

Link.displayName = 'Link';

export default Link;
