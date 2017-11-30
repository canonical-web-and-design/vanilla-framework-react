import React from 'react';
import PropTypes from 'prop-types';
import './HeadingIcon.scss';

const HeadingIcon = props => (
  <div className="p-heading-icon">
    <div className="p-heading-icon__header">
      <img className="p-heading-icon__img" alt={props.alt} src={props.src} />
      <h3 className="p-heading-icon__title">{props.title}</h3>
    </div>
    {props.children}
  </div>
);

HeadingIcon.defaultProps = {
  alt: '',
  children: '',
};

HeadingIcon.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  children: PropTypes.node,
};

HeadingIcon.displayName = 'HeadingIcon';

export default HeadingIcon;
