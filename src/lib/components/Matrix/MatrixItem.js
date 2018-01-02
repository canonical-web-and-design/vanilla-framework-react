import React from 'react';
import PropTypes from 'prop-types';

const MatrixItem = (props) => {
  const {
    children, href, img, title,
  } = props;

  return (
    <li className="p-matrix__item">
      {img && <img className="p-matrix__img" src={img.src} alt={img.alt} />}
      <div className="p-matrix__content">
        {title &&
          <h3 className="p-matrix__title">
            {href ? <a className="p-matrix__link" href={href}>{title}</a> : title}
          </h3>}
        <p className="p-matrix__desc">
          { children }
        </p>
      </div>
    </li>
  );
};

MatrixItem.defaultProps = {
  children: null,
  href: '',
  img: null,
  title: '',
};

MatrixItem.propTypes = {
  children: PropTypes.node,
  img: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  href: PropTypes.string,
  title: PropTypes.string,
};

MatrixItem.displayName = 'MatrixItem';

export default MatrixItem;
