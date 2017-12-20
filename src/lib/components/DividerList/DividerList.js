import React from 'react';
import PropTypes from 'prop-types';

const DividerList = (props) => {
  const dividerItems = React.Children.map(props.children,
    child => React.cloneElement(child, {
      items: React.Children.count(props.children),
    }),
  );

  return (
    <div className="p-divider">
      {dividerItems}
    </div>
  );
};

DividerList.propTypes = {
  children: PropTypes.node.isRequired,
};

DividerList.displayName = 'DividerList';

export default DividerList;
