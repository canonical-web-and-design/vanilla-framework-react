import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
  let classArray = [];

  if (props.bordered) {
    classArray = [...classArray, 'p-image--bordered'];
  }
  if (props.shadowed) {
    classArray = [...classArray, 'p-image--shadowed'];
  }

  const classString = classArray.join(' ');

  return <img style={props.style} className={classString} src={props.src} alt={props.alt} />;
};

Image.defaultProps = {
  alt: '',
  bordered: false,
  shadowed: false,
  style: null,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  bordered: PropTypes.bool,
  shadowed: PropTypes.bool,
  style: PropTypes.object,
};

Image.displayName = 'Image';

export default Image;
