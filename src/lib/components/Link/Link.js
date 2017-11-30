import React from 'react';
import PropTypes from 'prop-types';
import './Link.scss';

const Link = (props) => {
  let classString = '';

  if (props.modifier) {
    classString = props.modifier.split(/,?\s/).map(modifier => `p-link--${modifier}`).join(' ');
  }

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
  modifier: null,
  top: false,
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  modifier: PropTypes.node,
  top: PropTypes.bool,
};

Link.displayName = 'Link';

export default Link;
