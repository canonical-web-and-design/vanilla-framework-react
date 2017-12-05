import React from 'react';
import PropTypes from 'prop-types';
import './ListTree.scss';

const ListTree = (props) => {
  const listTreeChildren = React.Children.map(props.children, (child, index) =>
    React.cloneElement(child, { index: `${index}` }),
  );

  return (
    <ul className="p-list-tree" aria-multiselectable="true" role="tablist">
      {listTreeChildren}
    </ul>
  );
};

ListTree.propTypes = {
  children: PropTypes.node.isRequired,
};

ListTree.displayName = 'ListTree';

export default ListTree;
