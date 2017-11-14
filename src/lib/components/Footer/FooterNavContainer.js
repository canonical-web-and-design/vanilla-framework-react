import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

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

export default FooterNavContainer;
