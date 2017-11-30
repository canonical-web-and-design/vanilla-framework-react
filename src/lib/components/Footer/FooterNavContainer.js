import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const FooterNavContainer = props => (
  <nav className="p-footer__nav">
    <ul className="p-footer__links">
      { props.children }
    </ul>
  </nav>
);

FooterNavContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

FooterNavContainer.displayName = 'FooterNavContainer';

export default FooterNavContainer;
