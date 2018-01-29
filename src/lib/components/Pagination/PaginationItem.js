import React from 'react';
import PropTypes from 'prop-types';

const PaginationItem = (props) => {
  const {
    href, label, next, previous, title,
  } = props;

  let className = 'p-pagination__link';

  if (next) {
    className += '--next';
  } else if (previous) {
    className += '--previous';
  }

  return (
    <a className={className} href={href}>
      <span className="p-pagination__label">{label}</span>
      <span className="p-pagination__title">{title}</span>
    </a>
  );
};

PaginationItem.defaultProps = {
  href: null,
  label: '',
  next: false,
  previous: false,
  title: '',
};

PaginationItem.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
  next: PropTypes.bool,
  previous: PropTypes.bool,
  title: PropTypes.string,
};

PaginationItem.displayName = 'PaginationItem';

export default PaginationItem;
