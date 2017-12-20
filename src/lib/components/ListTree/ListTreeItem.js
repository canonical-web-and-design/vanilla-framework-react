import React from 'react';
import PropTypes from 'prop-types';

const ListTreeItem = props => (
  <li key={props.index} className="p-list-tree__item">
    {props.children}
  </li>
);

ListTreeItem.defaultProps = {
  index: '0',
};

ListTreeItem.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.string,
};

ListTreeItem.displayName = 'ListTreeItem';

export default ListTreeItem;
