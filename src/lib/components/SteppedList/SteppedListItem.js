import React from 'react';
import PropTypes from 'prop-types';
import './SteppedList.scss';

const SteppedListItem = props => (
  <li className="p-list-step__item">
    <h3 className="p-list-step__title">
      <span className="p-list-step__bullet">{props.bullet ? props.bullet : props.index + 1}</span>
      {props.title}
    </h3>
    <p className={props.detailed ? 'p-list-step__content' : null}>
      {props.children}
    </p>
  </li>
);

SteppedListItem.defaultProps = {
  bullet: '',
  children: '',
  detailed: false,
  index: 0,
};

SteppedListItem.propTypes = {
  bullet: PropTypes.string,
  children: PropTypes.node,
  detailed: PropTypes.bool,
  index: PropTypes.number,
  title: PropTypes.string.isRequired,
};

SteppedListItem.displayName = 'SteppedListItem';

export default SteppedListItem;
