import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

const MatrixItem = (props) => {
  const {
    children, className, href, img, title,
  } = props;

  const classNames = getClassName({
    [className]: className,
    'p-matrix__item': true,
  }) || undefined;

  return (
    <li className={classNames}>
      {img && <img className="p-matrix__img" src={img.src} alt={img.alt} />}
      <div className="p-matrix__content">
        {title &&
          <h3 className="p-matrix__title">
            {href ? <a className="p-matrix__link" href={href}>{title}</a> : title}
          </h3>}
        <div className="p-matrix__desc">
          { children }
        </div>
      </div>
    </li>
  );
};

MatrixItem.defaultProps = {
  children: null,
  className: undefined,
  href: '',
  img: null,
  title: '',
};

MatrixItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  img: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  href: PropTypes.string,
  title: PropTypes.string,
};

MatrixItem.displayName = 'MatrixItem';

export default MatrixItem;
