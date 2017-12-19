import React from 'react';
import PropTypes from 'prop-types';

const FooterNav = props => (
  <li className="p-footer__item">
    <a className="p-footer__link" href={props.link}>{ props.title }</a>
  </li>
);

FooterNav.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

FooterNav.displayName = 'FooterNav';

export default FooterNav;
