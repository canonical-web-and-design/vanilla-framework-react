import React from 'react';
import PropTypes from 'prop-types';
import './Link.scss';

const Link = (props) => {
  let classArray = [];

  if (props.soft) {
    classArray = [...classArray, 'p-link--soft'];
  }

  if (props.strong) {
    classArray = [...classArray, 'p-link--strong'];
  }

  if (props.inverted) {
    classArray = [...classArray, 'p-link--inverted'];
  }

  if (props.external) {
    classArray = [...classArray, 'p-link--external'];
  }

  const classString = classArray.join(' ');

  if (props.top) {
    return (
      <div className="p-top">
        <a href={props.href} className={`${classString} p-top__link`}>{props.children}</a>
      </div>
    );
  }

  return (
    <a href={props.href} className={classString}>{props.children}</a>
  );
};

Link.defaultProps = {
  soft: false,
  strong: false,
  inverted: false,
  external: false,
  top: false,
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  soft: PropTypes.bool,
  strong: PropTypes.bool,
  inverted: PropTypes.bool,
  external: PropTypes.bool,
  top: PropTypes.bool,
};

Link.displayName = 'Link';

export default Link;
