import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

const SideNavLink = (props) => {
  const {
    children, href, label, selected,
  } = props;

  const className = getClassName({
    sidebar__link: true,
    'is-selected': selected,
  });

  return (
    <li>
      <a className={className} href={href}>
        {label}
        {children}
      </a>
    </li>
  );
};

SideNavLink.defaultProps = {
  children: null,
  selected: false,
};

SideNavLink.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

SideNavLink.displayName = 'SideNavLink';

export default SideNavLink;
