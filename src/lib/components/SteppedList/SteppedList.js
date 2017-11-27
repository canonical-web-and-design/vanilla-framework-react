import React from 'react';
import PropTypes from 'prop-types';
import './SteppedList.css';

const SteppedList = (props) => {
  if (!props.children) {
    return null;
  }

  const steppedListItems = React.Children.map(props.children,
    (child, index) => React.cloneElement(child, {
      index,
      detailed: props.detailed,
    }),
  );

  return (
    <ol className={props.detailed ? 'p-stepped-list--detailed' : 'p-list-step'}>
      {steppedListItems}
    </ol>
  );
};

SteppedList.defaultProps = {
  children: '',
  detailed: false,
};

SteppedList.propTypes = {
  children: PropTypes.node,
  detailed: PropTypes.bool,
};

SteppedList.displayName = 'SteppedList';

export default SteppedList;
