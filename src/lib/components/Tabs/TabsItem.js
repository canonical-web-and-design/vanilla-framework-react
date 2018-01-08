import React from 'react';
import PropTypes from 'prop-types';

class TabsItem extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { index, onClick } = this.props;
    onClick(index);
  }

  render() {
    const {
      children, href, index, isSelected, onClick,
    } = this.props;

    return (
      <li className="p-tabs__item" role="presentation">
        <a
          href={href}
          className="p-tabs__link"
          tabIndex={index + 1}
          role="tab"
          aria-controls={`tab-${index}`}
          aria-selected={isSelected}
          onClick={this.onClick}
          onKeyPress={event => event.key === 'Enter' && onClick(index)}
        >
          { children }
        </a>
      </li>
    );
  }
}

TabsItem.defaultProps = {
  href: null,
  index: 0,
  isSelected: false,
  onClick: () => 1,
};

TabsItem.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

TabsItem.displayName = 'TabsItem';

export default TabsItem;
