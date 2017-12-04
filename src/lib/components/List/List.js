import React from 'react';
import PropTypes from 'prop-types';
import './List.scss';

const getClassName = (modifier) => {
  switch (modifier) {
    case 'divided':
      return 'p-list--divided';
    case 'inline':
      return 'p-inline-list';
    case 'middot':
      return 'p-inline-list--middot';
    case 'split':
      return 'p-list--divided is-split';
    default:
      return 'p-list';
  }
};

class List extends React.Component {
  render() {
    const listItems = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        modifier: this.props.modifier,
      }),
    );

    return (
      <ul className={getClassName(this.props.modifier)}>
        { listItems }
      </ul>
    );
  }
}

List.defaultProps = {
  modifier: null,
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  modifier: PropTypes.oneOf(['divided', 'inline', 'middot', 'split']),
};

List.displayName = 'List';

export default List;
