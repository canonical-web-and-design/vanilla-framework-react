import React from 'react';
import PropTypes from 'prop-types';
import './InlineImages.css';

const InlineImages = (props) => {
  const images = React.Children.map(props.children, child => (
    <li className="p-inline-images__item">
      {child}
    </li>),
  );

  return (
    <ul className="p-inline-images">
      {images}
    </ul>
  );
};

InlineImages.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

InlineImages.displayName = 'InlineImages';

export default InlineImages;
