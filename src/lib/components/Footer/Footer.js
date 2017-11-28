import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = props => (
  <footer className="p-footer">
    { props.children }
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.displayName = 'Footer';

export default Footer;
