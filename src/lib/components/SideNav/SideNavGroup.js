import React from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../utils/getClassName';

import SideNavLink from './SideNavLink';

class SideNavGroup extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);

    this.state = { selected: props.selected };
  }

  onClick(e) {
    e.preventDefault();
    const { selected } = this.state;
    this.setState({ selected: !selected });
  }

  render() {
    const { children, href, label } = this.props;
    const { selected } = this.state;

    const className = getClassName({
      sidebar__link: true,
      'is-selected': selected,
    });

    return (
      <li>
        <a className={className} href={href} onClick={this.onClick}>
          { label }
          <i className="p-icon--plus" />
          <i className="p-icon--minus" />
        </a>
        <ul className="sidebar__second-level">
          { children }
        </ul>
      </li>
    );
  }
}

SideNavGroup.defaultProps = {
  children: null,
  href: '#',
  selected: false,
};

SideNavGroup.propTypes = {
  children: (props, propName, componentName) => {
    const prop = props[propName];
    let error = null;

    React.Children.forEach(prop, (child) => {
      if (child.type !== SideNavLink) {
        error = new Error(`${componentName} children should be of type "SideNavLink".`);
      }
    });

    return error;
  },
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

SideNavGroup.displayName = 'SideNavGroup';

export default SideNavGroup;
