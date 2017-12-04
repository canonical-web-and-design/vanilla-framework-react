import React from 'react';
import PropTypes from 'prop-types';
import './Image.scss';

const Image = (props) => {
  let classArray = [];

  if (props.bordered) {
    classArray = [...classArray, 'p-image--bordered'];
  }
  if (props.shadowed) {
    classArray = [...classArray, 'p-image--shadowed'];
  }

  const classString = classArray.join(' ');

  return <img className={classString} src={props.src} alt={props.alt} />;
};

Image.defaultProps = {
  alt: '',
  bordered: false,
  shadowed: false,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  bordered: PropTypes.bool,
  shadowed: PropTypes.bool,
};

Image.displayName = 'Image';

export default Image;
