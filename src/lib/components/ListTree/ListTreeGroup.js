import React from 'react';
import PropTypes from 'prop-types';
import './ListTree.scss';

class ListTreeGroup extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
      open: false,
    };
  }

  onClick() {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const { index } = this.props;
    const listTreeGroupChildren = React.Children.map(this.props.children, (child, key) =>
      React.cloneElement(child, { index: `${index}-${key}` }),
    );

    return (
      <li className="p-list-tree__item p-list-tree__item--group">
        <button
          className="p-list-tree__toggle"
          id={`listtree-${index}-btn`}
          role="tab"
          aria-controls={`listtree-${index}`}
          aria-expanded={this.state.open}
          onClick={this.onClick}
        >
          {this.props.name}
        </button>
        <ul
          className="p-list-tree"
          id={`listtree-${index}`}
          role="tabpanel"
          aria-hidden={!(this.state.open)}
          aria-labelledby={`listtree-${index}-btn`}
        >
          {listTreeGroupChildren}
        </ul>
      </li>
    );
  }
}

ListTreeGroup.defaultProps = {
  index: '0',
};

ListTreeGroup.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.string,
  name: PropTypes.string.isRequired,
};

ListTreeGroup.displayName = 'ListTreeGroup';

export default ListTreeGroup;
