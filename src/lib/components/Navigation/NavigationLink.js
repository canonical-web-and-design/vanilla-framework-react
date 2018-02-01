import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

const NavigationLink = (props) => {
  const { href, label, selected } = props;

  const className = getClassName({
    'p-navigation__link': true,
    'is-selected': selected,
  });

  return (
    <li className={className} role="menuitem">
      <a href={href}>
        {label}
      </a>
    </li>
  );
};

NavigationLink.defaultProps = {
  selected: false,
};

NavigationLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

NavigationLink.displayName = 'NavigationLink';

export default NavigationLink;
